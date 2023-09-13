const model = require('./../models/todo');

module.exports = {
    list: (req, res) => {
        console.log('here!');
        model.find({}).then(response => {
            res.send(response);
        });
    },
    create: (req, res) => {
        const todo = req.body;
        const result = model.create(todo);
        res.send(result);
    }
}

/**
 * title
 * description
 * status ?new
 * 
 */