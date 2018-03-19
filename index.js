const express = require('express');
const routing = require('./routing');
const processController = require('./ServerControllers/ProcessController')
const db = require('mongoose');

const app = express();

routing.routing.Load(app);
processController.Init();

app.listen(3000, () => console.log('Example app listening on port 3000!'))
