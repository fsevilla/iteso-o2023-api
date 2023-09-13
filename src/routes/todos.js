const router = require('express').Router();

const controller = require('./../controllers/todos.controller');
const authMiddleware = require('./../middlewares/auth');

router.get('', authMiddleware, controller.list);
router.post('', authMiddleware,  controller.create);

module.exports = router;