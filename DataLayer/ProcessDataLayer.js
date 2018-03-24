// const db = require('mongoose');
const mongoDBConnection = require('./MongoDBConnection');
const batchHeader = require('./DAO/BatchHeader');
const schemas = require('./Schemas');
const jsonToObj = require('./JSONToObject')
var mod = module.exports = {};

mod.GetBatchHeader = function(batchID) {
    return new Promise(function(resolve,reject){
        var conn =  new mongoDBConnection();
            var response = conn.GetModel('BatchHeader', schemas.batchHeaderSchema);
                response.findOne({'ID':'1'}, function(err, header) {
                    if (err) { 
                        console.log(err);
                        reject(err);
                    }
                    // TODO: convert result to batchHeader object type
                    var result = new batchHeader();
                    jsonToObj.Copy(header, result);
                    console.log(header.BatchNumber);
                    resolve(JSON.stringify(result));    
            });
    });
}

mod.GetBatchData = function(batchID) {

}

return mod;