// const db = require('mongoose');
const mongoDBConnection = require('./MongoDBConnection');
const batchHeader = require('./DAO/BatchHeader');
const schemas = require('./Schemas');
const jsonToObj = require('./JSONToObject')
var mod = module.exports = {};


mod.GetBatchHeader = function(batchID) {
     return mongoDBConnection.FindOne('BatchHeader', schemas.batchHeaderSchema, 'BatchNumber', batchID, new batchHeader());
     
    // In that way can use logic on the result, if there is no need in additional logic can return it as is
//     var pr = mongoDBConnection.FindOne('BatchHeader', schemas.batchHeaderSchema, 'BatchNumber', batchID, new batchHeader()).then(
//         function(response, err) {
//         return new Promise(function(res,rej) {
//             if (err) {
//                 rej(err);
//             }
//             else
//             {
//                 res(response);
//             }
//         });    
//     }
// );

// return pr;
}

mod.GetBatchData = function(batchID) {

}

return mod;