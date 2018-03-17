const path = require('path');
var that = this;

exports.routing =  {
    Load: function(app) {
        app.get('/', (req, res) => {
            // routing.main(res);
            that.main(res);
        })
    }
}

that.main = function(res) {
    res.sendFile(path.resolve(__dirname, 'index2.html'));
}