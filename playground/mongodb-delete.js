// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MONGODB Server...');
    }
    console.log('Connected to MongoDB Server...');

    //deleteMany()
    // db.collection('Users').deleteMany({ location: '123 adam st.' }).then((result) => {
    //     console.log(result)
    // });

    //deleteOne()
    // db.collection('Users').deleteOne({ _id: 123 }).then((result) => {
    //     console.log(result);
    // })

    //findOneAndDelete()
    db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
        console.log(result);
    })



    // db.close();
});