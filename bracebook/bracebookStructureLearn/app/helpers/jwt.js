
const jwt = require('jsonwebtoken')
const dotenv = require('../config/env/development')
const sign = (payload) => jwt.sign({payload},dotenv.JTW_SECTERT ,{expiresIn:'48h'})
const verfiy = (token) => jwt.verify(token,dotenv.JTW_SECTERT);

module.exports = {
    sign,
    verfiy,
}

