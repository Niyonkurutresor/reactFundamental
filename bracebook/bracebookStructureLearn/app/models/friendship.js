const mongoose = require ('mongoose')
const friendshipSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId},
    friendId:{type:mongoose.Schema.Types.ObjectId},
    creationDate:{
        type:Date,
        default:Date.now()
    },
})

const friendship = mongoose.model('friendship',friendshipSchema)

module.exports = friendship