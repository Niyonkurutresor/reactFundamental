const express = require('express');
const bodyparser =require('body-parser')
const db = require('./app/config/db'); 
const helmet = require('helmet')//protection from corse site scripting it makes http proctection
const logger = require('logger')//keep track about the req,res taking place on the server.


const { routs } = require('./app/routes/index')


const app = express()
app.use(express.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(helmet())
app.use('/api',routs)

db()

//routs

module.exports = { app }
