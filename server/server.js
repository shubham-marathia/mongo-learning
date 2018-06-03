const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose-connect');
var {Todo} = require('./models/todo');
var {user} = require('./models/users');

const app = express();

app.use(bodyParser.json());

app.post('/todos' , (req,res)=>{
    var todo1 = new Todo({
        text: req.body.text,
        completed: req.body.completed
    });

    todo1.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
        res.status(400).send(err);
    });
});

app.listen(3000 , ()=>{
    console.log('Sucessfully Connected');
});




