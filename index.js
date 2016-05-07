var express = require("express");

var app = express();

app.enable('trust proxy');

app.get("/api/whoami",function(req,res){
	var object = {};
	object.ip = req.ip;
	object.language = req.headers["accept-language"][0];
	object.os = req.headers['user-agent'];
	res.end(JSON.stringify(object));
});