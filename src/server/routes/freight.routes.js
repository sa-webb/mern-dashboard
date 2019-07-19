const express = require("express");
const router = express.Router();

const freight_controller = require("../controllers/freight.controller");

router.get('/', freight_controller.freight_get_all);

router.post('/add', freight_controller.freight_add);

router.get('/count', freight_controller.freight_recent_count);

module.exports = router;