const express = require('express')
let app = express()
let routes = require('./routes')
let env = process.env.NODE_ENV;
if(!env){
	env = 'development'
}
let config = require(`./config/config.${env}.json`);
require('./database')(`mongodb://${config.databaseConfig.host}:27017/${config.databaseConfig.database}`)

const port = process.env.port || 3000

app.use(routes)

app.listen(port, () =>{
     console.log('Server initialiazed on port ' + port) 
})