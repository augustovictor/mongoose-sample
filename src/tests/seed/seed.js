const { ObjectID } = require('mongodb');
const { Todo } = require('../../models/todo');

const todos = [
    { _id: new ObjectID(), title: 'This is a todo 1' },
    { _id: new ObjectID(), title: 'This is a todo 2' }
];

const populateTodos = done => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos)
    }).then(() => done())
    .catch(e => done(e));
};

module.exports = {
    todos,
    populateTodos
};