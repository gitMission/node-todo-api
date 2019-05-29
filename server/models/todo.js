const mongoose = require('mongoose');

//Create Model
const Todo = mongoose.model('Todos', {
    //Object
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: true
    },
    compeleteAt: {
        type: Number,
        default: null
    }
});

module.exports = { Todo };