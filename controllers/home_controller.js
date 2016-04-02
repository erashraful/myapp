var express = require("express");
var router = express.Router();

router.get('/', function(req, res) {
	res.render("home_view", {
		title: "Welcome to Data Processing System"
  	}); 
});

module.exports = router;
