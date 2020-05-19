var data;
var margin = 50;

function preload() {
  data = loadTable('denial.csv', 'csv', 'header');
  myFont = loadFont("Roboto.otf");
  bodyFont = loadFont("Roboto.otf");
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
background (0,0,0);
textFont(myFont);
textSize(40);
fill('white');
text('Evolution of Denial', 25, 100);
textSize(20);
text('How Are Politicians Selling their Skepticism of Climate Change?', 25, 140);
//draw key
textFont(bodyFont);

textSize(14);
fill (251, 154, 153);
rect (25,200,10,10);
text ("Alternative facts", 40, 210);
fill (166, 206, 227);
rect (25,225,10,10);
text ("It still gets cold sometimes", 40, 235);
fill (178, 223, 138);
rect (25, 250,10,10);
text ("It's not worth the money", 40, 260);
fill (192, 192, 192);
rect (25, 275,10,10);
text ("We can never truly know", 40,285);
translate(margin, margin); 


//display data
  translate(width/10, height/10);
for (var i = 0; i < quote.length; i++){
  for (j = 0; j < 41; j++)
    rotate (2/4);
   fill((r[i]), (g[i]), (b[i]));

textFont(bodyFont);  
      textSize(15);
      rotate(radians(frameCount/180));
text((quote[i]), 200, 400);
   fill((r[i]-50), (g[i]-50), (b[i])-50);
text((who[i]) + ", " + (month[i]) + " " + (when[i]), 200, 420);


  }
}

 




