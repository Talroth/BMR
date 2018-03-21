const express = require('express');
const routing = require('./routing');
const processController = require('./ServerControllers/ProcessController')
const mongoDBConnection = require('./../BMR/DataLayer/MongoDBConnection');
const db = require('mongoose');

const app = express();

routing.routing.Load(app);
processController.Init(app);
db.connect('mongodb://admin@ds161032.mlab.com:61032/talmongodb').then(function() {
    console.log("Success to connect");
}, function() { console.log("Failed to connect")})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
