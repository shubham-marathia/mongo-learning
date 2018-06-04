const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

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

app.get('/todos' , (req , res) =>{
    Todo.find().then((doc)=>{
        res.send({doc});
    },(err)=>{
        res.status(400).send(err);
    });
})

app.get('/todos/:id' , (req , res) =>{
    var id = req.params.id;

    if(!ObjectId.isValid(id)){
        res.sendStatus(404).send('Id is invalid');
    }
    else{
        Todo.findById(id).then((doc)=>{
            if(!doc){
                res.status(404).send('Id not found');
            }
            else{
                res.send(doc);
            }
        },(e)=>{
            res.status(400).send(e);
        })
    }
    // res.send(req.params);
});

app.listen(3000 , ()=>{
    console.log('Sucessfully Connected');
});




