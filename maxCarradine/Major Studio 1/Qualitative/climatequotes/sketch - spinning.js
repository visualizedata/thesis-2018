var data;
var margin = 50;

function preload() {
  data = loadTable('denial.csv', 'csv', 'header');
  myFont = loadFont("Gotham-Black.otf");
}

function setup() {
createCanvas(windowWidth-75, windowHeight-75);
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
text('How Are Politicians Selling their Skepticism on Climate Change?', 150, 50);
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

//display data
  translate(width/10, height/10);
for (var i = 0; i < quote.length; i++){
  for (j = 0; j < 41; j++)
    rotate(j / 10);
    scale(j / 50.0);
   fill((r[i]), (g[i]), (b[i]));
strokeWeight(0);
     textFont(myFont);    
      textSize(26);
      rotate(radians(frameCount));
text((quote[i]), 200, i);


  }
}
//reveal quote data


//if (mouseIsPressed) {
 //  fill((r[i])-95, (g[i])-95, (b[i])-95);
 //   noStroke();
	//text((who[i]) + ", " + (month[i]) + " " + (when[i]), 150, 25+30*i);
 




