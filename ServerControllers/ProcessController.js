var processControllerLogic = require('./../LogicLayer/ProcessControllerLogic')

var mod = module.exports = {};

mod.GetBatchData = function(app) {
    app.get('/GetBatchData', (req, res) => {
       // var batchID = req.query.ID;
       var batchID = 1;
       console.log("GetBatchData" + req);
        var response = processControllerLogic.GetBatchData(batchID);
        res.send(response);
        // TODO: return the data back by res var
    })
}

mod.GetBatchHeader = function(app) {
    app.get('/GetBatchHeader', (req, res) => {
       // var batchID = req.query.ID;
       var batchID = 1;
       console.log("GetBatchHeader");
        var response = processControllerLogic.GetBatchHeader(batchID);
        res.send("OK");
        // TODO: return the data back by res var
    })
}

mod.Init = function(app) {
    mod.GetBatchData(app);
    mod.GetBatchHeader(app);
}

return mod;

// exports.ProcessController = {
//     GetBatchData: function() {
//         app.get('/GetBatchData', (req, res) => {
//             var batchID = req.query.ID;
//             processControllerLogic.GetBatchData(batchID);
//         })
//     },
//     Init: function() {
//         this.GetBatchData();
//     }
// }