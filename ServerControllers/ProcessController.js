var processControllerLogic = require('./../LogicLayer/Controllers/ProcessControllerLogic')

var mod = module.exports = {};

mod.GetBatchData = function(app) {
    app.get('/GetBatchData', (req, res) => {
        var response = processControllerLogic.GetBatchData(batchID);
        res.send(response);
        // TODO: return the data back by res var
    })
}

// TODO: return wrap output object as i put in the db, need to understand how to send reject without fail in the way, that will allow throw exception up here
mod.GetBatchHeader = function(app) {
    app.get('/GetBatchHeader/', (req, res) => {
    var batchID = req.query.batchID;
    console.log("GetBatchHeader");
    // Using async allow to use then only here without handle many promises issues
    processControllerLogic.GetBatchHeader(batchID).then(function(response, err) {
        if (err)
        {
            res.send(err);
        }
    res.send(response);
    });
       

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