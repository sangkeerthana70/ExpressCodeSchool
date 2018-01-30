var express = require("express");//require the express library
var app = express();//application instance

/* The following code is for Level1 class assignment

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
    console.log("listening on Port.....");
});*/

<<<<<<< HEAD
//Level-2 class assignment.
/*app.use(express.static('public')); 
=======
/*Level-2 class assignment.
app.use(express.static('public')); 
>>>>>>> Level4

app.get('/cities', function(req, res){
  var cities = ['New York', 'London', 'Paris', 'Tokyo'];
  res.send(cities);
});

app.listen(process.env.PORT, function() {
    console.log("listening on Port....");
})*/
<<<<<<< HEAD


//Level3 Class Assignment
app.use(express.static('public')); 

//static route
app.get('/cities', function(request, response){
  var cities = ['Los Angeles', 'Chicago', 'Boston', 'New York City', 'Seattle'];
  if ((request.query.limit > 0) & (request.query.limit <= cities.length)) {
        response.json(cities.slice(0, request.query.limit));
    }
    else if(request.query.limit==0) {
        response.send(cities);
    } 
    else {//greater than the array[length]
        response.status(404).json('Only maximum of five cities supported');
        //console.log("here");
    }
  
});

//Dynamic route
 var cities = {
     'Denver': 'Colorado',
     'Chicago': 'Illinois',
     'Boston': 'Massachusetts',
     'Phoenix': 'Arizona',
     'Seattle': 'Washington'
     };
     

     
 app.get('/cities/:city', function(request, response) {
     var city = request.params.city;
     var nCity = city[0].toUpperCase() + city.slice(1).toLowerCase();//normalizing data
     console.log(nCity);
     var returnState = cities[nCity];//go to the cities property with the
     //user input of nCity and get its value of state and return it
     if (!returnState) {
         response.status(404).json('No state found for ' + request.params.state);
     }
     else {
     response.json(returnState);
     }
 });

app.listen(process.env.PORT, function() {
    console.log("listening on Port....");
});

/*Level3 Class Assignment
app.use(express.static('public')); 

//static route
app.get('/cities', function(request, response){
  var cities = ['Los Angeles', 'Chicago', 'Boston', 'New York City', 'Seattle'];
  if ((request.query.limit > 0) & (request.query.limit <= cities.length)) {
        response.json(cities.slice(0, request.query.limit));
    }
    else if(request.query.limit==0) {
        response.send(cities);
    } 
    else {//greater than the array[length]
        response.status(404).json('Only maximum of five cities supported');
        //console.log("here");
    }
  
});

//Dynamic route
 var cities = {
     'Los Angeles': 'California',
     'Chicago': 'Illinois',
     'Boston': 'Massachusetts',
     'New York City': 'New York',
     'Seattle': 'Washington'
     };
     
 app.get('/cities/:city', function(request, response) {
     var city = request.params.city;
     var nCity = city[0].toUpperCase() + city.slice(1).toLowerCase();//normalizing data
     console.log(nCity);
     var returnState = cities[nCity];
     if (!returnState) {
         response.status(404).json('No state found for ' + request.params.state);
     }
     else {
     response.json(returnState);
     }
 });

app.listen(process.env.PORT, function() {
    console.log("listening on Port....");
});*/


//Level4 Class Assignment

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

var cities = {
     'Los Angeles': 'CA',
     'Chicago': 'IL',
     'Boston': 'MA',
     'New York City': 'NY',
     'Seattle': 'WA'
     };

app.use(express.static('public')); 

//static route
app.get('/cities', function(request, response){
    
  var limit = request.query.limit;
  var cityList = Object.keys(cities);
  if ((limit > 0) & (limit <= cityList.length)) {
        response.json(cityList.slice(0, request.query.limit));
    }
    else if(limit==0) {
        response.send(cityList);
    } 
    else {//greater than the array[length]
        response.status(404).json('Only maximum of five cities supported');
        //console.log("here");
    }
  
});

app.post('/addCity', parseUrlencoded, function(request, response) {//parseUrlencoded
//is a handler that creates an element called body in the request object. Inside route we have 
//the form data available to request.body object
  var cityDetail = request.body;//returns the form data
  var cityName =cityDetail.city;
  var stateName = cityDetail.state;
  var nState = stateName.toUpperCase();
  var nCity = cityName[0].toUpperCase() + cityName.slice(1).toLowerCase();
  cities[nCity] = nState;
  response.status(201).json(nCity);//responds with a new city name.
});

app.get('/cities/:city', function(request, response) {
     var city = request.params.city;

     var state = cities[city];
     if (!state) {
        response.status(404).json('No state found for ' + request.params.state);
     }
     else {
        response.json(state);
     }
 });

app.delete('/cities/:city',function(request,response){
    var city = request.params.city;
    //console.log(city);
    delete cities[city];
    response.sendStatus(200);
});
app.listen(process.env.PORT, function() {
    console.log("listening on Port....");
});

//Level5 
