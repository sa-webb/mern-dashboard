const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Freight = new Schema({
    num: {
        type: String
    },
    date: {
        type: Date
    },
    vendor: {
        type: String
    },
    customer: {
        type: String
    },
    location: {
        type: String
    },
    product_order_id: {
        type: String
    },
    q1: {
        type: Number
    },
    d1: {
        type: String
    },
    am1: {
        type: Number
    },
    q2: {
        type: Number
    },
    d2: {
        type: String
    },
    am2: {
        type: Number
    },
    q3: {
        type: Number
    },
    d3: {
        type: String
    },
    am3: {
        type: Number
    },
    q4: {
        type: Number
    },
    d4: {
        type: String
    },
    am4: {
        type: Number
    },
    total: {
        type: Number
    }
});

module.exports = mongoose.model('Freight', Freight);