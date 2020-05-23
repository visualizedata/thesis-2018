
var fs = require('fs');

var dbName = 'steve';
var collName = 'spirals';

// Connection URL
//var url = 'mongodb://' + process.env.IP + ':27017/aa'
// var url = 'mongo "mongodb://cluster0-shard-00-00-rzdcl.mongodb.net:27017,cluster0-shard-00-01-rzdcl.mongodb.net:27017,cluster0-shard-00-02-rzdcl.mongodb.net:27017/steve?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl --username hubbs654 --password V2hYRNpJ8VNAMai6';
var url = "mongodb://cluster0-shard-00-00-rzdcl.mongodb.net:27017,cluster0-shard-00-01-rzdcl.mongodb.net:27017,cluster0-shard-00-02-rzdcl.mongodb.net:27017/steve?replicaSet=Cluster0-shard-0 --authenticationDatabase admin --ssl --username hubbs654 --password V2hYRNpJ8VNAMai6";

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, function(err, db) {
    if (err) {return console.dir(err);}

    var collection = db.collection(collName);


    collection.aggregate([{ $limit : 3000 }]).toArray(function(err, docs) {
        if (err) {console.log(err)}
        
        else {
            console.log("Writing", docs.length, "documents as a result of this aggregation.");
            fs.writeFileSync('new.json', JSON.stringify(docs, null, 4));
        }
        db.close();
        
    });

});