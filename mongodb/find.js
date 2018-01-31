const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test',(err,db)=>{
    if(err)
    {
        return console.log("unable to connect");
    }
    console.log("connected to Mongodb server");

    db.collection('stud').find({_id : new ObjectID('5a659d5d1e56f823a871c92d')}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    });

    db.collection('stud').findOneAndUpdate({
        _id : new ObjectID('5a65d122e2eefd3370f582d2')
    },{
        $set :{
            stud_name: "manisha"
        },
        $inc :{
            stud_id :1
        }
    } ,{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    })
});


