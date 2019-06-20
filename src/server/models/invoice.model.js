const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Invoice = new Schema({
    name: {
        type: String
    },
    full: {
        type: Number
    }
});

module.exports = mongoose.model('Invoice', Invoice);