const express = require('express')
const Notification = require('../controllers/notificationController')
const routs = express()

routs.post('/signup')

module.exports = routs