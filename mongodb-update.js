const { MongoClient, ObjectID } = require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp'; // mongodb:// = mongodb protocol

MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.error('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('595a8fa80100d76fea906cf0')
    },
    {
        $set: {
            title: 'This is a title now'
        }
    },
    {
        returnOriginal: false
    }).then(result => {
        console.log(result);
    });

    db.close();
});