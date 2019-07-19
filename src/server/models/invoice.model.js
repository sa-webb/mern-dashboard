const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Invoice = new Schema({
    logger_name: {
        type: String
    },
    date: {
        type: String
    },
    full: {
        type: Number
    },
    empty: {
        type: Number
    },
    difference: {
        type: Number
    },
    tons: {
        type: Number
    },
    species: {
        type: String
    },
    price: {
        type: Number
    },
    total: {
        type: Number
    }
});

module.exports = mongoose.model('Invoice', Invoice);