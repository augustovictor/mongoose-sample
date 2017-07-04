const config = require('./src/config/config');
const express      = require('express');
const bodyParser   = require('body-parser');
const _            = require('lodash');
const { ObjectID } = require('mongodb');

const { mongoose } = require('./src/db/mongoose');
const {Todo}       = require('./src/models/todo');
const {User}       = require('./src/models/user');

const app = express();

app.use(bodyParser.json());

app.get('/todos', (req, res) => {
    Todo.find().then(todos => {
        res.send(todos);
    }).catch(e => res.send(err));
});

app.post('/todos', (req, res) => {
    const todo = new Todo({ title: req.body.title });

    todo.save()
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        res.status(400).send(err);
    });
});

app.patch('/todos/:id', (req, res) => {
    const id = req.params.id;
    const body = _.pick(req.body, ['title', 'completed']);
    if(!ObjectID.isValid(id)) {
        return res.status(400).send('Invalid id');
    };

    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null; // To remove a value from db set it to null
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then(todo => {
        if(!todo) return res.status(404).send()
        res.send({todo});
    }).catch(err => res.status(400).send(err));
});

app.listen(process.env.PORT, () => {
    console.log('Started at http://localhost:3000');
});

module.exports = {app}