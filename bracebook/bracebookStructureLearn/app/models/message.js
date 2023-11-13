const mongoose = require ('mongoose')
const friendshipSchema = new mongoose.Schema({
    senderId:{type:mongoose.Schema.Types.ObjectId},
    receiverId:{type:mongoose.Schema.Types.ObjectId},
    content,
    creationDate:{
        type:Date,
        default:Date.now()
    },
})


// virtual age of message.
  userSchema.virtual('age').get(function() {
    const now = new Date();
    const ageInMilliseconds = now - this.date_of_birth;
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const ageInYears = ageInMilliseconds / millisecondsInYear;
    return Math.floor(ageInYears);
  });

const friendship = mongoose.model('friendship',friendshipSchema)

module.exports = friendship