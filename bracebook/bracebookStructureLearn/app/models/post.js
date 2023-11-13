const mongoose = require ('mongoose')
const postSchema = new mongoose.Schema({
    userId:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
    title:String,
    content:String,
    like:{type:mongoose.Types.ObjectId, ref:'Like'},
    comment:{type:mongoose.Types.ObjectId, ref:'Comment'},
});

// virtual days of message.
  postSchema.virtual('age').get(function() {
    const now = new Date();
    const ageInMilliseconds = now - this.creationDate;
    const millisecondsInYear = 1000 * 60 * 60 * 24;
    const ageInYears = ageInMilliseconds / millisecondsInYear;
    return Math.floor(ageInYears);
  });

const Post = mongoose.model('Post',postSchema);

module.exports = { Post };
