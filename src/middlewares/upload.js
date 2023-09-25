const multer = require('multer');
const fs = require('fs');

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop();
        const name = new Date().getTime() + '.' + ext;
        cb(null, name);
    }
});

const fileFilter = (req, file, cb) => {
    const flag = file.mimetype.startsWith('image/');
    cb(null, flag);
};

const upload = multer({storage: diskStorage, fileFilter: fileFilter});

module.exports = upload;