const router = require('express').Router();
const controller = require('./../controllers/todos.controller');

router.get('', controller.list);

module.exports = router;