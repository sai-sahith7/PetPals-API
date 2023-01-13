const mongoose = require('mongoose');

const PetsSchema = new mongoose.Schema({
    name: String,
    location: String,
    image: String,
    category: String,
    bio: String,
    age: String,
    gender: String,
    colour: String,
    breed: String,
    price: String
});

module.exports = mongoose.model('Pets', PetsSchema);