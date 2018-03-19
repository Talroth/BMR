var processControllerLogic = require('./../LogicLayer/ProcessControllerLogic')

var mod = module.exports = {};

mod.GetBatchData = function() {
    app.get('/GetBatchData', (req, res) => {
        var batchID = req.query.ID;
        processControllerLogic.GetBatchData(batchID);
        // TODO: return the data back by res var
    })
}

mod.Init = function() {
    this.GetBatchData();
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