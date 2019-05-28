// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MONGODB Server...');
    }
    console.log('Connected to MongoDB Server...');

    // db.collection('Todos').insertOne({
    //     text: 'Ren Mission',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     name: 'Ren Mission',
    //     age: 27,
    //     location: '27 imperial st. vincent, sto. tomas, batangas'
    // }, (err, res) => {
    //     if (err) return console.log('Unable to insert User...');

    //     console.log(JSON.stringify(res.ops[0]._id.getTimestamp()));
    // })

    db.close();
});