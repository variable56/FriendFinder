//Links to data file
var friends = require("../data/friends");


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends)
    });
}