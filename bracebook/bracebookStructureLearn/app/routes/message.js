const express = require('express')
const Message = require('../controllers/userController')
const routs = express()

routs.post('/sendMessage',user.createuser)

module.exports = routs