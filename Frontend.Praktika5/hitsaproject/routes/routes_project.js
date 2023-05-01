const { Router } = require('express');
const router = Router();
const Sequelize = require('sequelize');
const sequelize = require('../../../backendnodeproject2/node_modules/utils/database');
const country = require('../../../backendnodeproject2/models/country')(sequelize, Sequelize.DataTypes);
const city = require('../../../backendnodeproject2/models/city')(sequelize, Sequelize.DataTypes);

country.hasMany(city, { foreignKey: 'countrycode' });
city.belongsTo(country, { foreignKey: 'countrycode' });

country.belongsTo(city, { as: 'capital-country', foreignKey: 'capital' });

//a. näidata kõiki riike 
router.get('/allCountries', async (req, res) => {
    country.findAll({
        attributes: ['name', 'code'],
        group: ['name', 'code'],
        order: [['name', 'ASC']]
    }).then((result) => res.json(result))
});

//b. näidata kõiki määratud mandri riike (riigi nimi, pealinn)
router.get('/countriesByContinent/:continent', async (req, res) => {
    const countryContinent = req.params.continent;
    country.findAll({
        where: { continent: countryContinent },
        attributes: ['continent', 'name'],
        include: [
            {
                model: city,
                as: 'capital-country',
                attributes: ['name']
            }
        ]
    }).then((result) => res.json(result))
});

//c. näidata täielikku teavet määratud linna kohta (2 GET - päringut: linnakoodi ja nime järgi) 
//linnakoodi järgi
router.get('/cityByCode/:id', async (req, res) => {
    const cityId = parseInt(req.params.id);
    city.findOne({
        where: { id: cityId },
        include: [{ model: country }]
    }).then((result) => res.json(result));
});

//nime järgi
router.get('/cityByName/:name', async (req, res) => {
    const cityName = req.params.name;
    city.findOne({
        where: { name: cityName },
        include: [{ model: country }]
    }).then((result) => res.json(result));
});

//d. näidata täielikku teavet määratud riigi kohta (teave riigi ja linnade kohta). Andmete lugemiseks looge ka 2 päringut: riigi koodi ja nime järgi. 
//koodi järgi
router.get('/countryByCode/:code', async (req, res) => {
    const countryCode = req.params.code;
    country.findOne({
        where: { code: countryCode },
        attributes: { exclude: ['capital'] },
        include: [{
            model: city,
            as: 'capital-country',
            attributes: ['name']
        }, {
            model: city
        }],
    }).then((result) => res.json(result));
});

//nime järgi
router.get('/countryByName/:name', async (req, res) => {
    const countryName = req.params.name;
    country.findOne({
        where: { name: countryName },
        attributes: { exclude: ['capital'] },
        include: [{
            model: city,
            as: 'capital-country',
            attributes: ['name']
        }, {
            model: city
        }],
    }).then((result) => res.json(result));
});

module.exports = router;
