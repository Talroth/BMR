
const db = require('mongoose');
// import jsonToObj from "./JSONToObject";

// This one is like entity framework code, it should be kept general and contain only C.R.U.D and general object convert
// This is for mongo only, this file need to be different for other source like MySQL

this.GetConnectionState = function() {
    var st = db.connection.readyState;
    console.log("Conn state: " + st);
}

this.GetModel = function(collection, schema) {
    return  db.model(collection, schema, collection);
}


// C.R.U.D
// TODO: try with async
this.FindOne = function(collection, schema, field, value, object) {
    // TODO: wrap object need to be outside not here
    var that = this;
    return new Promise(function(resolve,reject){
        // var conn =  new mongoDBConnection();
        
            var response = that.GetModel(collection, schema);         
            response.findOne({[field] : value}, function(err, header) {                
                if (err) { 
                    console.log(err);
                     reject(new Error(err));
                }

                if (header == null)
                {
                    resolve(header);
                }
                else
                {
                    // jsonToObj.Copy(header, object);   
                    // resolve(object);       
                    resolve(header);             
                }

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

                // jsonToObj.Copy(header, object);
                if (header._id != 0)
                {
                    resolve(header);   
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

                // jsonToObj.Copy(header, object);
                if (header._id != 0)
                {
                    resolve(header);    
                }
                else
                {
                    reject("Missing id");
                }

        });
    });
}

module.exports = this;