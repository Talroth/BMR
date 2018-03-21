function jsonToObject(json, obj) {
    return this.JsonToObject(json, obj);
}

this.JsonToObject = function(json, obj)
{
    var jsonObj = JSON.parse(json);

    for (var prop in jsonObj)
    {
        obj[prop] = jsonObj[prop];
    }
}

return module.exports = jsonToObject;