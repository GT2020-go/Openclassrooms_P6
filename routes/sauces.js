const express = require("express");
const router = express.Router();

const saucesCtrl = require("../controllers/sauces");

//get sauces:
router.get("/sauces", saucesCtrl.getSauces);

module.exports = router;
