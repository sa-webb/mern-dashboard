const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Item = new Schema({
    name: {
        type: String
    },
    quantity: {
        type: Number
    },
    unit_price: {
        type: Number
    }
});

module.exports = mongoose.model('Item', Item);