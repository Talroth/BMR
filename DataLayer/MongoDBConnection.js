const db = require('mongoose');
const jsonToObj = require('./JSONToObject')

// Can be singelton there fore replace all MongoDBConnection.prototype to this

// function MongoDBConnection()  {
//     // db.createConnection('mongodb://admin@ds161032.mlab.com:61032/talmongodb').then(function() {
//     //     console.log("Success to connect");
//     // }, function() { console.log("Failed to connect")}) // TODO: this should perform only at the begining, no need to close each query and should be singleton
// }

this.GetConnectionState = function() {
    var st = db.connection.readyState;
    console.log("Conn state: " + st);
}

this.GetModel = function(collection, schema) {
    return  db.model(collection, schema, collection);
}

this.WrapOutput = function(data) {
    var wrapObject = Object();
    wrapObject.IsSuccess = false;
    wrapObject.Message = "";
    wrapObject.Data = data;

    return wrapObject;
}

// C.R.U.D
this.FindOne = function(collection, schema, field, value, object) {
    // TODO: wrap object need to be outside not here
    var that = this;
    return new Promise(function(resolve,reject){
        // var conn =  new mongoDBConnection();
        
            var response = that.GetModel(collection, schema);         
            response.findOne({[field] : value}, function(err, header) {                
                if (err) { 
                    console.log(err);
                    reject(err);
                }

                jsonToObj.Copy(header, object);   
                var output = that.WrapOutput(object);            

                if (object._id != 0)
                {
                    output.IsSuccess = true;
                }
                else
                {
                    output.Message = "Missing ID";
                }

                resolve(output);

        });
    });
}

// TODO: need to be checked
this.FindByID = function(collection, schema, id, object) {
    var that = this;    
    return new Promise(function(resolve,reject){
        
            var response = that.GetModel(collection, schema);         
            response.findById(id, function(err, header) {
                if (err) { 
                    console.log(err);
                    reject(err);
                }

                jsonToObj.Copy(header, object);
                if (object._id != 0)
                {
                    resolve(object);   
                }
                else
                {
                    reject("Missing id");
                }

        });
    });
}

// TODO: need to be checked
this.Find = function(collection, schema, query, object) {
    var that = this;    
    // Using exec() replace the new Promise, need to be tested, not in my case
    return new Promise(function(resolve,reject){       
            var response = that.GetModel(collection, schema);         
            response.find(query, function(err, header) {
                if (err) { 
                    console.log(err);
                    reject(err);
                }

                jsonToObj.Copy(header, object);
                if (object._id != 0)
                {
                    resolve(object);    
                }
                else
                {
                    reject("Missing id");
                }

        });
    });
}

module.exports = this;