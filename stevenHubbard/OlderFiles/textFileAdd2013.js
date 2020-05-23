var fs = require('fs');
var cheerio = require('cheerio');

var profiles=[];

var content = JSON.parse(fs.readFileSync('appfileText.json','utf8')); //

//create object to load content 

content.forEach( function(d, i) {
    var appText = fs.readFileSync('appfileTexts2013/'+ d.FIELD7,'UTF8');
    console.log('reAppTextFiles/'+ d.FIELD7);
    var forwardText = fs.readFileSync('reAppTextFiles/'+ d.text_forward,'UTF16');
    var $ = cheerio.load(backText);
    var backContent = $('');
    var $1 = cheerio.load(forwardText);
    var forwardContent = $1('');
    console.log(backContent);
        profiles.push(new enterData(d.idOriginal, backContent, forwardContent, d.inc));
    });

fs.writeFileSync('reAppFull.json', JSON.stringify(profiles)); 

function enterData(_idOriginal, _backContent, _forwardContent, _inc){
      var private = {}; //I probably could have used this instead of the private name, but its something similar I did for another project so I used it here.  
            private.idOriginal = _idOriginal;
            private.lookingBack = _backContent;
            private.lookingForward = _forwardContent;
            private.inc = _inc;
            return private;
          //needs to happen outside the function
          }

// var csv = require('csv'); 
// const parse = require('csv-parse');
// // var csv = require('csv-parse/lib/sync');
// // var csv = require('csv-parse');
// // loads the csv module referenced above.


// // gets the csv module to access the required functionality

// function MyCSV(Fone, Ftwo) {
//     this.ContactID = Fone;
//     this.ComPath = Ftwo;
// }; 
// // Define the MyCSV object with parameterized constructor, this will be used for storing the data read from the csv into an array of MyCSV. You will need to define each field as shown above.

// var MyData = []; 
// // MyData array will contain the data from the CSV file and it will be sent to the clients request over HTTP. 

// parse('comPathFile.csv', function (data) {
//     console.log(data);
//     for (var index = 0; index < 233; index++) {
//         console.log(data[index][0])
//         MyData.push(new MyCSV(data[index][0], data[index][1]));
//     }
//     console.log(MyData);
// });
// //Reads the CSV file from the path you specify, and the data is stored in the array we specified using callback function.  This function iterates through an array and each line from the CSV file will be pushed as a record to another array called MyData , and logs the data into the console to ensure it worked.

// // var http = require('http');
// // //Load the http module.
// // 
// // var server = http.createServer(function (req, resp) {
// //     resp.writeHead(200, { 'content-type': 'application/json' });
// //     resp.end(JSON.stringify(MyData));
// // });
// // // Create a webserver with a request listener callback.  This will write the response header with the content type as json, and end the response by sending the MyData array in JSON format.
// // 
// // server.listen(8080);
// // // Tells the webserver to listen on port 8080(obviously this may be whatever port you want.)
