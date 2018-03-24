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
            trg[val] = src[val];
        //   console.log(val + ' -> ' + obj[val]);
        }
      );

    // for (var prop in Object.getOwnPropertyNames(trg))
    // {
    //     trg[prop.valueOf] = src[prop];
    // } 
}

return module.exports = jsonToObject;