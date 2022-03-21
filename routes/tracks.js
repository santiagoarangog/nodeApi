const express = require("express")
const {getItems, getItem, createItem} = require("../controllers/tracks");

/***
 * @description Creamos nuestra ruta de tracks
 * @package http://localhost/tracks GET,POST,DELETE,PUT
 */
const router = express.Router();

router.get("/", getItems)

router.post("/", createItem)


module.exports = router;