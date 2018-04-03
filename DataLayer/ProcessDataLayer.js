// const db = require('mongoose');
const mongoDBConnection = require('./MongoDBConnection');
const batchHeader = require('./DAO/BatchHeader');
const schemas = require('./Schemas');
const jsonToObj = require('./JSONToObject')
var mod = module.exports = {};

// This is the real datalayer, it is like using entity framework, using the syntax to get data.
// In the same way it can get data from different database


mod.GetBatchHeader = async function(batchID) {
    // If i put here await and async before the function this will be same as promise but allow better logic handling
    // If i return async function is like return promise so the .then can be done only in the high level code like controller
     return await mongoDBConnection.FindOne('BatchHeader', schemas.batchHeaderSchema, 'BatchNumber', batchID, new batchHeader());

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