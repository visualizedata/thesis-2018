var data;
var margin = 50;
var x = 0;
var j = 0;
var y = 0;
var speed = .001;
var headFont
var bodyFont
var totaldead = 0;

var col = {
r: 255,
g: 40,
b: 0
};

function preload() {
  data = loadTable('all72hrs.csv', 'csv', 'header');
  quotes = loadTable('thetweets.csv', 'csv','header');

   headFont = loadFont("Inconsolata.otf");
   bodyFont = loadFont("Inconsolata.otf");
}

function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw(){
var state = data.getColumn ("State");
var city = data.getColumn ("City");
var killinj = int(data.getColumn ("Killed"));
var month = data.getColumn ("Date");


var tweet1 = quotes.getColumn ("tweet1");
var tweet2 = quotes.getColumn ("tweet2");
var tweet3 = quotes.getColumn ("tweet3");
var tweet4 = quotes.getColumn ("tweet4");
var tweet5 = quotes.getColumn ("tweet5");
var tweet6 = quotes.getColumn ("tweet6");
var tweet7 = quotes.getColumn ("tweet7");






//var timeline = (windowHeight-75)
background (25);
textFont(headFont);
textSize(46);
fill('white');
//textAlign(LEFT);
text('Gun Violence in America', 25, 50);
textSize(26);

var nums = killinj;
var sum = 0;
for(var k=0; k < nums.length; k++){
 sum += parseInt(nums[k]);
}

text (sum + ' killed in the past three days', 25, 75);

//text (sum + 'The past 72 hours', 25, 125);




textFont(bodyFont);
textSize(16);
textAlign(RIGHT)

text ('Sources', windowWidth - 50, windowHeight - 65);
text ('@NRA Twitter', windowWidth - 50, windowHeight - 50);
text ('The Gun Violence Archive', windowWidth - 50, windowHeight - 35);

textAlign(LEFT)
frameRate(10);
for (j = 0; j < 1; j++){
    textSize(16);

fill('white');
//this works left to right
// text((tweet1[j]) + "\n \n \n" + (tweet2[j]) + "\n \n \n" + (tweet3[j]) + "\n \n \n" + (tweet4[j]), x, 300);

text((tweet7[j]) + "\n" + (tweet6[j]) + "\n" + (tweet5[j]) + "\n" + (tweet4[j]) + "\n" + (tweet3[j]) + "\n" + (tweet2[j]) + "\n" + (tweet1[j]), (800 - x - [j]* 15), -100+ y + ([j]* 50));

if (y > height || y < 0){
speed = speed * -1;
}


 }


//display data
 //translate(width/50, height/50);
//frameRate(8);
for (var i = 0; i < killinj.length; i++){
   translate (20);
   fill(255, 40, 0);


rotate(radians(frameCount/500));

textFont(bodyFont);
textSize((14 * killinj[i])+1);
text((city[i]) + ", " + (state[i]), ((Math.random() * 1000)), -100 + (Math.random() * 1000));



    if (x > width || x < 0){
    speed = speed * -1;
    }

    if (y > 5000 || y <  - 5000)
    {
    speed = speed * -1;
    }

    x = x + speed
    y = y + speed

  

      } //close loop






    } //close draw

 
