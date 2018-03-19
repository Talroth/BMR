const db = require('mongoose');



function MongoDBConnection(collection, schema)  {
    const conn = db.createConnection('your connection string');
    const MyModel = conn.model(collection, schema);
}


MongoDBConnection.prototype.GetModel = function() {
    return MyModel;
}

module.exports = MongoDBConnection;