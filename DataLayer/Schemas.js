
const db = require('mongoose');

function Schemas() {

}

// With prototype if method per instance and without is in "class" level
Schemas.batchHeaderSchema = new db.Schema({
    ID: String,
    BatchNumber: String,
    StartDate: Date,
    EndDate: Date
});

Schemas.batchProcessData = new db.Schema({
    ID: String,
    BatchNumber: String
});

  return module.exports = Schemas;