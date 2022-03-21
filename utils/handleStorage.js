const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const patchStorage = `${__dirname}/../storage`
        cb(null, patchStorage)
    },
    filename: function (req, file, cb) {
        //TODO: mi-cv.pdf mi-foto.png

        const ext = file.originalname.split(".").pop();
        const filename = `file-${Date.now()}.${ext}`;

        cb(null, filename)
    }
})

const uploadMiddleware = multer({storage})

module.exports = uploadMiddleware