var processDataLayer = require('./../DataLayer/ProcessDataLayer');

var mod = module.exports = {};

mod.GetBatchData = function(batchID) {
    return processDataLayer.GetBatchData(batchID);
}

mod.GetBatchHeader = function(batchID) {
    // DAO returns (in that way it doesn't matter which DB is in use)
    // The data now can be processed by ProcessLogic functions or specific function of the wrap object for DAO (first option is like MM, second is OOP)
    // What is returning is logic object which contains data to present in client side (end of REST call)

    // Because this is simple it call from datalayer directly, it should call from logic layer for more complicated processes

    return processDataLayer.GetBatchHeader(batchID);
}

return mod;