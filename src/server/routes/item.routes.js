const express = require("express");
const router = express.Router();

const item_controller = require("../controllers/item.controller");

router.get('/', item_controller.item_get_all);

router.post('/add', item_controller.item_add);

router.get('/count', item_controller.item_recent_count);

module.exports = router;