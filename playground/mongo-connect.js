const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017' ,
{ useNewUrlParser: true }, (err , client)=>{
    if(err){
        return console.log('Unable to connect to database');
    }
    console.log('Connection established to database');

    const db = client.db('TodoApp')
    db.collection("Todos").insertOne({
        text:'Another sample',
        completed: false
    },(err , res)=>{
        if(err){
            return console.log('Unable to connect to database' , err)
        }

        console.log(JSON.stringify(res , undefined , 2));
    });
    db.createCollection('users' , (err)=>{
        if(err){
            console.log(err);
        }
    });
    db.collection('users').insertOne({
        name: 'Shubham',
        doesStuff: true
    });

    client.close();
});