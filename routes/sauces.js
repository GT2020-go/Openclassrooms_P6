const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const multer = require("../middleware/multer-config");
const saucesCtrl = require("../controllers/sauces");

router.get("/sauces", auth, saucesCtrl.getSauces);
router.post("/sauces", auth, multer, saucesCtrl.createSauce);
router.get("/sauces/:id", auth, saucesCtrl.getOneSauce);
router.put("/sauces/:id", auth, multer, saucesCtrl.modifyOneSauce);

module.exports = router;
