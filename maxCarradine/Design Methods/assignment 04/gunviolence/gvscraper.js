var request = require('request'); //load module with npm request
var fs = require('fs');
var cheerio = require('cheerio');
var pg00data = [];
var pg01data = [];
var pg02data = [];
var pg03data = [];
var pg04data = [];
var pg05data = [];
var pg06data = [];
var pg07data = [];
var pg08data = [];
var pg09data = [];
var pg10data = [];

request('http://www.gunviolencearchive.org/last-72-hours', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('gv00.html', body);
  }
  else {console.error('request failed')}
  
  var contentpg00 = fs.readFileSync('gv00.html');
  var $ = cheerio.load(contentpg00);
    
  $('tbody').find('td').each(function(i, elem)
  {
     var pg00event = ($(elem)
     .text()
     .trim()
     .replace (/,/g,"")
      .replace (/,/g,"")
     .replace (/li class/g,"")
     .replace(/View Incident\nView Source/g, "\n")
          .replace(/View Incident/g, "\n")
    .replace(/,,,,/g, "")
      .replace(/,,,/g, "")
      .replace(/,,/g, "")
    .replace(/,/g, "")



     );
     
      pg00data.push(pg00event);

}

);
});

request('http://www.gunviolencearchive.org/last-72-hours?page=1', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('gv01.html', body);
  }
  else {console.error('request failed')}
  
  var contentpg01 = fs.readFileSync('gv01.html');
  var $ = cheerio.load(contentpg01);
    
  $('tbody').find('td').each(function(i, elem)
  {
     var pg01event = ($(elem)
     .text()
     .trim()
     .replace (/,/g,"")
      .replace (/,/g,"")
     .replace (/li class/g,"")
     .replace(/View Incident\nView Source/g, "\n")
     .replace(/View Incident/g, "\n")
    .replace(/,,,,/g, "")
      .replace(/,,,/g, "")
      .replace(/,,/g, "")
    .replace(/,/g, "")



     );
     
      pg01data.push(pg01event);

}

);
});
//START PAGE 2
request('http://www.gunviolencearchive.org/last-72-hours?page=2', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('gv02.html', body);
  }
  else {console.error('request failed')}
  //start copy
  var contentpg02 = fs.readFileSync('gv02.html');
  var $ = cheerio.load(contentpg02);
    
  $('tbody').find('td').each(function(i, elem)
  {
     var pg02event = ($(elem)
     .text()
     .trim()
     .replace (/,/g,"")
      .replace (/,/g,"")
     .replace (/li class/g,"")
     .replace(/View Incident\nView Source/g, "\n")
      .replace(/View Incident/g, "\n")
    .replace(/,,,,/g, "")
      .replace(/,,,/g, "")
      .replace(/,,/g, "")
    .replace(/,/g, "")



     );
     
      pg02data.push(pg02event);

}

); //end copy
  
  
  
});

//START PAGE 3


