const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
})

app.listen(3000, () => {
    console.log('app listen on port 3000');
});