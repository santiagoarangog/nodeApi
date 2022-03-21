/**
 * @description Listamos todos los registros
 * @param {*} req
 * @param {*} res
 */
const getItems = (req, res) => {
    const data = ['hola', 'mundo']

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
const createItem = (req, res) => {
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