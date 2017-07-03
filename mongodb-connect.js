const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj);

const url = 'mongodb://localhost:27017/TodoApp'; // mongodb:// = mongodb protocol

MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.error('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');

    // Insert document
     const todo = {title: 'This is a new task 2'};
     db.collection('Todos').insertOne(todo, (err, result) => {
         if (err) throw err;
         console.log(JSON.stringify(result.ops, undefined, 2));
         console.log('Inserted at: ', result.ops[0]._id.getTimestamp())
     });

    db.close();
});