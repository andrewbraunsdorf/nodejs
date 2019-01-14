var http = require("http");

var server = http.createServer(function(req, res){
	console.log("request was made: " + req.url);
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Hey Ninjas!");
});

server.listen(8080, "0.0.0.0");
console.log("You are listening to port 8080");



// var fs = require("fs");

// fs.unlink("./stuff/writeMe.txt", function(){
	

// fs.rmdir("stuff");
// });
// // fs.mkdir("stuff", function(){
// // 	fs.readFile("readMe.text", "utf8", function(err, data){
// // 	fs.writeFile("./stuff/writeMe.txt", data);
// // 	});
// // });


// // fs.unlink("writeMe.txt");


// //delete files using unlink, 2nd time running it, there is an error, as no such file exists, then used .mkdirSync("stuff") to create a directory called stuff, to remove a directory you use .rmdirSync("stuff"), then created asynchronous version by using .mkdir("stuff"), then deleted it using .rmdir("stuff"), but can only remove the directory when it is empty. had to use the unlink method to remove the file first."
// // fs.readFile("readme.txt", "utf8", function(err, data){
// // 	fs.writeFile("writeMe.txt", data);
// // });
// //code
// //console.log("test");
// // var readMe = fs.readFileSync("readme.txt", "utf8");
// //fs.writeFileSync("writeMe.txt", readMe);

// // var events = require("events");

// // var util = require('util');

// // var Person = function(name){
// // 	this.name = name;
// // };

// // util.inherits(Person, events.EventEmitter);

// // var james = new Person("James");
// // var mary = new Person("Mary");
// // var ryu = new Person("ryu");

// // var people = [james, mary, ryu];

// // people.forEach(function(person){
// // 	person.on("speak", function(msg){
// // 		console.log(person.name + " said: " + msg);
// // 	});
// // });

// // james.emit("speak", "hey dudes");
// // ryu.emit("speak", "I want a curry");


// // var myEmitter = new events.EventEmitter();

// // myEmitter.on("someEvent", function(msg){
// // 	console.log(msg);
// // });

// // myEmitter.emit("someEvent", "the event was emitted");