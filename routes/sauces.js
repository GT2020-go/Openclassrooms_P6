const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const saucesCtrl = require("../controllers/sauces");

router.get("/sauces", auth, saucesCtrl.getSauces);
router.post("/sauces", auth, saucesCtrl.createSauce);

module.exports = router;
