const router = require('express').Router();

const controller = require('./../controllers/todos.controller');
const authMiddleware = require('./../middlewares/auth');
const uploadMiddleware = require('./../middlewares/upload');

router.get('', authMiddleware, controller.list);
router.post('', authMiddleware,  controller.create);
router.post('/upload', authMiddleware, uploadMiddleware.single('imagen'), (req, res) => {
    console.log('File', req.file);
    res.send('here');
})

module.exports = router;
