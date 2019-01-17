var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//connect to the database added , {useNewUrlParser: true}
mongoose.connect("mongodb://test:tester1@ds259154.mlab.com:59154/todoapplication", {useNewUrlParser: true});

//Create a schema - this is like a bluepring
var todoSchema = new mongoose.Schema({
	item: String	
});

var Todo = mongoose.model("Todo", todoSchema);


// var itemOne =Todo({item: "buy flowers"}).save(function(err){
// 	if (err) throw err;
// 	console.log("item saved");
// });

//var data =[{item: "get milk"}, {item: "walk dog"}, {item: "kick some coding ass"}];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){

app.get("/todo", function(req, res){
	//get data mongodb and pass it to the view
	Todo.find({}, function(err, data){
		if (err) throw err;
		res.render("todo", {todos: data});
	});
	
});

app.post("/todo", urlencodedParser, function(req, res){
	//get data from the view and add it to mongodb
	var newTodo =Todo(req.body).save(function(err, data){
		if (err) throw err;
		res.json(data);	
	});
});

app.delete("/todo/:item", function(req, res){
	//delete the request item from mongodb
	Todo.find({item: req.params.item.replace(/\-/g, " ")}).deleteOne(function(err, data){
		if (err) throw err;
		res.json(data);
	});


	
});
 
};