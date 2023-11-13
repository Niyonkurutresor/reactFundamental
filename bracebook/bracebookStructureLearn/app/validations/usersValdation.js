const joi = require('joi')
const joipassword = require('joi-password-complexity')


const complexityOperation = {
    min: 8,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4,
  }


const signupSchema = joi.object({
    username:joi.string().alphanum().min(4).max(100).required(),
    password:joipassword(complexityOperation).required(),
    confirmPassword:joi.ref('password'),
    email:joi.string().email().required(),
    firstName:joi.string().min(3).max(100).required(),
    lastName:joi.string().min(3).max(100).required(),
    gender:joi.string().min(4).max(10),
    date_of_birth:joi.date().required(),
})


//login schema
const loginScham = joi.object({
  username:joi.string().alphanum().min(4).max(100).required(),
  password:joipassword(complexityOperation).required(),
})

module.exports = {
  signupSchema,
  loginScham
}