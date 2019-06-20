var express = require('express');
var router = express.Router();

let Invoice = require('../models/invoice.model');

router.route('/add').post(function(req, res) {
    let invoice = new Invoice(req.body);
    invoice.save()
        .then(invoice => {
            res.status(200).json({'invoice': 'invoice added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new invoice failed');
        });
});

router.get('/', async (req, res) => {
    const invoices = await Invoice.find({});
    res.json(invoices);
})

module.exports = router;