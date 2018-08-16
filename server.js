var http = require("http");
var path = require("path");
var express = require("express");

var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, "client")));

server.listen(30000, "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
