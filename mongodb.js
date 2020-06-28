const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

// This is the Native driver provided by Mongodb 

const connecturl = 'mongodb://127.0.0.1:27017';

const databasename = 'crud-opertaion';

MongoClient.connect(connecturl, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.log("Failed to connect")
    }

    // For connection to a particular database 
    const db = client.db(databasename)

    //  Making a Collection for User
    // =============================================================
    // INSERT DATA
    // =============================================================   
    db.collection('User').insertMany([
         {
         name: "Saurabh",
         age: 45
         },
        {
            name: "Ded",
            age: 45
        }   
    ]).then((result) =>{
          console.log(result.ops)
     }).catch((error) =>{
         console.log(error)
     })   

        db.collection('Task').insertMany([
            {
                name:"A",
                age:12
            },
            {
                name:"B",
                age:99
            },
            {
                name: "C",
                age:67
            }
        ]).then((output) =>{
            console.log(output.ops)
        }).catch((error) =>{
        console.log(error)
        })


    // =============================================================
    // READ DATA
    // =============================================================


    // db.collection('Task').findOne({
    //      age: 12
    // }).then((output) =>{
    //    console.log(output)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    // db.collection('User').find({age:45}).count((error, result) =>{
    //     console.log(result)
    // })



    // =============================================================
    // UPDATE DATA
    // =============================================================

    // db.collection('User').updateOne({
    //     name:"Saurabh Kumar"
    // },{
    //    $set: {
    //        name: "Gaurav Kumar"
    //    }
    // }).then((result) =>{
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    // =============================================================
    // DELETE DATA
    // =============================================================

    // db.collection('User').deleteMany({
    //     age: 45
    // }).then((result) => {
    //     console.log(result.ops)
    // }).catch((error) => {
    //     console.log(error)
    // })

})