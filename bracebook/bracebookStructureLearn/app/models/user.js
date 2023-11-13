const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    confirmPassword:String,
    email:String,
    firstName:String,
    lastName: String,
    gender:String,
    date_of_birth:{
        type:Date,
        default:Date.now(),
    },
    profile:String
})

// concatinating first name with last name to get full name.
userSchema.virtual("name").get(function () {
    return this.firstName + ", " + this.lastName;
  });

 //virtual rink for users
  userSchema.virtual("url").get(function () {
    return "/catalog/user/" + this._id;
  });

// rirtual age of users.
  userSchema.virtual('age').get(function() {
    const now = new Date();
    const ageInMilliseconds = now - this.date_of_birth;
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const ageInYears = ageInMilliseconds / millisecondsInYear;
    return Math.floor(ageInYears);
  });

  // user model
module.exports = mongoose.model('User',userSchema)
