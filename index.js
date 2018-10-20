const express = require("express");
var app = express();
var fetch = require('node-fetch');
const port = process.env.PORT || 3000;



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/barcode/:upc", function(req, resp){
    var upc = req.params.upc;
    
    fetch("http://api.walmartlabs.com/v1/items?apiKey=c9tjdnbch2ehb7ta56qsv46k&upc=" + upc).then(function(resp){
			
        return resp.json();
    }).then(function(json){
        console.log(json);
        resp.json(json);
    });

})
app.get("/reviews/:productid", function(req, resp){
    var productid = req.params.productid;
    
    fetch("http://api.walmartlabs.com/v1/reviews/380374895?apiKey=c9tjdnbch2ehb7ta56qsv46k").then(function(resp){
			
        return resp.json();
    }).then(function(json){
        console.log(json);
        resp.json(json);
    });

})


app.listen(port, function(err){

if(err){
	console.log("Code doesn't work, Jimmy: "+err);
	return false;
}

console.log("Port is open for Jimmy!!")

});