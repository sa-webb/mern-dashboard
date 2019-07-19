const express = require("express");
const router = express.Router();

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

// router.route('/:id').get(function(req, res) {
//   let id = req.params.id;
//   Invoice.findById(id, function(err, invoice) {
//       if (err) {
//           console.log(err);
//       } else { 
//       res.json(invoice);
//       }
//   });
// });

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

router.get('/tons', async (req, res) => {
  Invoice.aggregate([
    {
      $group: {
        _id: 1, 
        total: {
          $sum: '$tons'
        }
      }
    }
  ], function(err, results) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json(results);
    }
  })
});

router.get('/poplar', async (req, res) => {
  Invoice.aggregate([
    {
      $match: {
        species: 'poplar'
      }
    }, {
      $group: {
        _id: null, 
        result: {
          $sum: '$tons'
        }
      }
    }
  ], function(err, results) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json(results);
    }
  })
});

router.get('/poplartotal', async (req, res) => {
  Invoice.aggregate([
    {
      $match: {
        species: 'poplar'
      }
    }, {
      $group: {
        _id: null, 
        result: {
          $sum: '$total'
        }
      }
    }
  ], function(err, results) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json(results);
    }
  })
});

router.get('/redoak', async (req, res) => {
  Invoice.aggregate([
    {
      $match: {
        species: 'red oak'
      }
    }, {
      $group: {
        _id: null, 
        result: {
          $sum: '$tons'
        }
      }
    }
  ], function(err, results) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json(results);
    }
  })
});

router.get('/redoaktotal', async (req, res) => {
  Invoice.aggregate([
    {
      $match: {
        species: 'red oak'
      }
    }, {
      $group: {
        _id: null, 
        result: {
          $sum: '$total'
        }
      }
    }
  ], function(err, results) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json(results);
    }
  })
});

router.get('/whiteoak', async (req, res) => {
  Invoice.aggregate([
    {
      $match: {
        species: 'white oak'
      }
    }, {
      $group: {
        _id: null, 
        result: {
          $sum: '$tons'
        }
      }
    }
  ], function(err, results) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json(results);
    }
  })
});

router.get('/whiteoaktotal', async (req, res) => {
  Invoice.aggregate([
    {
      $match: {
        species: 'white oak'
      }
    }, {
      $group: {
        _id: null, 
        result: {
          $sum: '$total'
        }
      }
    }
  ], function(err, results) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json(results);
    }
  })
});

router.get('/mixed', async (req, res) => {
  Invoice.aggregate([
    {
      $match: {
        species: 'mx'
      }
    }, {
      $group: {
        _id: null, 
        result: {
          $sum: '$tons'
        }
      }
    }
  ], function(err, results) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json(results);
    }
  })
});

router.get('/mixedtotal', async (req, res) => {
  Invoice.aggregate([
    {
      $match: {
        species: 'mx'
      }
    }, {
      $group: {
        _id: null, 
        result: {
          $sum: '$total'
        }
      }
    }
  ], function(err, results) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json(results);
    }
  })
});

router.get('/pine', async (req, res) => {
  Invoice.aggregate([
    {
      $match: {
        species: 'pine'
      }
    }, {
      $group: {
        _id: null, 
        result: {
          $sum: '$tons'
        }
      }
    }
  ], function(err, results) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json(results);
    }
  })
});

router.get('/pinetotal', async (req, res) => {
  Invoice.aggregate([
    {
      $match: {
        species: 'pine'
      }
    }, {
      $group: {
        _id: null, 
        result: {
          $sum: '$total'
        }
      }
    }
  ], function(err, results) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json(results);
    }
  })
});

router.get('/hickory', async (req, res) => {
  Invoice.aggregate([
    {
      $match: {
        species: 'hickory'
      }
    }, {
      $group: {
        _id: null, 
        result: {
          $sum: '$tons'
        }
      }
    }
  ], function(err, results) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json(results);
    }
  })
});

router.get('/hickorytotal', async (req, res) => {
  Invoice.aggregate([
    {
      $match: {
        species: 'hickory'
      }
    }, {
      $group: {
        _id: null, 
        result: {
          $sum: '$total'
        }
      }
    }
  ], function(err, results) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json(results);
    }
  })
});

router.get('/cedar', async (req, res) => {
  Invoice.aggregate([
    {
      $match: {
        species: 'cedar'
      }
    }, {
      $group: {
        _id: null, 
        result: {
          $sum: '$tons'
        }
      }
    }
  ], function(err, results) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json(results);
    }
  })
});

router.get('/cedartotal', async (req, res) => {
  Invoice.aggregate([
    {
      $match: {
        species: 'cedar'
      }
    }, {
      $group: {
        _id: null, 
        result: {
          $sum: '$total'
        }
      }
    }
  ], function(err, results) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json(results);
    }
  })
});

router.get('/misc', async (req, res) => {
  Invoice.aggregate([
    {
      $match: {
        species: 'misc'
      }
    }, {
      $group: {
        _id: null, 
        result: {
          $sum: '$tons'
        }
      }
    }
  ], function(err, results) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json(results);
    }
  })
});

router.get('/misctotal', async (req, res) => {
  Invoice.aggregate([
    {
      $match: {
        species: 'misc'
      }
    }, {
      $group: {
        _id: null, 
        result: {
          $sum: '$total'
        }
      }
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

router.get("/quicklook", async (req, res) => {
  const loads = await Invoice.find({}).limit(5);
  res.json(loads);
})

module.exports = router;
