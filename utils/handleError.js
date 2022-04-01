const handleHttpError = (res, message = 'Sucedio un error inesperado', code = 403) => {
    res.status(code)
    res.status({error: message})
}

module.exports = {handleHttpError}