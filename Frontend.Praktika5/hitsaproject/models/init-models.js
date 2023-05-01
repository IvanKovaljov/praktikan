var DataTypes = require("sequelize").DataTypes;
var _city = require("./city");
var _country = require("./country");
var _countrylanguage = require("./countrylanguage");
var _sisu = require("./sisu");
var _tstudent = require("./tstudent");

function initModels(sequelize) {
  var city = _city(sequelize, DataTypes);
  var country = _country(sequelize, DataTypes);
  var countrylanguage = _countrylanguage(sequelize, DataTypes);
  var sisu = _sisu(sequelize, DataTypes);
  var tstudent = _tstudent(sequelize, DataTypes);


  return {
    city,
    country,
    countrylanguage,
    sisu,
    tstudent,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
