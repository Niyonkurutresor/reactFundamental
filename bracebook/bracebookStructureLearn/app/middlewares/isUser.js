const {getCookie} = require('../helpers/cookie')
const {verfiy} = require('../helpers/jwt')

async function isUser(req,res,next){
    const token = getCookie(req,token);
        if(!token) return res.status(400).json({message:'please signup or sinin to continue'})
        const isUser = await verfiy(token)
        if(!isUser) return res.status(400).json({message:'you are not allowed to access the info'})
        next()
}

module.exports = {
    isUser
}