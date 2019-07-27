let Item = require('../models/item.model');

exports.item_add = function(req, res) {
  let item = new Item(req.body);
  item
    .save()
    .then(item => {
      res.status(200).json({ item: 'added successfully' });
    })
    .catch(err => {
      res.status(400).send('new freight failed');
    });
};

exports.item_get_all = async (req, res) => {
    const items = await Item.find({});
    await res.json(items);
};

exports.item_recent_count = async (req, res) => {
    Item.aggregate(
      [
        {
          $count: "count"
        }
      ],
      function(err, results) {
        if (err) {
          res.json(500, err);
        } else {
          res.json(results);
        }
      }
    );
  };