function jsonToObject(json, obj) {
    // return this.JsonToObject(json, obj);
}

this.JsonToObject = function(json, obj)
{
    var jsonObj = JSON.parse(json);

    for (var prop in jsonObj)
    {
        obj[prop] = jsonObj[prop];
    }
}

jsonToObject.Copy = function(src, trg) {
    Object.getOwnPropertyNames(trg).forEach(
        function (val, idx, array) {
            if (src != null)
            {
                trg[val] = src[val];
            }            
        }
      );
}

return module.exports = jsonToObject;