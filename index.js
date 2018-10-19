const express = require("express");
var app = express();
var fetch = require('node-fetch');
const port = process.env.PORT || 3000;



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


// var results = [];
app.get("/barcode/:upc", function(req, resp){
    var upc = req.params.upc;
    
    fetch("http://api.walmartlabs.com/v1/items?apiKey=c9tjdnbch2ehb7ta56qsv46k&upc=" + upc).then(function(resp){
			
        return resp.json();
    }).then(function(json){
        console.log(json);
        // document.getElementById("display").innerHTML = "";
        // for (var i =0; i<json.length; i++){
        // 	var ndiv = document.createElement("div");
        // 	ndiv.innerHTML = json[i];
        // 	document.getElementById('display').appendChild(ndiv);
        // }
        resp.json(json);
    });

    console.log(upc)
})

app.listen(port, function(err){

if(err){
	console.log("Code doesn't work, Jimmy: "+err);
	return false;
}

console.log("Port is open for Jimmy!!")

});