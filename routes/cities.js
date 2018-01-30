var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var cities = {
     'Los Angeles': 'California',
     'Chicago': 'Illinois',
     'Boston': 'Massachusetts',
     'New York City': 'New York',
     'Seattle': 'Washington'
     };
     
router.route('/')
    .get(function(request, response) {
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
    })
    .post(parseUrlencoded, function(request, response) {
      var cityDetail = request.body;//returns the form data
      var cityName =cityDetail.city;
      var stateName = cityDetail.state;
      var nState = stateName.toUpperCase();
      var nCity = cityName[0].toUpperCase() + cityName.slice(1).toLowerCase();
      cities[nCity] = nState;
      response.status(201).json(nCity);//responds with a new city name.
    });
    
router.route('/:city')
    .get(function(request, response) {
         var city = request.params.city;
         var state = cities[city];
         if (!state) {
            response.status(404).json('No state found for ' + request.params.state);
         }
         else {
            response.json(state);
        }
    })
    .delete(function(request, response) {
        var city = request.params.city;
       //console.log(city);
        delete cities[city];
        response.sendStatus(200);
    });
    
module.exports = router;
