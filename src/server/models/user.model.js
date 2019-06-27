const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    passwordConfirmation: {
        type: String
    },
});

module.exports = mongoose.model('User', User);