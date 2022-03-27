const {check} = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorCreateItem = [
    check("name").exists().notEmpty(),
    check("album").exists().notEmpty(),
    check("cover").exists().notEmpty(),
    check("artist").exists().notEmpty(),
    check("duration").exists().notEmpty(),
    check("duration.start").exists().notEmpty(),
    check("duration.end").exists().notEmpty(),
    check("mediaId").exists().notEmpty(),
    check("mediaId").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = {validatorCreateItem}