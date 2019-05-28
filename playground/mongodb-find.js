// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MONGODB Server...');
    }
    console.log('Connected to MongoDB Server...');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5ce659f75f42a6251c7a0635')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to find todo', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count ${count}`);
    // }, (err) => {
    //     console.log('unable to count todo', err);
    // });

    db.collection('Users').find().toArray({ age: 26 }).then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });


    // db.close();
});