var data;
var margin = 75;

function preload() {
  data = loadTable('denial.csv', 'csv', 'header');
  myFont = loadFont("Gotham-Black.otf");
}

function setup() {
createCanvas(windowWidth, windowHeight);
}


function draw(){
var quote = data.getColumn ("quote");
var category = data.getColumn ("category");
var who = data.getColumn ("who");
var catcode = data.getColumn ("catcode");
var when = data.getColumn ("when");
var month = data.getColumn ("month");
var r = data.getColumn ("r");
var g = data.getColumn ("g");
var b = data.getColumn ("b");
var timeline = (windowHeight-75)
background (25);
textFont(myFont);
textSize(20);
fill('white');
text('Evolution of Denial', 150, 25);
textSize(14);
text('How Are Politicians Selling their Skepticism of Climate Change?', 150, 50);
//draw key
  noStroke();
textSize(9);
fill (255, 140, 140);
rect ((windowWidth*.80),10,10,10);
text ("Alternative facts", (windowWidth*.80+15),20);
fill (51, 153, 255);
rect ((windowWidth*.80),25,10,10);
text ("It still gets cold sometimes", (windowWidth*.80+15),35);
fill (102, 204, 0);
rect ((windowWidth*.80),40,10,10);
text ("It's not worth the money", (windowWidth*.80+15),50);
fill (192, 192, 192);
rect ((windowWidth*.80),55,10,10);
text ("We'll can never truly know", (windowWidth*.80+15),65);

translate(margin, margin); 
//draw timeline
fill ('white');
rect (100,25,25,timeline);
     textFont(myFont);
     textSize(16);
text('2013',50, 40);
text('2014',50,(10+(timeline*.27)));
text('2015',50,(10+(timeline *.52)));
text('2016',50,(10+(timeline*.77)));
//display data
for (var i = 0; i < quote.length; i++){
fill((r[i]), (g[i]), (b[i]));
strokeWeight(0);
     textFont(myFont);    
      textSize(11);
text((quote[i]), 150, 40+25*i);
//reveal quote data
if (mouseIsPressed) {
    fill((r[i])-95, (g[i])-95, (b[i])-95);
      noStroke();
	text((who[i]) + ", " + (month[i]) + " " + (when[i]), 150, 29+25*i);
  }

}
}

