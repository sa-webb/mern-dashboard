const express = require("express");
const router = express.Router();

let Freight = require("../models/freight.model");

router.route("/add").post(function(req, res) {
    let freight = new Freight(req.body);
    freight
        .save()
        .then(freight => {
            res.status(200).json({ freight: "added successfully"});
        })
        .catch(err => {
            res.status(400).send("new freight failed");
        });
});

router.get("/", async (req, res) => {
    const loads = await Freight.find({});
    res.json(loads);
});

module.exports = router;