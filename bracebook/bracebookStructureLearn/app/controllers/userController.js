const Usermodel = require('../models/user')
const dotenv = require('../config/env/development')
const {hashPassword,comparePassword}= require('../helpers/bcrypt')
const {sign, verfiy} = require('../helpers/jwt')
const {setCookie,getCookie} = require('../helpers/cookie')
const {sendEmail} = require('../helpers/email')
const { json } = require('body-parser')


class controller {
    //creating user/ signup
    static async createuser(req,res){
        try {
            const {username,password,email,firstName,lastName,gender,date_of_birth,profile} = req.body
            const newpassword = await hashPassword(password)
            //storing data into database
            const newUser = await Usermodel.create({username,password:newpassword,email,firstName,lastName,gender,date_of_birth,profile})
            sendEmail(email)
            //create tooken 
            const token = sign(newUser._id,dotenv.JTW_SECTERT,{expirIn:'1h'})
            newUser.password = undefined

            //send token in cookie to browser
            setCookie(res,'token',token,1)
            res.status(200).json({message:'users is creted successfuly',user:newUser})
        } 
        catch (error) {
            console.log('something went wrong, user is not created', error)
            res.status(400).json({message:'error accured',error:error})
        }
    }


    //login
    static async login(req,res){
        try {
            const {username,password} = req.body
           
            const user = await Usermodel.findOne({username:username})
            if(!user) return res.status(401).json({message:'invalid email or password'})
            const userPassword = user.password
            const correctPassword = comparePassword(password,userPassword)
            user.password = undefined
            if(!correctPassword) return res.status(401).json({message:'invalid password'})
            const token = sign(user._id,dotenv.JTW_SECTERT,{expirIn:'1h'})
            setCookie(res,'token',token,1)
            res.status(200).json({message:'wellcome user', user:user})
        } 
        catch (error) {
            res.status(4001).json({message:'signin isnot allowed ',error:error})
        }
    }

    //logout
    static async logout(req,res){
        try {
            setCookie(res,'token','',0)
            res.status(200).json({message:'you log out, your cookie is destroned'}) 
        } 
        catch (error) {
            res.status(401).json({message:'server error',error:error})
        }
    }

    //find all users
    static async otherUsers(req,res){
        try {
            const allUsers = await Usermodel.find()
            res.status(200).json({message:'hear is all users that use blacebook',users:allUsers})
        } 
        catch (error) {
            res.status(400).json({message:'server error',error:error})
        }
    }

}

module.exports = controller;