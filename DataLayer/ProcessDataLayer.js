// const db = require('mongoose');
const mongoDBConnection = require('./MongoDBConnection');
const batchHeaderObject = require('./MongoObjects/BatchHeaderMongoObject')
var mod = module.exports = {};

mod.GetBatchHeader = function(batchID) {
    var batchHeader = new batchHeaderObject(); // TODO: should be static, just for learning purpose usin instance of the object
    
   // TODO: should be seperate object that will be use for working with db same thing next line, need to work with open connection and model and not each time use connect
   // This one replace the conn and MyModel lines
    var model = new mongoDBConnection('ModelName', batchHeader.GetSchema()); // Get collection in order to query and return data

    // model is all records, so query is needed and then populate batchHeaderObject
    // TODO: check if i can populate batchHeaderObject directly without assign each properties seperatly
    // The population can even be in logic layer, in that way i can fill it according what i want altough in that way it keeps the DAO and can be replaced with different db sources
    // var specicBatch = model.find.....
    // batchHeader.ID = .ID;

    // const conn = db.createConnection('your connection string');
    // const MyModel = conn.model('ModelName', BatchHeader.Schema);
    const m = new MyModel;
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
}

mod.GetBatchData = function(batchID) {

}

return mod;