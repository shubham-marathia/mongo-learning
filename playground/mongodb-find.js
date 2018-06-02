const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017' , 
{useNewUrlParser : true} , (err , client)=>{
    if(err){
    return console.log(err);
    }
    const db = client.db('TodoApp');
    console.log('Database connected at 27017');
    db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs , undefined , 3));
    }, (err)=>{
        console.log(err);
    });
    client.close();

})