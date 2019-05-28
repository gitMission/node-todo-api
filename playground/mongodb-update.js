// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MONGODB Server...');
    }
    console.log('Connected to MongoDB Server...');

    //findOneUpdate()
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5ceb9e63b0d76a06043571b3')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ceba0c67a885a37d873d114')
    }, {
        $set: {
            name: 'Marga Mission'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    // db.close();
});