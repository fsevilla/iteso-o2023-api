const model = require('./../models/todo');

module.exports = {
    list: (req, res) => {
        console.log('here!');
        const response = model.find();
        res.send(response);
    }
}