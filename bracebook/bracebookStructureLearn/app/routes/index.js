const express = require('express')
const userRouts = require('./user')
const postRouts = require('./post')
const routs = express()


routs.use('/user', userRouts);
routs.use('/post', postRouts)


module.exports =
{ routs }
