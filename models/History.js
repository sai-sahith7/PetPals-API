const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
    email: String,
    petname: String,
    petcare: Boolean,
    category: String,
    duration: Number,
    date: String,
    status: String,
    price: Number,
    remarks: String
});

module.exports = mongoose.model('History', HistorySchema);