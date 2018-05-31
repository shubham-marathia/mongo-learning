const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017' , {useNewUrlParser : true} ,(err , client)=>{
    if(err){
        return console.log(err);
    }
    console.log('DB connected');

    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b0afc1989046e194c6a36db')},
    //     {
    //         $set:{
    //             completed: true
    //         }
    //     },
    //     {
    //         returnOriginal: false
    // }).then((err ,res)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(res);
    // });
        
    db.collection('users').findOneAndUpdate({
        _id: new ObjectID('5b0afc1989046e194c6a36dc')},
        {
            $inc:{
                count: 3
            }
        },
        {
            returnOriginal: false
    }).then((err , res)=>{
        if(err){
        return console.log(err);
        }
        console.log(res);
    });
    client.close()
});