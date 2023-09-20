const model = require('./../models/todo');

module.exports = {
    list: (req, res) => {
        model.find().lean().then(response => {
            res.render('template', {
                data: response
            });
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