'use strict'

var app = require("express")();
var http = require("http").Server(app).listen(8888);
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({	extended: true }));

//endpoints
require("./endpoints/developerEndpoints")(app).setupDeveloperEndpoints();