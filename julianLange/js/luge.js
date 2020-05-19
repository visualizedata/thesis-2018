var myCanvas;
var startHeight, rowHeight, laneOffset, perspective;
var distanceToStart, courseLength, gap, beginning1, end1, beginning2, end2, beginning3, end3, beginning4, end4;
var splitstart, splitint1, splitint2, splitint3;
var beginnings = [];
var ends = [];
var splits = [];
var splitFlash = [];
var names = [];
var data = [];
var images = [];
var trackPadding;
var farWallHeight, nearWallHeight;
var wallWidth;
var wallDepth;
var separatorHeight;
var xText, yText;
// var button;
var run = false;
var splitMarkers = [];
var runs = [];

function setup() {
    myCanvas = createCanvas(1600, 405);
    myCanvas.parent("container");
    angleMode(DEGREES);
    startHeight = 20
    rowHeight = 40
    laneOffset = 10
    perspective = 0
    distanceToStart = 60
    courseLength = 1365;
    gap = 300
    beginning1 = distanceToStart;
    end1 = beginning1 + courseLength
    beginning2 = end1 + gap
    end2 = beginning2 + courseLength
    beginning3 = end2 + gap
    end3 = beginning3 + courseLength
    beginning4 = end3 + gap
    end4 = beginning4 + courseLength
    splitstart = 30
    splitint1 = 270
    splitint2 = 625
    splitint3 = 1000
    beginnings = [beginning1, beginning2, beginning3, beginning4]
    ends = [end1, end2, end3, end4]
    splits = [splitstart, splitint1, splitint2, splitint3]
    splitFlash = [153, 360, 615, 953, 1160, 1415, 1763, 1970, 2220, 2563, 2770, 3025]
    names = ["DAVID GLEIRSCHER", "CHRIS MAZDZER", "JOHANNES LUDWIG", "DOMINIK FISCHNALLER", "FELIX LOCH", "SAM EDNEY", "KEVIN FISCHNALLER", "ROMAN REPILOV"]
    data = [DG, CM, JL, DF, FL, SE, KF, RR];
    xText = 20;
    yText = 20;
    trackPadding = 50
    farWallHeight = 12;
    nearWallHeight = 30;
    wallWidth = 6;
    wallDepth = 2;
    separatorHeight = 4;
    for(i = 0; i < beginnings.length; i++) {
        for(j = 1; j < splits.length; j++)
        splitMarkers.push(beginnings[i]+splits[j])
    }
    runs = ["RUN 1", "RUN 2", "RUN 3", "RUN 4"]
}

function startRun() {
    frameRate(60)
    run = true
}

