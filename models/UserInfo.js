const mongoose = require('mongoose');

const UserInfoSchema = new mongoose.Schema({
    name: String,
    email: String, 
    city: String,
    phone: Number,
    address: String,
    Gender: String,
    age: Number,
    bio: String,
});

module.exports = mongoose.model('UserInfo',UserInfoSchema);