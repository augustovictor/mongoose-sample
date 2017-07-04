const { ObjectID } = require('mongodb');
const { mongoose } = require('./src/db/mongoose');
const { Todo } = require('./src/models/todo');

// find - Returns an array of objects that match

// findOne - Returns the first object found that match

// Recomended: findById - Returns the object that match
const id = '';
if(!ObjectID.isValid(id)) {
    console.log(`Id not valid: ${id}`)
}

Todo.findById(id).then(todo => {
    if(!todo) return console.log(`No todo with id: ${id}`);
    console.log(todo);
}).catch(e => console.log(e));