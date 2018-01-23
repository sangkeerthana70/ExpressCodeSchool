var express = require("express");//require the express library
var app = express();//application instance

app.get('/', function(request, response) {//on the app object we create a function that calls routes.
//the get function creates a route that accepts a http get request  
    response.send("Hello World!");
});app.get('/name', function(request, response) {
    response.send("Anuradha!");
});

app.get('/redirect',  function(request, response) {
    response.redirect(301, '/surprise');//redirecting with a custom status code 301 that says
    //the path is moved permanently
});

//app.get('/surprise', function(request, response) {
   // response.send("Status-301, Moved Permanently");
//});

app.get('/currentDate', function(request, response) {
    var today = new Date().toString().substr( 0, 25 );
    response.send(today);
    //console.log(today);
});

app.listen(process.env.PORT, function() {
    console.log("listening on Port 3000");
});