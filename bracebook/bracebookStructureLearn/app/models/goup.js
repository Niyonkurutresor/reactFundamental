const mongoose = require('mongoose');
const groupSchema = new mongoose.Schema({
    groupName :String,
    groupMember:[{type:mongoose.Schema.Types.ObjectId}],
    postsId:[{type:mongoose.Schema.Types.ObjectId}],
    comments:[{type:mongoose.Schema.Types.objectId}],
})

const Group = mongoose.model('Group',groupSchema);

module.exports = Group;