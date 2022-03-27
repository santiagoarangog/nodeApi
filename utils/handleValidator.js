const {validationResult} = require("express-validator")

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw()
        /**
         * @description Indicamos que continue al controlador
         */
        return next()
    } catch (err) {
        /**
         * @description Retornamos nuestro mensaje de error predeterminado
         */
        res.status(403)
        res.send({errors: err.array()})
    }
}

module.exports = validateResults