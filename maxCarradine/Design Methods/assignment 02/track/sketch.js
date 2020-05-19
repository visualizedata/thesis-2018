var lat, long, gender, table, myMap, desc, day, date, time;


function preload(){
  table = loadTable("data/maxtrax.csv", "csv", "header");

}

function setup() {
 // createCanvas(500, 500);

// LEAFLET CODE

mymap = L.map('mapid').setView([40.7354989, -73.9918813], 16);
  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWJjYXJyYWRpbmUiLCJhIjoiY2l6ZWxmeGh6MjJicjJ2cW9ncDh3ZzVpMiJ9.QMaUpzAhGuRXJZcP9-TtdQ', {
  maxZoom: 20,
  id: 'mapbox.streets'
  }).addTo(mymap);
  drawDataPoints();
}

function drawDataPoints(){


  lat = table.getColumn("Latitude");
  long = table.getColumn("Longitude");
  gender = table.getColumn("Gender");
  address = table.getColumn("Address");
  desc = table.getColumn("Description");
  day = table.getColumn("Day");
  time = table.getColumn("Time");
  date = table.getColumn("Date");

    for(var i=0; i<25; i++){
      var col = 'black';
      if(gender[i]==="M"){
        col = 'deepskyblue';
      }else if(gender[i]==="F"){
        col= 'red';
      }

      var circle = L.circle([lat[i], long[i]], {
        radius: 30,
        stroke: false,
        fillColor: col,
        fillOpacity: 0.5
      }).addTo(mymap)
      .bindPopup(address[i] + " on " + day[i] + " " + date[i] + " at " + time[i] + ". " + desc[i]);
  }
}

// function draw() {
//     textSize(12);
// fill ('gray');
// rect (25,200,10,10);
// text ("IDK", 40, 210);
// fill ('deepskyblue');
// rect (25,225,10,10);
// text ("Male", 40, 235);
// fill ('red');
// rect (25, 250,10,10);
// text ("Female", 40, 260);

// }

