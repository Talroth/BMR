var processDataLayer = require('./../../DataLayer/ProcessDataLayer');

var mod = module.exports = {};
var that = this;

mod.GetBatchData = function(batchID) {
    return processDataLayer.GetBatchData(batchID);
}

// TODO: seperate class, like GeneralResponse
this.WrapOutput = function(data) {
    var wrapObject = Object();
    wrapObject.IsSuccess = false;
    wrapObject.Message = "";
    wrapObject.Data = data;

    return wrapObject;
}

mod.GetBatchHeader = async function(batchID) {
    // DAO returns (in that way it doesn't matter which DB is in use)
    // The data now can be processed by ProcessLogic functions or specific function of the wrap object for DAO (first option is like MM, second is OOP)
    // What is returning is logic object which contains data to present in client side (end of REST call)

    // Because this is simple it call from datalayer directly, it should call from logic layer for more complicated processes

    var result = await processDataLayer.GetBatchHeader(batchID);
    var output = that.WrapOutput(result);   

    // TODO: replace with setok method or something similiar
    if (output.Data == null)
    {
        output.IsSuccess = false;
    }
    else
    {
        output.IsSuccess = true;
    }

    return output;
}

return mod;