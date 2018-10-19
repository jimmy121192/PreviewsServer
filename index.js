const express = require("express");
var app = express();

const port = process.env.PORT || 3000;



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


// var results = [];
app.get("/barcode/: upc", function(req, resp){
	var upc = req.params.upc;

	// results.push(product);
    resp.send(upc);
    console.log(upc)
})

app.listen(port, function(err){

if(err){
	console.log("Code doesn't work, Jimmy: "+err);
	return false;
}

console.log("Port is open for Jimmy!!")

});