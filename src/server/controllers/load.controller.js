let Load = require('../models/load.model');

exports.load_add = function(req, res) {
  let item = new Load(req.body);
  item
    .save()
    .then(item => {
      res.status(200).json({ item: 'added successfully' });
    })
    .catch(err => {
      res.status(400).send('new freight failed');
    });
};

exports.load_get_all = async (req, res) => {
    const items = await Load.find({});
    await res.json(items);
};

exports.load_recent_count = async (req, res) => {
    Load.aggregate(
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