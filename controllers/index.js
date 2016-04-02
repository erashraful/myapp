var express = require("express");
var router = express.Router();
var path = require("path");

router.use("/", require("./home_controller"));
module.exports = router;