function draw() {
    background(255)
    if(!run) { frameRate(0) }
    if(run) { frameRate(60) }
    
    // textFont("AvenirNextCondensed-Medium");
    // textStyle(NORMAL);
    // textSize(24)
    // fill(20, 20, 20);
    // text("Who won the men's singles luge event at the 2018 Winter Olympic Games?", xText, yText)
    // textFont("AvenirNextCondensed-Regular");
    // textSize(20)
    // fill(150*frameCount/20, 150*frameCount/20, 150*frameCount/20);
    // text("The men's singles luge event was held over the course of two days. For each athlete, the times", xText, yText+40)
    // text("from four runs of the track were aggregated. This animation is a side-by-side comparison of the", xText, yText+65)
    // text("top 8 finishers. As the animation progresses, each sled shows the relative overall position.", xText, yText+90)
    
    // text("start", beginning1 + trackPadding, startHeight + 8*rowHeight + 20)
    
    scale(2, 1)
    if(frameCount > 150 & frameCount < 3100) { translate((-frameCount+150) * 2, 0) }
    if(frameCount >= 3100) { translate((-3100+150) * 2, 0) }
    // if(frameCount > 150 && frameCount <= 600) { translate((-frameCount+150) * 2, 0) }
    // if(frameCount > 600) { translate(-900, 0) }
    // if(frameCount > 900 && frameCount <= 1500) { translate((-frameCount+750) * 2, 0) }
    // else if(frameCount > 600 && frameCount < 700) { translate(600, 0) }
    // translate(-frameCount * 1.7  , 0)

    // 8 blue quads per run and white patch down center
    noStroke()
    fill(color('rgba(207, 249, 248, 0.5)'));
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 8; j++) {
            quad(beginnings[i] + (8 - j) * laneOffset - trackPadding, startHeight + j * rowHeight + j * perspective, ends[i] + (8 - j) * laneOffset + trackPadding, startHeight + j * rowHeight + j * perspective, ends[i] + (7 - j) * laneOffset + trackPadding, startHeight + (j + 1) * rowHeight + j * perspective, beginnings[i] + (7 - j) * laneOffset - trackPadding, startHeight + (j + 1) * rowHeight + j * perspective)
        }
    }
    noStroke()
    fill(color('rgba(255, 255, 255, 0.5)'));
    for(i = 0; i < 4; i++) {
        for(j = 0; j < 8; j++) {
            quad(beginnings[i]+(8-j)*laneOffset-3 - trackPadding, startHeight+j*rowHeight+rowHeight/5 + j * perspective, ends[i]+(8-j)*laneOffset + trackPadding, startHeight+j*rowHeight+rowHeight/5 + j * perspective, ends[i]+(7-j)*laneOffset + trackPadding,  startHeight+(j+1)*rowHeight-rowHeight/5 + j * perspective, beginnings[i]+(7-j)*laneOffset - trackPadding, startHeight+(j+1)*rowHeight-rowHeight/5 + j * perspective)
         }
    }
    
    // moving line
    if(frameCount > 20) {
        stroke(100);
        strokeWeight(0.5);
        line(FL[frameCount] + distanceToStart + 84, startHeight, DG[frameCount] + distanceToStart + 4, startHeight + 8 * rowHeight)
    }

    // // white lines to make it look icy
    // stroke("white")
    // strokeWeight(4);
    // for(i = 0; i < 4; i++) {
    //     for(j = 0; j < randomArrayX1.length; j++) {
    //         line(beginnings[i]+8*laneOffset+x1RandomArray[j], yRandomArray[j], beginnings[i]+8*laneOffset+x2RandomArray[j], yRandomArray[j])
    //     }
    // }


