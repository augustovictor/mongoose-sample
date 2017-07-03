const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
    title: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

const newTodo = new Todo({title: 'Cook dinner!'});
newTodo.save().then(result => {
    console.log(result);
}).catch(err => {
    console.log(err)
});