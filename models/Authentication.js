const mongoose = require('mongoose');

const AuthenticationSchema = new mongoose.Schema({
    email: String,
    password: String
});

module.exports = mongoose.model('Authentication', AuthenticationSchema);