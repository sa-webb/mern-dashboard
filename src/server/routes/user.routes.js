var express = require('express');
var router = express.Router();

let User = require('../models/user.model');

router.route('/add').post(function(req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
});

router.get('/', async (req, res) => {
    const users = await User.find({});
    res.json(users);
})

module.exports = router;