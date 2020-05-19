var data;
var margin = 75;

function preload() {
  data = loadTable('denial.csv', 'csv', 'header');
  myFont = loadFont("Gotham-Black.otf");
  bodyFont = loadFont("Gotham-Book.otf");
}

function setup() {
createCanvas(windowWidth, 1200);
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
var timeline = (1000);
var revealY = (100);
var revealX = (240);
background (25);
textFont(myFont);
textSize(24);
fill('white');
text('Evolution of Denial', 150, 25);
textSize(16);
text('How Are Politicians Selling their Skepticism of Climate Change?', 150, 50);
//draw key
     textFont(bodyFont);    
textSize(9);
fill (228, 95, 86);
rect ((windowWidth*.80),10,10,10);
text ("Alternative facts", (windowWidth*.80+15),20);
fill (66, 133, 244);
rect ((windowWidth*.80),25,10,10);
text ("It still gets cold sometimes", (windowWidth*.80+15),35);
fill (102, 204, 0);
rect ((windowWidth*.80),40,10,10);
text ("It's not worth the money", (windowWidth*.80+15),50);
fill (192, 192, 192);
rect ((windowWidth*.80),55,10,10);
text ("We can never truly know", (windowWidth*.80+15),65);

translate(margin, margin); 
//draw timeline
fill ('white');
rect (100,25,25,995);
     textFont(myFont);
     textSize(16);
text('2013',50, 40);
text('2014',50,(10+(timeline*.27)));
text('2015',50,(10+(timeline *.52)));
text('2016',50,(10+(timeline*.77)));
//display data
     textFont(bodyFont);    
for (var i = 0; i < quote.length; i++){
fill((r[i]), (g[i]), (b[i]));

     textFont(bodyFont);    
      textSize(12);
text((quote[i]), 150, 45+25*i);

//reveal quote data on hover
  if (dist(mouseX,mouseY,240,120 + (i*25)) < 14)  {
fill((r[i])-50, (g[i])-50, (b[i])-50);
       textFont(bodyFont);  
  text((who[i]) + ", " + (month[i]) + " " + (when[i]), 150, (35 + i*25));
} 

else 


//reveal quote data on click
 if (mouseIsPressed) {
    fill((r[i])-50, (g[i])-50, (b[i])-50);
     textFont(bodyFont);  
  text((who[i]) + ", " + (month[i]) + " " + (when[i]), 150, 34+25*i);
  } 
//end reveal quote data

}
}


