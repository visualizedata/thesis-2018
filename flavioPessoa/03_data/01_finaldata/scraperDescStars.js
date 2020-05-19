var request = require('request');
var async = require('async');
var cheerio = require('cheerio');
var fs = require('fs');
var _ = require('underscore');

var collection = [ ];
var collection2 = [ ];

var obj = JSON.parse(fs.readFileSync('SeparatePages/completeStars2.json', 'utf8'));

function isWhiteSpace(char) {
  return " \t\n".includes(char);
}

function isPunct(char) {
  return ";:.,?!-'\"(){}".includes(char);
}

function compress(string) {
    return string
      .replace(/[[:punct:]]$/,'')
      .split(" ")
      .filter(char => !isWhiteSpace(char) && !isPunct(char))
      // .join(" ");
};


async.eachSeries(obj, function(value, callback) {
        var Dict = new Object;
        Dict.name = value.name;

        var topics = JSON.stringify(value.topics);
        var realTopics = JSON.parse(topics);
        console.log(realTopics);
        realTopics.forEach(function(element){
            
        collection.push(element);
        });
        
        // Dict.Topics = realTopics;
        
    
    setTimeout(callback, 10);
    }, function() {
        // console.log(collection);
        var unique = _.uniq(collection);
        
        var sorted = unique.sort();
        
        
        async.eachSeries(sorted, function(value2, callback2) {
        console.log(value2 + ' here');
        var completed = new Object;
        completed.name = value2;
        completed.cat = 'git_topic';
        completed.type = 'starred';
        
        var url3 = 'http://github.com/topics/' + value2;
        request(url3, function(error, response, body) {
            if (!error && response.statusCode == 200) {
            console.log(url3);
            // load `content` into a cheerio object
            var $ = cheerio.load(body);
            var desc = $('.mb-3').find('p').text();
            var values = desc;
            console.log(values);
            var newvalues = compress(values);
            console.log(newvalues);
            // completed.topics.push(compress(values));
            completed.topics = newvalues;
            collection2.push(completed);
            }
            console.log(completed);
        });
        setTimeout(callback2, 250);
        
        }, function(){
            fs.writeFileSync('SeparatePages/topicsDescStars.json', JSON.stringify(collection2));
    });

        console.log(sorted);


});

