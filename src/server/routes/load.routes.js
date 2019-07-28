const express = require("express");
const router = express.Router();

const load_controller = require("../controllers/load.controller");

router.get('/', load_controller.load_get_all);

router.post('/add', load_controller._add);

router.get('/count', load_controller.load_recent_count);

module.exports = router;