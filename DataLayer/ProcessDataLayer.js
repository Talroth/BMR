// const db = require('mongoose');
const mongoDBConnection = require('./MongoDBConnection');
const batchHeader = require('./DAO/BatchHeader');
const schemas = require('./Schemas');
const jsonToObj = require('./JSONToObject')
var mod = module.exports = {};

mod.GetBatchHeader = function(batchID) {
    //var batchHeader = new batchHeader(); // TODO: should be static, just for learning purpose usin instance of the object

   // TODO: should be seperate object that will be use for working with db same thing next line, need to work with open connection and model and not each time use connect
   // This one replace the conn and MyModel lines

   // TODO: need to check if it returns json or object
   var conn =  new mongoDBConnection();
    
    conn.GetConnectionState();
    var batchHeaders = conn.GetModel('BatchHeader', schemas.batchHeaderSchema); // Get collection in order to query and return data
    // var query = batchHeaders.findOne({ 'ID': '1' });


    // query.exec(function (err, header) {
    //     if (err) console.log(err);
    //     // Prints "Space Ghost is a talk show host."
    //     console.log('%s %s is a %s.', header.ID, header.BatchNumber,
    //       header.StartDate);
    //   });
    batchHeaders.findById('5ab2c465734d1d1aa152c47f', function(err, header) {
        if (err) { console.log(err);}
        console.log("Lalala");
        this.item = "ok";
        //  console.log(header.BatchNumber);
        });
    
    // var item = batchHeaders.findOne({ 'ID': '1' }, 'BatchNumber', function (err, person) {
    //     if (err) { console.log("Error"); return handleError(err); }
    //     // Prints "Space Ghost is a talk show host".
    //     console.log("find");
    //     console.log(person);
    //   });
    // var batchHeadersJson = batchHeaders.first....
    // In case mongo doesn't return object but json, this process needed
   // batchHeader = new jsonToObj(batchHeadersJson, batchHeader);
    // model is all records, so query is needed and then populate batchHeaderObject
    // TODO: check if i can populate batchHeaderObject directly without assign each properties seperatly
    // The population can even be in logic layer, in that way i can fill it according what i want altough in that way it keeps the DAO and can be replaced with different db sources
    // var specicBatch = model.find.....
    // batchHeader.ID = .ID;

    // const conn = db.createConnection('your connection string');
    // const MyModel = conn.model('ModelName', BatchHeader.Schema);
   // const m = new MyModel;
    // m.save(); 

    // m.find({}, function (err, header) {
    //     // docs.forEach
    //   });

    //   m.findById(myId, function (err, post) {
    //     if (!err) {
    //       post.comments[0].remove();
    //       post.save(function (err) {
    //         // do something
    //       });
    //     }
    //   });
    return conn.GetConnectionState();
}

mod.GetBatchData = function(batchID) {

}

return mod;