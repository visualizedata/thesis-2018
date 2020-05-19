var fs = require('fs');
var Twit = require('twit');
var config = require('./config');
var tweetHold = [];
var cheerio = require('cheerio');
var request = require('request'); //load module with npm request

var T = new Twit(config);

var options = { screen_name: 'NRA',
                count: 7};

var stream = T.get('statuses/user_timeline', options , function(err, data) 
{
  for (var i = 0; i < data.length ; i++) 
  {

 var rawtweets = data[i].text
  var cleantweets = "@NRA: " + rawtweets
     .replace (/,/g,"")

     console.log(cleantweets);

tweetHold.push(cleantweets);
   
 fs.writeFileSync('thetweets.csv', ("tweet1" + "," + "tweet2" + "," + "tweet3"  + "," + "tweet4"  + "," + "tweet5" + ","  + "tweet6" +"," + "tweet7" + "\n" + tweetHold), 'utf8'); 

  }

})



