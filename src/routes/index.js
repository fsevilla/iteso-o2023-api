const router = require('express').Router();
const path = require('path');

const auth = require('./auth');
const todos = require('./todos');

router.get('', (req, res) => {
    const url = path.join(__dirname, '..', '..', 'public', 'index.html');
    res.sendFile(url);
});

router.use('', auth);
router.use('/todos', todos);

module.exports = router;