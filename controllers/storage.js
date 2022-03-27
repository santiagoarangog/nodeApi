const {storageModel} = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * @description Listamos todos los registros
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    const data = await storageModel.find({});

    res.send({data})
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
    const {body, file} = req
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({data})
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