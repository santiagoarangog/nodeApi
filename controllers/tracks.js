const {tracksModel} = require('../models')
const {handleHttpError} = require("../utils/handleError");
const {matchedData} = require("express-validator");

/**
 * @description Listamos todos los registros
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({});

        res.send({data})
    } catch (e) {
        handleHttpError(res, 'Error listando los items de tracks')
    }

};

/**
 * @description Listamos un registro en particular
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {
};

/**
 * @description Creamos un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await tracksModel.create(body)
        res.send({data})
    } catch (e) {
        handleHttpError(res, "Error creando el item en tracks")
    }
};

/**
 * @description Actualizamos un registro determinado
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => {
};

/**
 * @description Eliminamos un registro determinado
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req, res) => {
};

/**
 * @description Destructuramos nuestros elementos
 */
module.exports = {getItems, getItem, createItem, updateItem, deleteItem}