request('http://www.gunviolencearchive.org/last-72-hours?page=3', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('gv03.html', body);
  }
  else {console.error('request failed')}
  
   var contentpg03 = fs.readFileSync('gv03.html');
  var $ = cheerio.load(contentpg03);
    
  $('tbody').find('td').each(function(i, elem)
  {
     var pg03event = ($(elem)
     .text()
     .trim()
     .replace (/,/g,"")
      .replace (/,/g,"")
     .replace (/li class/g,"")
     .replace(/View Incident\nView Source/g, "\n")
     .replace(/View Incident/g, "\n")
    .replace(/,,,,/g, "")
      .replace(/,,,/g, "")
      .replace(/,,/g, "")
    .replace(/,/g, "")



     );
     
      pg03data.push(pg03event);

}

);
  
  
});
//START PAGE 4
request('http://www.gunviolencearchive.org/last-72-hours?page=4', function (error, response, body) {
  if (!error && response.statusCode == 200) {
        fs.writeFileSync('gv04.html', body);

  }
  else {console.error('request failed')}
  
     var contentpg04 = fs.readFileSync('gv04.html');
  var $ = cheerio.load(contentpg04);
    
  $('tbody').find('td').each(function(i, elem)
  {
     var pg04event = ($(elem)
     .text()
     .trim()
     .replace (/,/g,"")
      .replace (/,/g,"")
     .replace (/li class/g,"")
     .replace(/View Incident\nView Source/g, "\n")
     .replace(/View Incident/g, "\n")
    .replace(/,,,,/g, "")
      .replace(/,,,/g, "")
      .replace(/,,/g, "")
            .replace(/,/g, "")



     );
     
      pg04data.push(pg04event);

}

);
  
  
});
//START PAGE 5
request('http://www.gunviolencearchive.org/last-72-hours?page=5', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('gv05.html', body);
  }
  else {console.error('request failed')}
  
     var contentpg05 = fs.readFileSync('gv05.html');
  var $ = cheerio.load(contentpg05);
    
  $('tbody').find('td').each(function(i, elem)
  {
     var pg05event = ($(elem)
     .text()
     .trim()
     .replace (/,/g,"")
      .replace (/,/g,"")
     .replace (/li class/g,"")
     .replace(/View Incident\nView Source/g, "\n")
     .replace(/View Incident/g, "\n")
    .replace(/,,,,/g, "")
      .replace(/,,,/g, "")
      .replace(/,,/g, "")
    .replace(/,/g, "")




     );
     
      pg05data.push(pg05event);

}

);
  
  
});
//START PAGE 6
request('http://www.gunviolencearchive.org/last-72-hours?page=6', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('gv06.html', body);
  }
  else {console.error('request failed')}
  
     var contentpg06 = fs.readFileSync('gv06.html');
  var $ = cheerio.load(contentpg06);
    
  $('tbody').find('td').each(function(i, elem)
  {
     var pg06event = ($(elem)
     .text()
     .trim()
     .replace (/,/g,"")
      .replace (/,/g,"")
     .replace (/li class/g,"")
     .replace(/View Incident\nView Source/g, "\n")
     .replace(/View Incident/g, "\n")
    .replace(/,,,,/g, "")
      .replace(/,,,/g, "")
      .replace(/,,/g, "")
    .replace(/,/g, "")




     );
     
      pg06data.push(pg06event);

}

);
  
  
});
//START PAGE 7
request('http://www.gunviolencearchive.org/last-72-hours?page=7', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('gv07.html', body);
  }
  else {console.error('request failed')}
  
     var contentpg07 = fs.readFileSync('gv07.html');
  var $ = cheerio.load(contentpg07);
    
  $('tbody').find('td').each(function(i, elem)
  {
     var pg07event = ($(elem)
     .text()
     .trim()
     .replace (/,/g,"")
      .replace (/,/g,"")
     .replace (/li class/g,"")
     .replace(/View Incident\nView Source/g, "\n")
     .replace(/View Incident/g, "\n")
    .replace(/,,,,/g, "")
      .replace(/,,,/g, "")
      .replace(/,,/g, "")
    .replace(/,/g, "")




     );
     
      pg07data.push(pg07event);

}

);
  
  
  
});
//START PAGE 8
request('http://www.gunviolencearchive.org/last-72-hours?page=8', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('gv08.html', body);
  }
  else {console.error('request failed')}
  
     var contentpg08 = fs.readFileSync('gv08.html');
  var $ = cheerio.load(contentpg08);
    
  $('tbody').find('td').each(function(i, elem)
  {
     var pg08event = ($(elem)
     .text()
     .trim()
     .replace (/,/g,"")
      .replace (/,/g,"")
     .replace (/li class/g,"")
     .replace(/View Incident\nView Source/g, "\n")
     .replace(/View Incident/g, "\n")
    .replace(/,,,,/g, "")
      .replace(/,,,/g, "")
      .replace(/,,/g, "")
    .replace(/,/g, "")




     );
     
      pg08data.push(pg08event);

}

);
  
  
  
});
//START PAGE 9
request('http://www.gunviolencearchive.org/last-72-hours?page=9', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('gv09.html', body);
  }
  else {console.error('request failed')}
  
     var contentpg09 = fs.readFileSync('gv09.html');
  var $ = cheerio.load(contentpg09);
    
  $('tbody').find('td').each(function(i, elem)
  {
     var pg09event = ($(elem)
     .text()
     .trim()
     .replace (/,/g,"")
      .replace (/,/g,"")
     .replace (/li class/g,"")
     .replace(/View Incident\nView Source/g, "\n")
     .replace(/View Incident/g, "\n")
       .replace(/,,,,/g, "")
      .replace(/,,,/g, "")
      .replace(/,,/g, "")
    .replace(/,/g, "")




     );
     
      pg09data.push(pg09event);

}

);
  
  
});
//START PAGE 10
request('http://www.gunviolencearchive.org/last-72-hours?page=10', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('gv10.html', body);
  }
  else {console.error('request failed')}
  
     var contentpg10 = fs.readFileSync('gv10.html');
  var $ = cheerio.load(contentpg10);
    
  $('tbody').find('td').each(function(i, elem)
  {
     var pg10event = ($(elem)
     .text()
     .trim()
     .replace (/,/g,"")
      .replace (/,/g,"")
     .replace (/li class/g,"")
     .replace(/View Incident\nView Source/g, "\n")
     .replace(/View Incident/g, "\n")
      .replace(/,,,,/g, "")
      .replace(/,,,/g, "")
      .replace(/,,/g, "")
     .replace(/,/g, "")



     );
     
      pg10data.push(pg10event);
      fs.writeFileSync('all72hrs.csv', (","+"Date" + "," + "State" + "," + "City" + "," + "Address" +"," + "Killed" + "," + "Injured"  + "\n"  + pg00data + "," +pg01data + "," + pg02data  + pg03data +pg04data + pg05data + pg06data  +  pg07data  + pg08data  + pg09data + pg10data)); 
   //   fs.writeFileSync('all72hrs.csv', (","+ "Date" + "," + "State" + "," + "City" + "," + "Address" +"," + "Killed" + "," + "Injured"  + "\n"  + "," + pg00data +"," + pg01data +"," + pg02data  + "," + pg03data +"," +pg04data +"," + pg05data + "," + pg06data  + "," + pg07data + "," + pg08data  + "," + pg09data)); 


}

);
  


});
  