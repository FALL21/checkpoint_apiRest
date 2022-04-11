const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    favoriteFoods: {
        default: Array
    }
});

 module.exports = mongoose.model('User', userSchema);