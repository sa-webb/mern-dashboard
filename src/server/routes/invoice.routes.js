var express = require("express");
var router = express.Router();

let Invoice = require("../models/invoice.model");

router.route("/add").post(function(req, res) {
  let invoice = new Invoice(req.body);
  invoice
    .save()
    .then(invoice => {
      res.status(200).json({ invoice: "invoice added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new invoice failed");
    });
});

router.get("/", async (req, res) => {
  const invoices = await Invoice.find({});
  res.json(invoices);
});

router.get('/total', async (req, res) => {
  Invoice.aggregate([
    {
      $count: 'count'
    }
  ], function(err, results) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json(results);
    }
  })
});

router.route('/update/:id').post(function(req, res) {
  Invoice.findById(req.params.id, function(err, invoice) {
      if (!invoice)
          res.status(404).send('data is not found');
      else
          invoice.date = req.body.date;
          invoice.name = req.body.name;
          invoice.full = req.body.full;
          invoice.empty = req.body.empty;
          invoice.pounds = req.body.pounds;
          invoice.tons = req.body.tons;
          invoice.species = req.body.species;
          invoice.price = req.body.price;
          invoice.total = req.body.total;

          invoice.save().then(invoice => {
              res.json('invoice updated');
          })
          .catch(err => {
              res.status(400).send("Update not possible");
          });
  });
});

router.route('/delete/:id').delete(function(req, res) {
  Invoice.remove({
    _id: req.params.id,
  }, function(err, invoice) {
      if (err)
        return console.error(err);

      console.log('Successfully removed!');
      res.status(200).send();
    
  })
});

module.exports = router;
