const mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/test',(err,db)=>{
    if(err)
    {
       return  console.log("Couldn't connected...:" + err);
    }
    console.log("connected to mongodb server");

    db.collection('stud').insertMany([{
        stud_id : 1,
        stud_name : 'sarika'
    },{stud_id:2, stud_name:'arun'}],(err, result)=> {
        if(err)
        {
            return console.log('enable to insert record : '+ err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    })
});

