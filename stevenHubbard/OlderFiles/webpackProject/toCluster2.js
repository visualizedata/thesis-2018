var fs = require('fs');

var teacher = JSON.parse(fs.readFileSync('new.json'));

// Connection URL
// var url = 'mongodb://' + process.env.IP + ':27017/aa';
// var url = process.env.MSTRING;
var url ="mongodb://hubbs654:V2hYRNpJ8VNAMai6@cluster0-shard-00-00-rzdcl.mongodb.net:27017,cluster0-shard-00-01-rzdcl.mongodb.net:27017,cluster0-shard-00-02-rzdcl.mongodb.net:27017/steve?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"


// Retrieve
var MongoClient = require('mongodb').MongoClient; // npm install mongodb

MongoClient.connect(url, function(err, db) {
    if (err) {return console.dir(err);}

    var collection = db.collection('spirals');

    // THIS IS WHERE THE DOCUMENT(S) IS/ARE INSERTED TO MONGO:
    collection.insert(teacher);
    db.close();

}); //MongoClient.connect