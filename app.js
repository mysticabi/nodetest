var http = require("http");
var events = require("events");
var eventEmitter = new events.EventEmitter;

var stringOP = "";


var countTen = function connected() {
   console.log(' in ten');
   for( i = 100000000; i>0; i--){

   }
   stringOP+= "In Ten\n";
}

var countFive = function connected() {
   console.log('in five');
   for( i = 50000000; i>0; i--){

   }
   stringOP+= "In Five\n";
}

var countTwenty = function connected() {
   console.log('in twenty');
   for( i = 200000000; i>0; i--){

   }
    stringOP+= "In Twenty\n";
}

eventEmitter.on('countFive', countFive);
eventEmitter.on('countTen', countTen);
eventEmitter.on('countTwenty', countTwenty);

http.createServer(function (request, response) {
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   console.log("entered the endpoint");

   eventEmitter.emit("countTwenty");
   eventEmitter.emit("countFive");
   eventEmitter.emit("countTen");
   response.writeHead(200, {'Content-Type': 'text/plain'});
   // Send the response body as "Hello World"
   response.end(stringOP);
   stringOP = "";
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