// lines for split times, start and finish lines, side walls, and thin horizontal lines

    // 3 split time lines per run (don't include start) and flash when cross
    stroke(color('rgba(100, 100, 100, 0.3)'));
    strokeWeight(6);
    for (i = 0; i < 4; i++) {
        for (j = 1; j < splits.length; j++) {
            line(beginnings[i] + splits[j] + 8 * laneOffset, startHeight, beginnings[i] + splits[j], startHeight + 8 * rowHeight)
        }
    }
    for(i = 0; i < splitMarkers.length; i++) {
        if(frameCount>(splitMarkers[i]-splitFlash[i])) { 
            stroke(color('rgba(255, 250, 205, 0.3)'));
            strokeWeight(6);
            line(splitMarkers[i] + 8 * laneOffset, startHeight, splitMarkers[i], startHeight + 8 * rowHeight)
        }
    }

    // start and finish lines
    for (i = 0; i < 4; i++) {
        stroke(color('rgba(0, 100, 0, 0.3)'));
        strokeWeight(10);
        line(beginnings[i] + 8 * laneOffset, startHeight, beginnings[i], startHeight + 8 * rowHeight)
        stroke(color('rgba(255, 0, 0, 0.3)'));
        strokeWeight(10);
        line(ends[i] + 8 * laneOffset, startHeight, ends[i], startHeight + 8 * rowHeight)
    }
    
    // side walls
    fill(100);
    noStroke()
    for (i = 0; i < 4; i++) {
        rect(beginnings[i] + 8 * laneOffset - trackPadding, startHeight-farWallHeight, courseLength + 2*trackPadding + 4, farWallHeight)
        
        rect(beginnings[i] - trackPadding - 4, startHeight + 8 * rowHeight + wallWidth, courseLength + 2*trackPadding + 4, nearWallHeight)
        
        quad(beginnings[i] + 8 * laneOffset - trackPadding + wallDepth, startHeight-farWallHeight - wallWidth, beginnings[i] + 8 * laneOffset - trackPadding + wallDepth + courseLength + 2*trackPadding + 4, startHeight-farWallHeight - wallWidth,
            beginnings[i] + 8 * laneOffset - trackPadding + courseLength + 2*trackPadding + 4, startHeight-farWallHeight-2, beginnings[i] + 8 * laneOffset - trackPadding, startHeight-farWallHeight)
        
        quad(beginnings[i] - trackPadding + wallDepth - 4, startHeight + 8 * rowHeight, beginnings[i] - trackPadding + wallDepth + courseLength + 2*trackPadding, startHeight + 8 * rowHeight,
            beginnings[i] - trackPadding + courseLength + 2*trackPadding, startHeight + 8 * rowHeight + wallWidth, beginnings[i] - trackPadding - 4, startHeight + 8 * rowHeight + wallWidth)
        
        stroke(255);
        strokeWeight(1);
        line(beginnings[i] + 8 * laneOffset - trackPadding, startHeight-farWallHeight - 1, ends[i] + 8 * laneOffset + trackPadding, startHeight-farWallHeight - 2)
        line(beginnings[i] - trackPadding - 4, startHeight + 8 * rowHeight + wallWidth - 1, ends[i] + trackPadding, startHeight + 8 * rowHeight + wallWidth - 2)
        
        rect
    }

    // 7 thin horizontal lines per 4 runs
    stroke(100);
    strokeWeight(1);
    for (i = 0; i < 4; i++) {
        for (j = 1; j < 8; j++) {
            line(beginnings[i] + 8 * laneOffset - j * laneOffset - trackPadding, startHeight + j * rowHeight + j * perspective, ends[i] + 8 * laneOffset - j * laneOffset + trackPadding, startHeight + j * rowHeight + j * perspective)
        }
    }

    // athlete names text
    textFont("Noto Sans");
    textStyle(ITALIC);
    textAlign(LEFT);
    fill(color('rgba(38, 21, 255, 0.2)'));
    noStroke();
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 8; j++) {
            textSize(rowHeight / 2.5);
            text(names[j], beginnings[i] + 90 - j * laneOffset, startHeight + j * rowHeight + rowHeight * 2 / 3)
        }
    }
    textAlign(RIGHT);
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 8; j++) {
            textSize(rowHeight / 2.5);
            text(names[j], ends[i] + 90 - j * laneOffset - 50, startHeight + j * rowHeight + rowHeight * 2 / 3)
        }
    }
    if(frameCount >= 3160) {
        textAlign(RIGHT);
        fill(color('rgba(218, 165, 32, 0.5)'));
        for (i = 3; i < 4; i++) {
        for (j = 0; j < 1; j++) {
            textSize(rowHeight / 2.5);
            text(names[j], ends[i] + 90 - j * laneOffset - 50, startHeight + j * rowHeight + rowHeight * 2 / 3)
        }
        fill(color('rgba(153, 153, 153, 0.5)'));
        for (j = 1; j < 2; j++) {
            textSize(rowHeight / 2.5);
            text(names[j], ends[i] + 90 - j * laneOffset - 50, startHeight + j * rowHeight + rowHeight * 2 / 3)
        }
        fill(color('rgba(160, 82, 45, 0.5)'));
        for (j = 2; j < 3; j++) {
            textSize(rowHeight / 2.5);
            text(names[j], ends[i] + 90 - j * laneOffset - 50, startHeight + j * rowHeight + rowHeight * 2 / 3)
        }
    }
        
    }
    
    // run 1-4 text
    textFont("Noto Sans");
    textStyle(ITALIC);
    textAlign(CENTER);
    fill(color('rgba(38, 21, 255, 0.1)'));
    textSize(200)
    for (i = 0; i < 4; i++) {
        text(runs[i], beginnings[i] + courseLength/2 - 10, startHeight + 5.75 * rowHeight)
    }
   

    fill(50)
    var ellipseWidth = 10
    var ellipseheight = 6
    for (i = 0; i < data.length; i++) {
        ellipse(data[i][frameCount] + distanceToStart + 8 * laneOffset - i * laneOffset - 1.5*ellipseWidth, startHeight + i * rowHeight + rowHeight / 2, ellipseWidth, ellipseheight)
    }
}