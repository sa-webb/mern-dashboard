let Freight = require("../models/freight.model");

exports.freight_add = function(req, res) {
  let freight = new Freight(req.body);
  freight
    .save()
    .then(freight => {
      res.status(200).json({ freight: "added successfully" });
    })
    .catch(err => {
      res.status(400).send("new freight failed");
    });
};

exports.freight_get_all = async (req, res) => {
  const loads = await Freight.find({});
  await res.json(loads);
};

exports.freight_recent_count = async (req, res) => {
  Freight.aggregate(
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
