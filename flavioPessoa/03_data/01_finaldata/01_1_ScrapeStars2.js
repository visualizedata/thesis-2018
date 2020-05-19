var fs = require('fs');
var request = require('request');
var async = require('async');

var indPaginas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var repoCollection = [];

async.eachSeries(indPaginas, function(value, callback) {
  var apiRequest = 'https://api.github.com/search/repositories?q=stars%3A%3E%3D1000&page=' + value;
  var urlOpt = {
    url: apiRequest,
    
    headers: {
    'User-Agent': 'mczoloft',
    'login': 'mczoloft',
    'Authorization': 'Basic ' + process.env.GIT_API,
    'password': process.env.GITPWD,
    'accept': 'application/vnd.github.mercy-preview+json'
    }
  };

  request(urlOpt, function(err, resp, body) {
    if (err) {throw err;}
    var resultado = JSON.parse(body);
    var arrayItems = resultado.items;
    arrayItems.forEach(function(element) {

      var individualRepo = new Object;
      individualRepo.cat = 'repository';
      individualRepo.type = 'starred';
      individualRepo.name = element.name;
      individualRepo.url = element.html_url;
      individualRepo.stars = element.stargazers_count;
      individualRepo.forks = element.forks_count;
      individualRepo.topics = element.topics;
      individualRepo.gitTopics = element.topics;
      individualRepo.description = element.description;
      
      repoCollection.push(individualRepo);
    });
    
  });
  setTimeout(callback, 6000);
  }, function() {
    var select500 = repoCollection.slice(0, 500);
    fs.writeFile('SeparatePages/completeStars2.json', JSON.stringify(select500));
});