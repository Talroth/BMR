// const db = require('mongoose');


// const Schema = db.Schema,
//     ObjectId = Schema.ObjectId;

// TODO: should be from one hand schema and in another the DAO

// Private properties - this is not really private, there is not really private in JS
// the var is belong to the object therefore you can't access from outside but this is like static properties of the class and matual for all instatnces
// In order to use it as private need just to add underscroe and remember not to use it directly
// This is the reason JS doesn't really has OOP
// other option is to declare private propeties inside the constructor and create getter and setter also insde the constructor
// Also can conside WeakMaps (JS API)

// TODO: put it with this otherwise it will be preoperty in the class level that mean matual for all instances
var id = 0;
var batchNumber = "";
var startDate = null;
var endDate = null;

// TODO: should be seperated, in case the db is not mongoDB this part is not relevant while the other are
// const schema = new Schema({
//     ID: ObjectId,
//     BatchNumber: String,
//     StartDate: Date,
//     EndDate: Date
//    });

// Constructor
 function batchHeaderMongoObject() {
    // Init public propeties
    this._id = id;
    this.BatchNumber = batchNumber;
    this.StartDate = startDate;
    this.EndDate = endDate;
 }
 

// Functions
batchHeaderMongoObject.prototype.GetSchema = function() {
    return schema;
}

return module.exports = batchHeaderMongoObject;
