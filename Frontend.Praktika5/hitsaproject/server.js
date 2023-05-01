const express = require('express')
const projectRoutes = require('./routes/routes_project')
const sequelize = require('../../Frontend.Praktika5/hitsaproject/node_modules/utils/database')
const app = express()
const PORT = process.env.PORT || 3000
app.use('/api', projectRoutes)
async function start() {
    try {
        //await sequelize.sync()
        app.listen(PORT)
    } catch (error) {
        console.log(error)
    }
}
start()
