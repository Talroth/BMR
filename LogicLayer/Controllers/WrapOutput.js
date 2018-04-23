var mod = module.exports = {};

mod.Wrap = function(data) {
    var wrapObject = Object();
    wrapObject.IsSuccess = false;
    wrapObject.Message = "";
    wrapObject.Data = data;

    return wrapObject;
}

mod.SetOk = function(obj) {
    obj.IsSuccess = true;
}

mod.SetError = function(obj, msg) {
    obj.IsSuccess = false;
    obj.Message = msg;
}
