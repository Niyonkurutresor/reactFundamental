const express = require('express')
const userController = require('../controllers/userController')
const { validate } = require('../middlewares/validate')
const {signupSchema,loginScham }= require('../validations/usersValdation')
const {isUser} = require('../middlewares/isUser')



const routs = express()


routs.post('/signup',validate(signupSchema),userController.createuser)
routs.post('/login',validate(loginScham),userController.login)
routs.post('/logout',userController.logout)
routs.get('/users',userController.otherUsers)

module.exports = routs
