var processDataLayer = require('./../../DataLayer/ProcessDataLayer');
var wrapObject = require('./WrapOutput');

var mod = module.exports = {};
var that = this;

mod.GetBatchData = function(batchID) {
    return processDataLayer.GetBatchData(batchID);
}


mod.GetBatchHeader = async function(batchID) {
    // DAO returns (in that way it doesn't matter which DB is in use)
    // The data now can be processed by ProcessLogic functions or specific function of the wrap object for DAO (first option is like MM, second is OOP)
    // What is returning is logic object which contains data to present in client side (end of REST call)

    var result = await processDataLayer.GetBatchHeader(batchID);
    var output = wrapObject.Wrap(result);   

    
    if (output.Data == null)
    {
        wrapObject.SetError(output, "No Data found");
    }
    else
    {
        wrapObject.SetOk(output);
    }

    return output;
}

return mod;