const { MongoClient, ObjectID } = require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp'; // mongodb:// = mongodb protocol

MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.error('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').find().toArray().then(result => {
        console.log(result);
    });

    // db.collection('Todos').find({_id: new ObjectID('595a93353c72157448bd3dee')}).toArray().then(result => {
    //     console.log('Todos: ', result);
    // }).catch(err => {
    //     console.log('Unable to fetch todos: ', err);
    // });

    db.close();
});