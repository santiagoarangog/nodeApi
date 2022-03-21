const express = require("express")
const {getItems, getItem} = require("../controllers/tracks");

/***
 * @description Creamos nuestra ruta de tracks
 * @package http://localhost/tracks GET,POST,DELETE,PUT
 */
const router = express.Router();

router.get("/", getItems)


module.exports = router;