// const db = require('mongoose');


// const Schema = db.Schema,
//     ObjectId = Schema.ObjectId;

// TODO: should be from one hand schema and in another the DAO

// Private properties
var id = 0;
var batchNumber = "";
var startDate = null;
var endDate = null;

// TODO: should be seperated, in case the db is not mongoDB this part is not relevant while the other are
const schema = new Schema({
    ID: ObjectId,
    BatchNumber: String,
    StartDate: Date,
    EndDate: Date
   });

// Constructor
 function batchHeaderMongoObject() {
    // Init public propeties
    this.ID = id;
    this.BatchNumber = batchNumber;
    this.StartDate = startDate;
    this.EndDate = endDate;
 }
 

// Functions
batchHeaderMongoObject.prototype.GetSchema = function() {
    return schema;
}

return module.exports = batchHeaderMongoObject;
