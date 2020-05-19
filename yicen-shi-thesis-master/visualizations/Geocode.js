var fs=require('fs');
var request=require('request');
var async = require('async');
var asyncEachObject = require('async-each-object');
var APIkey=process.env.APIkey;

var data = JSON.parse(fs.readFileSync('/Users/yicenshi/Desktop/major_studio_2/visualizations/parsed_data/food_enforcement_US_bacteria.json'));



//convert address to lat and lon
   async.eachSeries(data, function(value, callback) {

     	    var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value.complete_address.split(' ').join('+') + '&key=' + APIkey;
     	     // console.log(apiRequest);
        
  	       request(apiRequest, function(err, resp, body) {
  	        if (err) { 
  	        	throw err;

 	          }
 	          console.log(value.complete_address);	         
 	          value.latLong = JSON.parse(body).results[0].geometry.location;
 	          console.log(JSON.parse(body).results[0].geometry.location);
 	         
 	    
 	        setTimeout(callback, 500);
 	        
 	     });
	    
 	 }, function() {
 console.log('done')
//      // Write the meetings data to the original data 
     fs.writeFileSync('/Users/yicenshi/Desktop/major_studio_2/visualizations/parsed_data/food_enforcement_US_bacteria_geocoded.json', JSON.stringify(data));
 });

