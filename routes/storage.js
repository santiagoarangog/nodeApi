const express = require("express");

const router = express.Router();

const uploadMiddleware = require("../utils/handleStorage");

const {getItems, createItem} = require("../controllers/storage");

router.get("/", getItems)


router.post("/", uploadMiddleware.single("myFile"), createItem)

module.exports = router;