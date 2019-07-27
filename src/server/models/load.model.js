const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Load = new Schema({
    date: {
        type: String
    },
    vendor: {
        type: String
    },
    price: {
        type: Number
    },
});

module.exports = mongoose.model('Load', Load);