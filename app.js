var express = require("express");
var app = express();
var flash = require('connect-flash');
var mongoose = require("mongoose");
var path = require("path");
var bodyParser = require("body-parser");
var ECT = require("ect");
var ectRenderer = ECT({ watch: true, root: __dirname + "/views", ext : ".ect" });

var db = require("./config/database.js");
mongoose.connect(db.url, function (error) {
    if (error) {
        console.log(error);
    }
});

app.use(flash());
app.set("view engine", "ect");
app.engine("ect", ectRenderer.render);
app.set("port", process.env.PORT || 88);

app.set("views", __dirname + "/views")

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("./controllers"));

app.listen(app.get("port"), function() {
  console.log("Listening on port " + app.get("port"));
})
