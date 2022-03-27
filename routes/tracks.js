const express = require("express")
const {validatorCreateItem} = require("../validators/tracks")
const {getItems, getItem, createItem} = require("../controllers/tracks");
const customHeader = require("../middleware/customHeader")
/***
 * @description Creamos nuestra ruta de tracks
 * @package http://localhost/tracks GET,POST,DELETE,PUT
 */
const router = express.Router();

router.get("/", getItems)

router.post("/", validatorCreateItem, customHeader, createItem)


module.exports = router;