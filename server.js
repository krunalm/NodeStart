var express = require("express");
var app = express();
app.set("view engine", "jade");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req,res){
	 res.render("index", { pageTitle: "Index", header: "Hello World"});
});

app.get("/about", function(req,res){
	 res.render("about", { pageTitle: "About", header: "About Me"});
});

app.get("/contact", function(req,res){
	 res.render("contact", { pageTitle: "Contact", header: "Contact Us"});
});

var server = app.listen(process.env.PORT, function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("Example app listening at http://%s:%s", host, port);
});