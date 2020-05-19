var lat, long, gender, table, myMap, desc, day, date, time;


function preload(){
  table = loadTable("data/maxtrax.csv", "csv", "header");

}

function setup() {
 // createCanvas(500, 500);

// LEAFLET CODE

mymap = L.map('mapid').setView([40.7354989, -73.9918813], 17);
  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWJjYXJyYWRpbmUiLCJhIjoiY2l6ZWxmeGh6MjJicjJ2cW9ncDh3ZzVpMiJ9.QMaUpzAhGuRXJZcP9-TtdQ', {
  maxZoom: 22,
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
      var col = '#E8D9C2';
      if(gender[i]==="M"){
        col = '#E8D9C2';
      }else if(gender[i]==="F"){
        col= '#B65040';
      }

      var circle = L.circle([lat[i], long[i]], {
        radius: 15,
        stroke: false,
        fillColor: col,
        fillOpacity: .8
      }).addTo(mymap)
      .bindPopup(address[i] + " on " + day[i] + " " + date[i] + " at " + time[i] + ". " + desc[i]);
  }
}



