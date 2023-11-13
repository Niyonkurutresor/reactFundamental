const mongoose = require ('mongoose')
const notificationSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId},
    friendId:{type:mongoose.Schema.Types.ObjectId},
    creationDate:{
        type:Date,
        default:Date.now()
    },
})

//virtual age of notification.
  userSchema.virtual('age').get(function() {
    const now = new Date();
    const ageInMilliseconds = now - this.creationDate;
    const millisecondsInYear = 1000 * 60 * 60 * 24;
    const ageInYears = ageInMilliseconds / millisecondsInYear;
    return Math.floor(ageInYears);
  });

const Notification = mongoose.model('Notification',notificationSchema)

module.exports = Notification