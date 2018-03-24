const db = require('mongoose');



function MongoDBConnection()  {
    
    // db.createConnection('mongodb://admin@ds161032.mlab.com:61032/talmongodb').then(function() {
    //     console.log("Success to connect");
    // }, function() { console.log("Failed to connect")}) // TODO: this should perform only at the begining, no need to close each query and should be singleton
}

MongoDBConnection.prototype.GetConnectionState = function() {
    var st = db.connection.readyState;
    console.log("Conn state: " + st);
}

MongoDBConnection.prototype.GetModel = function(collection, schema) {
    return  db.model(collection, schema, collection);
}

module.exports = MongoDBConnection;