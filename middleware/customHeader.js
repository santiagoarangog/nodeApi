const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key
        if (apiKey === 1) {
            next()
        } else {
            res.status(500)
            res.send({error: "Id errado"})
        }
    } catch (e) {
        res.status(403)
        res.send({error: "El custom header esta errado"})
    }
}

module.exports = customHeader