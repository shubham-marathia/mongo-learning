const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017' , {useNewUrlParser : true},(err,client)=>{
    if(err){
        console.log(err);
    }
    const db = client.db('TodoApp');
    console.log('Database connected at 27017');

    db.collection('Todos').findOneAndDelete({completed: true}).then((res)=>{
        console.log(res);
    })
    client.close();
});

//deleteone
//deleteManyn