const express = require("express")
const fs = require("fs")
const router = express.Router();

/**
 * @description Obtenemos nuestra ruta absoluta
 */
const PATH_ROUTES = __dirname;

/**
 * @description Obtenemos solo el nombre sin la extensión
 */
const removeExtension = (filename) => {
    return filename.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file)
    if (name !== 'index') {
        console.log(`Loading route ${name} ...`)
        router.use(`/${name}`, require(`./${file}`))
    }
})
module.exports = router;