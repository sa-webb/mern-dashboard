const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Invoice = new Schema({
    name: {
        type: String
    },
    date: {
        type: Date
    },
    full: {
        type: Number
    }
});

module.exports = mongoose.model('Invoice', Invoice);