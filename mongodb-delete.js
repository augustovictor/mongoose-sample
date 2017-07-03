const { MongoClient, ObjectID } = require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp'; // mongodb:// = mongodb protocol

MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.error('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');

    // deleteMany - All that match
    // db.collection('Todos').deleteMany({title: 'This is a new task'}).then(result => {
    //     console.log(result.result);
    // });

    // deleteOne - The first match
    // db.collection('Todos').deleteOne({title: 'This is a new task 2'}).then(result => {
    //     console.log(result.result);
    // });

    // findOneAndDelete - The first match and gives element back. lastErrorObject = number of deleted documents.value = deleted document.
    db.collection('Todos').findOneAndDelete({title: 'This is a new task 2'}).then(result => {
        console.log(result);
    });

    db.close();
});