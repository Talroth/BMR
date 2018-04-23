// const db = require('mongoose');
const mongoDBConnection = require('./MongoDBConnection');
//const mongoDBConnection = require('./MongoDBConnection').default.default.default.default;
const batchHeader = require('./DAO/BatchHeader');
const schemas = require('./Schemas');
var mod = module.exports = {};

// This is the real datalayer, it is like using entity framework, using the syntax to get data.
// In the same way it can get data from different database


mod.GetBatchHeader = async function(batchID) {
    // If i put here await and async before the function this will be same as promise but allow better logic handling
    // If i return async function is like return promise so the .then can be done only in the high level code like controller
     return await mongoDBConnection.FindOne('BatchHeader', schemas.batchHeaderSchema, 'ID', batchID, new batchHeader());
}

mod.GetBatchData = function(batchID) {

}

return mod;