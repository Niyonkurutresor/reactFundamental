const mongoose = require ('mongoose')

// user id will be commenter id 
const commentSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId},
    postId:{type:mongoose.Schema.Types.ObjectId},
    content:String,
    creationDate:Date,
})

const Comment= mongoose.model('Comment',commentSchema)

module.exports = Comment