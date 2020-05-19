var myCanvas;
var startHeight, rowHeight, laneOffset;
var distanceToStart, courseLength, gap, beginning1, end1, beginning2, end2, beginning3, end3, beginning4, end4;
var splitstart, splitint1, splitint2, splitint3;
var beginnings = [];
var ends = [];
var splits = [];
var splitFlash = [];
var startFlash = [];
var endLineFlash = [];
var endFlash = [];
var names = [];
var data = [];
var images = [];
var trackPadding;
var farWallHeight, nearWallHeight;
var wallWidth;
var wallDepth;
var wallLengthen;
var trackThickness;
var run = false;
var splitMarkers = [];
var runs = [];
var runsText = [];
var runsTextPosition = [];
var runsNumber = [];
var startLineThickness;
var stopLineThickness;
var splitLineThickness;
var movingLineThickness;
var flagWidth;
var flagHeight;
var perspectiveFactor;


function setup() {
    myCanvas = createCanvas(1600, 405);
    myCanvas.parent("container");
    angleMode(DEGREES);
    startHeight = 20
    rowHeight = 36
    laneOffset = 10
    distanceToStart = 70
    courseLength = 1365;
    gap = 150
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
    splitFlash = [170, 378, 635, 823, 1030, 1285, 1480, 1685, 1940, 2133, 2340, 2595]
    splitFlash = splitFlash.map(function(element) { return element-(80-distanceToStart) })
    startFlash = [0, 859, 1718, 2578]
    endLineFlash = [572, 1433, 2293, 3154]
    endFlash = [592, 1453, 2313, 3174]
    names = ["DAVID GLEIRSCHER", "CHRIS MAZDZER", "JOHANNES LUDWIG", "DOMINIK FISCHNALLER", "FELIX LOCH", "SAM EDNEY", "KEVIN FISCHNALLER", "ROMAN REPILOV"]
    data = [DG, CM, JL, DF, FL, SE, KF, RR];
    trackPadding = 50
    farWallHeight = 16;
    nearWallHeight = 50;
    wallWidth = 10;
    wallDepth = 2;
    wallLengthen = 5;
    trackThickness = 30;
    for(i = 0; i < beginnings.length; i++) {
        for(j = 1; j < splits.length; j++)
        splitMarkers.push(beginnings[i]+splits[j])
    }
    runs = ["1", "2", "3", "4"];
    runsText = ["st run", "nd run", "rd run", "th run"]
    runsNumber = ["Run 1", "Run 2", "Run 3", "Run 4"]
    runsTextPosition = [68, 100, 100, 90]
    startLineThickness = 8
    stopLineThickness = 10
    splitLineThickness = 6
    movingLineThickness = 1
    flagWidth = 30;
    flagHeight = 27;
    perspectiveFactor = 1.4
}

function startRun() {
    frameRate(60)
    run = true
}

function draw() {
    background(255)
    if(!run) { frameRate(0) }
    if(run) { frameRate(60) }
    
    // potnetial add descriptive text
    // scale(1,1)
    // textFont("AvenirNextCondensed-Medium");
    // textStyle(NORMAL);
    // textAlign(LEFT);
    // fill(50);
    // textSize(14);


    //////////////////// far scale and translate speed ////////////////////
    scale(3.15, 1)
    var speed = 2.4
    var startFirstMove = startFlash[0] + 100
    var endFirstMove = endLineFlash[0] + 85
    var startSecondMove = startFlash[1] + 30
    var endSecondMove = endLineFlash[1] + 80
    var startThirdMove = startFlash[2] + 30
    var endThirdMove = endLineFlash[2] + 85
    var startFourthMove = startFlash[3] + 30
    var endFourthMove = endLineFlash[3] + 30
    // var startFifthMove = startFlash[4] + 30
    // var endFifthMove = endLineFlash[4] + 80
    var shiftMove = endFirstMove-startFirstMove
    
    if(frameCount > startFirstMove && frameCount < endFirstMove) { translate(speed*(-frameCount + startFirstMove), 0) }
    if(frameCount >= endFirstMove && frameCount < startSecondMove) { translate(speed*(-shiftMove), 0) }
    if(frameCount >= startSecondMove && frameCount < endSecondMove) { translate(speed*(-frameCount - shiftMove + startSecondMove), 0) }
    if(frameCount >= endSecondMove && frameCount < startThirdMove) { translate(speed*(-shiftMove - (endSecondMove-startSecondMove)), 0) }
    if(frameCount >= startThirdMove && frameCount < endThirdMove) { translate(speed*(-frameCount - shiftMove + startThirdMove - (endSecondMove-startSecondMove)), 0) }
    if(frameCount >= endThirdMove && frameCount < startFourthMove) { translate(speed*(-shiftMove - (endSecondMove-startSecondMove) - (endThirdMove-startThirdMove)), 0) }
    if(frameCount >= startFourthMove && frameCount < endFourthMove) { translate(speed*(-frameCount - shiftMove + startFourthMove - (endSecondMove-startSecondMove) - (endThirdMove-startThirdMove)), 0) }
    // if(frameCount >= endFourthMove && frameCount < startFifthMove) { translate(speed*(-shiftMove - (endSecondMove-startSecondMove) - (endThirdMove-startThirdMove) - (endFourthMove-startFourthMove)), 0) }
    // if(frameCount >= startFifthMove && frameCount < endFifthMove) { translate(speed*(-frameCount - shiftMove + startFifthMove - (endSecondMove-startSecondMove) - (endThirdMove-startThirdMove) - (endFourthMove-startFourthMove)), 0) }
    if(frameCount >= endFourthMove) { translate(speed*(-shiftMove - (endSecondMove-startSecondMove) - (endThirdMove-startThirdMove) - (endFourthMove-startFourthMove)), 0) }
    

    //////////////////// far wall ////////////////////
    for (i = 0; i < 4; i++) {
        fill(100);
        noStroke()
        // side
        rect(beginnings[i] + 8 * laneOffset - trackPadding - wallLengthen,         startHeight-farWallHeight,          courseLength + 2*trackPadding + 2*wallLengthen,          nearWallHeight)
        // top
        quad(beginnings[i] + 8 * laneOffset - trackPadding + wallDepth - wallLengthen,                                      startHeight-farWallHeight - wallWidth/2,
            beginnings[i] + 8 * laneOffset - trackPadding + wallDepth/2 + courseLength + 2*trackPadding + wallLengthen,       startHeight-farWallHeight - wallWidth/2,
            beginnings[i] + 8 * laneOffset - trackPadding + courseLength + 2*trackPadding + wallLengthen,                   startHeight-farWallHeight,
            beginnings[i] + 8 * laneOffset - trackPadding - wallLengthen,                                                   startHeight-farWallHeight)
        // lines
        stroke(255);
        strokeWeight(1);
        line(beginnings[i] + 8 * laneOffset - trackPadding - wallLengthen, startHeight-farWallHeight, ends[i] + 8 * laneOffset + trackPadding + wallLengthen, startHeight-farWallHeight)
        // end
        fill(100);
        noStroke()
        quad(beginnings[i] + 8 * laneOffset - trackPadding + courseLength + 2*trackPadding + wallLengthen,                  startHeight-farWallHeight,
            beginnings[i] + 8 * laneOffset - trackPadding + wallDepth/1.5 + courseLength + 2*trackPadding + wallLengthen,       startHeight-farWallHeight - wallWidth/2,
            beginnings[i] + 8 * laneOffset - trackPadding + wallDepth/1.5 + courseLength + 2*trackPadding + wallLengthen,       startHeight-farWallHeight - wallWidth/2 + nearWallHeight,
            beginnings[i] + 8 * laneOffset - trackPadding + courseLength + 2*trackPadding + wallLengthen,                   startHeight-farWallHeight + nearWallHeight)
        // lines
        stroke(255);
        strokeWeight(0.5);
        line(beginnings[i] + 8 * laneOffset - trackPadding + courseLength + 2*trackPadding + wallLengthen, startHeight-farWallHeight, beginnings[i] + 8 * laneOffset - trackPadding + wallDepth + courseLength + 2*trackPadding + wallLengthen, startHeight-farWallHeight - wallWidth)
        line(beginnings[i] + 8 * laneOffset - trackPadding + courseLength + 2*trackPadding + wallLengthen, startHeight-farWallHeight, beginnings[i] + 8 * laneOffset - trackPadding + courseLength + 2*trackPadding + wallLengthen, startHeight-farWallHeight + nearWallHeight)
    }
    
    
    
    //////////////////// 8 blue quads per run and white patch down center ////////////////////
    // track thickness
    noStroke()
    fill(color('rgba(187, 229, 228, 1)'));
    for(i = 0; i < 4; i++) {
        beginShape();
            vertex(beginnings[i] + 8 * laneOffset - trackPadding, startHeight);
            vertex(ends[i] + 8 * laneOffset + trackPadding, startHeight);
            vertex(ends[i] + 8 * laneOffset + trackPadding, startHeight + trackThickness);
            vertex(ends[i] + trackPadding, startHeight + 8 * rowHeight + trackThickness + 10);
            vertex(beginnings[i] - trackPadding, startHeight + 8 * rowHeight + trackThickness + 10);
            vertex(beginnings[i] - trackPadding, startHeight + 8 * rowHeight);
        endShape();
    }
    // blue quads
    noStroke()
    // white background to give pale look
    fill(color('rgba(255, 255, 255, 1)'));   
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 8; j++) {
            quad(beginnings[i] + (8 - j) * laneOffset - trackPadding, startHeight + j * rowHeight, ends[i] + (8 - j) * laneOffset + trackPadding, startHeight + j * rowHeight, ends[i] + (7 - j) * laneOffset + trackPadding, startHeight + (j + 1) * rowHeight, beginnings[i] + (7 - j) * laneOffset - trackPadding, startHeight + (j + 1) * rowHeight)
        }
    }
    // blue patches
    fill(color('rgba(207, 249, 248, 0.8)'));
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 8; j++) {
            quad(beginnings[i] + (8 - j) * laneOffset - trackPadding,   startHeight + j * rowHeight,
            ends[i] + (8 - j) * laneOffset + trackPadding,              startHeight + j * rowHeight,
            ends[i] + (7 - j) * laneOffset + trackPadding,              startHeight + (j + 1) * rowHeight,
            beginnings[i] + (7 - j) * laneOffset - trackPadding,        startHeight + (j + 1) * rowHeight)
        }
    }
    // white patch down center
    fill(color('rgba(255, 255, 255, 0.5)'));
    for(i = 0; i < 4; i++) {
        for(j = 0; j < 8; j++) {
            quad(beginnings[i]+(8-j)*laneOffset - 2 - trackPadding,     startHeight+j*rowHeight + rowHeight/5,
            ends[i]+(8-j)*laneOffset - 2 + trackPadding,                startHeight+j*rowHeight + rowHeight/5,
            ends[i]+(7-j)*laneOffset + 2 + trackPadding,                startHeight+(j+1)*rowHeight - rowHeight/5,
            beginnings[i]+(7-j)*laneOffset - trackPadding,              startHeight+(j+1)*rowHeight - rowHeight/5)
         }
    }



    //////////////////// split lines //////////////////// 
    noStroke()
    fill(color('rgba(100, 100, 100, 0.3)'))
    for(i = 0; i < splitMarkers.length; i++) {
        quad(splitMarkers[i] + 8 * laneOffset,  startHeight,
            splitMarkers[i] + 8 * laneOffset + splitLineThickness, startHeight,
            splitMarkers[i] + splitLineThickness*perspectiveFactor, startHeight + 8 * rowHeight,
            splitMarkers[i], startHeight + 8 * rowHeight)
    }
    for(i = 0; i < splitMarkers.length; i++) {
        if(frameCount>(splitMarkers[i]-splitFlash[i])) { 
            fill(color('rgba(255, 250, 205, 0.3)'));
            quad(splitMarkers[i] + 8 * laneOffset,  startHeight,
                splitMarkers[i] + 8 * laneOffset + splitLineThickness, startHeight,
                splitMarkers[i] + splitLineThickness*perspectiveFactor, startHeight + 8 * rowHeight,
                splitMarkers[i], startHeight + 8 * rowHeight)
        }
    }



    //////////////////// start and finish lines //////////////////// 
    for (i = 0; i < 4; i++) {
        noStroke()
        fill(color('rgba(255, 255, 255, 0.5)'));
        quad(beginnings[i] + 8 * laneOffset,    startHeight,
            beginnings[i] + 8 * laneOffset + startLineThickness,    startHeight,
            beginnings[i] + startLineThickness*perspectiveFactor,                      startHeight + 8 * rowHeight,
            beginnings[i],                      startHeight + 8 * rowHeight)
        fill(color('rgba(46,139,87, 0.4)'));
        quad(beginnings[i] + 8 * laneOffset,    startHeight,
            beginnings[i] + 8 * laneOffset + startLineThickness,    startHeight,
            beginnings[i] + startLineThickness*perspectiveFactor,                      startHeight + 8 * rowHeight,
            beginnings[i],                      startHeight + 8 * rowHeight)
        fill(color('rgba(255, 255, 255, 0.5)'));
        quad(ends[i] + 8 * laneOffset,    startHeight,
            ends[i] + 8 * laneOffset + stopLineThickness,    startHeight,
            ends[i] + stopLineThickness*perspectiveFactor,                      startHeight + 8 * rowHeight,
            ends[i],                      startHeight + 8 * rowHeight)
        fill(color('rgba(220,20,60, 0.4)'));
        quad(ends[i] + 8 * laneOffset,    startHeight,
            ends[i] + 8 * laneOffset + stopLineThickness,    startHeight,
            ends[i] + stopLineThickness*perspectiveFactor - 3,                      startHeight + 8 * rowHeight,
            ends[i] - 3,                      startHeight + 8 * rowHeight)
        fill(color('rgba(220,20,60, 0.2)'));
        if(frameCount > endLineFlash[i]) {
            quad(ends[i] + 8 * laneOffset,    startHeight,
            ends[i] + 8 * laneOffset + stopLineThickness,    startHeight,
            ends[i] + stopLineThickness*perspectiveFactor - 3,                      startHeight + 8 * rowHeight,
            ends[i] - 3,                      startHeight + 8 * rowHeight)
        }
    }

    
    
    //////////////////// near wall ////////////////////
    for (i = 0; i < 4; i++) {
        fill(100);
        noStroke()
        // side
        rect(beginnings[i] - trackPadding - 4 - wallLengthen,          startHeight + 8 * rowHeight + wallWidth,            courseLength + 2*trackPadding + 2*wallLengthen,          nearWallHeight)
        // top
        quad(beginnings[i] - trackPadding - 3 +  wallDepth - wallLengthen,                                  startHeight + 8 * rowHeight,
            beginnings[i] - trackPadding -4 + wallDepth + courseLength + 2*trackPadding + wallLengthen,     startHeight + 8 * rowHeight,
            beginnings[i] - trackPadding -4 + courseLength + 2*trackPadding + wallLengthen,                 startHeight + 8 * rowHeight + wallWidth,
            beginnings[i] - trackPadding - 4 - wallLengthen,                                                startHeight + 8 * rowHeight + wallWidth)
        // lines
        stroke(255);
        strokeWeight(1);
        line(beginnings[i] - trackPadding - 4 - wallLengthen, startHeight + 8 * rowHeight + wallWidth, ends[i] + trackPadding - 4 + wallLengthen, startHeight + 8 * rowHeight + wallWidth)
        

        // end
        fill(100);
        noStroke()
        quad(beginnings[i] - trackPadding -4 + courseLength + 2*trackPadding + wallLengthen,                startHeight + 8 * rowHeight + wallWidth,
            beginnings[i] - trackPadding -4 + wallDepth + courseLength + 2*trackPadding + wallLengthen,     startHeight + 8 * rowHeight,
            beginnings[i] - trackPadding -4 + wallDepth + courseLength + 2*trackPadding + wallLengthen,     startHeight + 8 * rowHeight + nearWallHeight,
            beginnings[i] - trackPadding -4 + courseLength + 2*trackPadding + wallLengthen,                 startHeight + 8 * rowHeight + wallWidth + nearWallHeight)
        // lines
        stroke(255);
        strokeWeight(0.5);
        line(beginnings[i] - trackPadding -4 + courseLength + 2*trackPadding + wallLengthen, startHeight + 8 * rowHeight + wallWidth, beginnings[i] - trackPadding -4 + wallDepth + courseLength + 2*trackPadding + wallLengthen, startHeight + 8 * rowHeight)
        line(beginnings[i] - trackPadding -4 + courseLength + 2*trackPadding + wallLengthen, startHeight + 8 * rowHeight + wallWidth, beginnings[i] - trackPadding -4 + courseLength + 2*trackPadding + wallLengthen, startHeight + 8 * rowHeight + wallWidth + nearWallHeight)
    }

    
    
    //////////////////// reinforced far wall ////////////////////
    fill(100);
    noStroke()
    for (i = 0; i < 4; i++) {
        rect(beginnings[i] + 8 * laneOffset - trackPadding,         startHeight-farWallHeight + 1,          courseLength + 2*trackPadding,          farWallHeight - 1)
    }



    //////////////////// athlete names text ////////////////////
    textFont("Noto Sans");
    textStyle(ITALIC);
    textAlign(LEFT);
    fill(color('rgba(38, 21, 255, 0.25)'));
    noStroke();
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 8; j++) {
            textSize(rowHeight / 3 + j/1.5);
            text(names[j], beginnings[i] + 90 - j * laneOffset + flagWidth + 10 + j, startHeight + j * rowHeight + rowHeight * 2 / 3)
        }
    }
    textAlign(RIGHT);
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 8; j++) {
            textSize(rowHeight / 3 + j/1.5);
            text(names[j], ends[i] + 90 - j * laneOffset - 75 - j, startHeight + j * rowHeight + rowHeight * 2 / 3)
        }
    }
    
    
    
    //////////////////// run 1-4 text ////////////////////
    textFont("Noto Sans");
    textStyle(ITALIC);
    for (i = 0; i < 4; i++) {
        push()
            translate(beginnings[i] + splitint1 + (splitint2-splitint1)/2 - 5, startHeight)
            fill(color('rgba(38, 21, 255, 0.1)'));
            textAlign(CENTER, CENTER);
            textSize(280)
            text(runs[i], 0, 3.8 * rowHeight)
            textAlign(LEFT, CENTER);
            textSize(36)
            text(runsText[i], runsTextPosition[i], 2.5 * rowHeight)
            fill(color('rgba(38, 21, 255, 0.05)'));
            textSize(32)
            text("of four", runsTextPosition[i]-10, 3.5 * rowHeight)
        pop()
        // add next section for run labels at starts (need to length trackPadding too)        
        // push()
        // fill(color('rgba(38, 21, 255, 0.2)'));
        // translate(beginnings[i] - beginnings[0], 0)
        // translate(100, 400)
        // rotate(-74)
        // shearX(30);
        // textAlign(CENTER)
        // textSize(72)
        // text(runsNumber[i], 140, -10)
        // pop()
    }
    

    
    //////////////////// olympic logo ////////////////////
    textFont("Raleway");
    textAlign(CENTER);
    
    // center logo, text, and rings
    for (i = 0; i < 4; i++) {
        
        // blue bar and ring
        fill(color('rgba(62,118,236, 0.18)'));
        push();
            translate(beginnings[i] + splitint2 + (splitint3-splitint2)/4 + 25, startHeight)
            quad(50,                    1.2 * rowHeight,
                147,                    1.2 * rowHeight,
                147 - laneOffset*0.25,   1.5 * rowHeight,
                50 - laneOffset*0.25,    1.5 * rowHeight)
            textSize(80)
            text("o", 45, 6.35 * rowHeight)
            
            // black bar and ring
            fill(color('rgba(0,0,0, 0.18)'));
            quad(60,      1.6 * rowHeight,
                69,      1.6 * rowHeight,
                57 - laneOffset*0.25,  3.4 * rowHeight,
                47 - laneOffset*0.25,  3.4 * rowHeight)
            textSize(80)
            text("o", 90, 6.35 * rowHeight)
            
            // red bar and ring
            fill(color('rgba(255,0,0, 0.18)'));
            quad(32,      3.5 * rowHeight,
                129,      3.5 * rowHeight,
                129 - laneOffset*0.25,  3.85 * rowHeight,
                32 - laneOffset*0.25,  3.85 * rowHeight)
            textSize(80)
            text("o", 135, 6.35 * rowHeight)
            
            // yellow ring
            fill(color('rgba(255,206,1, 0.2)'));
            textSize(85)
            text("o", 62, 6.85 * rowHeight)
            
            // green bar and ring
            fill(color('rgba(23,154,19, 0.18)'));
            quad(125,      1.6 * rowHeight,
                134,      1.6 * rowHeight,
                122 - laneOffset*0.25,  3.4 * rowHeight,
                112 - laneOffset*0.25,  3.4 * rowHeight)
            textSize(85)
            text("o", 108, 6.85 * rowHeight)
            
            // pyeongchang text
            textSize(25)
            textFont("Global-Medium");
            fill(color('rgba(0,0,0, 0.18)'));
            text("PyeongChang 2018", 105, 4.7 * rowHeight)
        pop();
    }
    
    // top right star symbol
    for (i = 0; i < 4; i++) {
        push();
            translate(beginnings[i] + splitint2 + (splitint3-splitint2)/4 + 202, startHeight + 1.2*rowHeight)
            
            // black
            fill(color('rgba(0,0,0, 0.18)'));
            rotate(10);
            beginShape();
                vertex(0, 0);
                vertex(3, -4);
                vertex(3, -30);
                vertex(-3, -30)
                vertex(-3, -4)
            endShape()
            // green
            fill(color('rgba(23,154,19, 0.18)'));
            rotate(72);
            beginShape();
                vertex(0, 0);
                vertex(3, -4);
                vertex(3, -30);
                vertex(-3, -30)
                vertex(-3, -4)
            endShape()
            // blue
            fill(color('rgba(62,118,236, 0.18)'));
            rotate(72);
            beginShape();
                vertex(0, 0);
                vertex(3, -4);
                vertex(3, -30);
                vertex(-3, -30)
                vertex(-3, -4)
            endShape()
            // red
            fill(color('rgba(255,0,0, 0.18)'));
            rotate(72);
            beginShape();
                vertex(0, 0);
                vertex(3, -4);
                vertex(3, -30);
                vertex(-3, -30)
                vertex(-3, -4)
            endShape()
            // yellow
            fill(color('rgba(255,206,1, 0.23)'));
            rotate(72);
            beginShape();
                vertex(0, 0);
                vertex(3, -4);
                vertex(3, -30);
                vertex(-3, -30)
                vertex(-3, -4)
            endShape()
        pop();
    }
    
    
    // flags at start
    for (i = 0; i < 4; i++) {
        push();
            translate(beginnings[i] + 100, startHeight + 0.14*rowHeight)
            shearX(-15);
        
            // austria
            push();
                translate(0, 0*rowHeight)
                var flagWidthCountry = flagWidth - 2/2
                var flagHeightCountry = flagHeight * 0.96
                strokeWeight(0.5)
                stroke(220)
                noFill()
                rect(0, 0, flagWidthCountry, flagHeightCountry)
                noStroke()
                fill(color('rgba(237,41,57, 0.4)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry/3, 0, flagHeightCountry/3)
                fill(color('rgba(240,240,240, 0.8)'));
                quad(0, flagHeightCountry/3, flagWidthCountry, flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, 0, 2*flagHeightCountry/3)
                fill(color('rgba(237,41,57, 0.4)'));
                quad(0, 2*flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, flagWidthCountry, 3*flagHeightCountry/3, 0, 3*flagHeightCountry/3)
            pop();
            
            // usa
            push();
                translate(0, 1*rowHeight)
                var flagWidthCountry = flagWidth - 1/2
                var flagHeightCountry = flagHeight * 0.97
                strokeWeight(0.5)
                stroke(220)
                noFill()
                rect(0, 0, flagWidthCountry, flagHeightCountry)
                noStroke()
                fill(color('rgba(191, 10, 48, 0.4)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry, 0, flagHeightCountry)
                for(var k = 1; k < 12; k += 2) {
                    fill(color('rgba(240,240,240, 0.8)'));
                    quad(0, flagHeightCountry/13*k, flagWidthCountry, flagHeightCountry/13*k, flagWidthCountry, flagHeightCountry/13*(k+1), 0, flagHeightCountry/13*(k+1))
                }
                fill(color('rgba(255, 255, 255, 1)'));  // this and next line are just to cover background for blue to have opacity
                quad(0, 0, flagWidthCountry*10.4/26, 0, flagWidthCountry*10.4/26, flagHeightCountry*7/13, 0, flagHeightCountry*7/13)
                fill(color('rgba(0, 40, 104, 0.4)'));
                quad(0, 0, flagWidthCountry*10.4/26, 0, flagWidthCountry*10.4/26, flagHeightCountry*7/13, 0, flagHeightCountry*7/13)
                fill(color('rgba(240,240,240, 0.8)'));
                for(let m = 0; m < 7; m++) {
                    for(let n = 0; n < 5; n++) {
                        x = (flagWidthCountry*10.4/26)/8 + (flagWidthCountry*10.4/26)/8 * m
                        y = (flagHeightCountry*7/13)/6 + (flagHeightCountry*7/13)/6 * n
                        ellipse(x, y, 1, 1)
                    }
                }
            pop();
            
            // germany
            push();
                translate(0, 2*rowHeight)
                var flagWidthCountry = flagWidth + 0/2
                var flagHeightCountry = flagHeight * 0.98
                strokeWeight(0.5)
                stroke(220)
                noFill()
                rect(0, 0, flagWidthCountry, flagHeightCountry)
                noStroke()
                fill(color('rgba(0,0,0, 0.4)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry/3, 0, flagHeightCountry/3)
                fill(color('rgba(255,0,0, 0.4)'));
                quad(0, flagHeightCountry/3, flagWidthCountry, flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, 0, 2*flagHeightCountry/3)
                fill(color('rgba(255,204,0, 0.4)'));
                quad(0, 2*flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, flagWidthCountry, 3*flagHeightCountry/3, 0, 3*flagHeightCountry/3)
            pop();
            
            // italy
            push();
                translate(0, 3*rowHeight)
                var flagWidthCountry = flagWidth + 1/2
                var flagHeightCountry = flagHeight * 1
                strokeWeight(0.5)
                stroke(220)
                noFill()
                rect(0, 0, flagWidthCountry, flagHeightCountry)
                noStroke()
                fill(color('rgba(0,140,69, 0.4)'));
                quad(0, 0, flagWidthCountry/3, 0, flagWidthCountry/3, flagHeightCountry, 0, flagHeightCountry)
                fill(color('rgba(240,240,240, 0.8)'));
                quad(flagWidthCountry/3, 0, flagWidthCountry*2/3, 0, flagWidthCountry*2/3, flagHeightCountry, flagWidthCountry/3, flagHeightCountry)
                fill(color('rgba(205,33,42, 0.4)'));
                quad(flagWidthCountry*2/3, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry, flagWidthCountry*2/3, flagHeightCountry)
            pop();
            
            // germany
            push();
                translate(0, 4*rowHeight)
                var flagWidthCountry = flagWidth + 2/2
                var flagHeightCountry = flagHeight * 1.02
                strokeWeight(0.5)
                stroke(220)
                noFill()
                rect(0, 0, flagWidthCountry, flagHeightCountry)
                noStroke()
                fill(color('rgba(0,0,0, 0.4)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry/3, 0, flagHeightCountry/3)
                fill(color('rgba(255,0,0, 0.4)'));
                quad(0, flagHeightCountry/3, flagWidthCountry, flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, 0, 2*flagHeightCountry/3)
                fill(color('rgba(255,204,0, 0.4)'));
                quad(0, 2*flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, flagWidthCountry, flagHeightCountry, 0, flagHeightCountry)
            pop();
            
            // canada
            push();
                translate(0, 5*rowHeight)
                var flagWidthCountry = flagWidth + 3/2
                var flagHeightCountry = flagHeight * 1.04
                strokeWeight(0.5)
                stroke(220)
                noFill()
                rect(0, 0, flagWidthCountry, flagHeightCountry)
                noStroke()
                fill(color('rgba(255,0,0, 0.4)'));
                quad(0, 0, flagWidthCountry/4, 0, flagWidthCountry/4, flagHeightCountry, 0, flagHeightCountry)
                fill(color('rgba(240,240,240, 0.8)'));
                quad(flagWidthCountry/4, 0, flagWidthCountry*3/4, 0, flagWidthCountry*3/4, flagHeightCountry, flagWidthCountry*1/4, flagHeightCountry)
                fill(color('rgba(255,0,0, 0.4)'));
                quad(flagWidthCountry*3/4, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry, flagWidthCountry*3/4, flagHeightCountry)
                fill(color('rgba(200,0,0, 0.4)'));
                push();
                    translate(flagWidthCountry/2, flagHeightCountry*2/3)
                    beginShape()
                        vertex(-flagWidthCountry/60, -flagHeightCountry/20)
                        vertex(-flagWidthCountry/8, 0)
                        vertex(-flagWidthCountry/6, -flagHeightCountry/8)
                        vertex(-flagWidthCountry/8, -flagHeightCountry/8*2)
                        vertex(-flagWidthCountry/20, -flagHeightCountry/8*2+flagWidthCountry/60)
                        
                        vertex(-flagWidthCountry/16, -flagHeightCountry/3)
                        vertex(0, -flagHeightCountry/3-flagWidthCountry/8)
                        vertex(flagWidthCountry/16, -flagHeightCountry/3)
                        
                        vertex(flagWidthCountry/20, -flagHeightCountry/8*2+flagWidthCountry/60)
                        vertex(flagWidthCountry/8, -flagHeightCountry/8*2)
                        vertex(flagWidthCountry/6, -flagHeightCountry/8)
                        vertex(flagWidthCountry/8, -flagHeightCountry/30)
                        
                        vertex(flagWidthCountry/60, -flagHeightCountry/20)
                        vertex(flagWidthCountry/60, flagHeightCountry/6)
                        vertex(-flagWidthCountry/60, flagHeightCountry/6)
                    endShape()
                pop();
            pop();
            
            // italy
            push();
                translate(0, 6*rowHeight)
                var flagWidthCountry = flagWidth + 4/2
                var flagHeightCountry = flagHeight * 1.06
                strokeWeight(0.5)
                stroke(220)
                noFill()
                rect(0, 0, flagWidthCountry, flagHeightCountry)
                noStroke()
                fill(color('rgba(0,140,69, 0.4)'));
                quad(0, 0, flagWidthCountry/3, 0, flagWidthCountry/3, flagHeightCountry, 0, flagHeightCountry)
                fill(color('rgba(240,240,240, 0.8)'));
                quad(flagWidthCountry/3, 0, flagWidthCountry*2/3, 0, flagWidthCountry*2/3, flagHeightCountry, flagWidthCountry/3, flagHeightCountry)
                fill(color('rgba(205,33,42, 0.4)'));
                quad(flagWidthCountry*2/3, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry, flagWidthCountry*2/3, flagHeightCountry)
            pop();
            
            // russia
            push();
                translate(0, 7*rowHeight)
                var flagWidthCountry = flagWidth + 5/2
                var flagHeightCountry = flagHeight * 1.08
                strokeWeight(0.5)
                stroke(220)
                noFill()
                rect(0, 0, flagWidthCountry, flagHeightCountry)
                noStroke()
                fill(color('rgba(240,240,240, 0.8)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry/3, 0, flagHeightCountry/3)
                fill(color('rgba(0,57,166, 0.4)'));
                quad(0, flagHeightCountry/3, flagWidthCountry, flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, 0, 2*flagHeightCountry/3)
                fill(color('rgba(213,43,30, 0.4)'));
                quad(0, 2*flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, flagWidthCountry, flagHeightCountry, 0, flagHeightCountry)
            pop();
        pop();
    }
    
    
    
    // flags at finish lines
    for (i = 0; i < 4; i++) {
        push();
            translate(ends[i] + 30, startHeight + 0.14*rowHeight)
            shearX(-16.3);
        
            // austria
            push();
                translate(0, 0*rowHeight)
                var flagWidthCountry = flagWidth - 2/2
                var flagHeightCountry = flagHeight * 0.96
                strokeWeight(0.5)
                stroke(220)
                noFill()
                rect(0, 0, flagWidthCountry, flagHeightCountry)
                noStroke()
                fill(color('rgba(237,41,57, 0.4)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry/3, 0, flagHeightCountry/3)
                fill(color('rgba(240,240,240, 0.8)'));
                quad(0, flagHeightCountry/3, flagWidthCountry, flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, 0, 2*flagHeightCountry/3)
                fill(color('rgba(237,41,57, 0.4)'));
                quad(0, 2*flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, flagWidthCountry, 3*flagHeightCountry/3, 0, 3*flagHeightCountry/3)
            pop();
            
            // usa
            push();
                translate(0, 1*rowHeight)
                var flagWidthCountry = flagWidth - 1/2
                var flagHeightCountry = flagHeight * 0.97
                strokeWeight(0.5)
                stroke(220)
                noFill()
                rect(0, 0, flagWidthCountry, flagHeightCountry)
                noStroke()
                fill(color('rgba(191, 10, 48, 0.4)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry, 0, flagHeightCountry)
                for(var k = 1; k < 12; k += 2) {
                    fill(color('rgba(240,240,240, 0.8)'));
                    quad(0, flagHeightCountry/13*k, flagWidthCountry, flagHeightCountry/13*k, flagWidthCountry, flagHeightCountry/13*(k+1), 0, flagHeightCountry/13*(k+1))
                }
                fill(color('rgba(255, 255, 255, 1)'));  // this and next line are just to cover background for blue to have opacity
                quad(0, 0, flagWidthCountry*10.4/26, 0, flagWidthCountry*10.4/26, flagHeightCountry*7/13, 0, flagHeightCountry*7/13)
                fill(color('rgba(0, 40, 104, 0.4)'));
                quad(0, 0, flagWidthCountry*10.4/26, 0, flagWidthCountry*10.4/26, flagHeightCountry*7/13, 0, flagHeightCountry*7/13)
                fill(color('rgba(240,240,240, 0.8)'));
                for(let m = 0; m < 7; m++) {
                    for(let n = 0; n < 5; n++) {
                        x = (flagWidthCountry*10.4/26)/8 + (flagWidthCountry*10.4/26)/8 * m
                        y = (flagHeightCountry*7/13)/6 + (flagHeightCountry*7/13)/6 * n
                        ellipse(x, y, 1, 1)
                    }
                }
            pop();
            
            // germany
            push();
                translate(0, 2*rowHeight)
                var flagWidthCountry = flagWidth + 0/2
                var flagHeightCountry = flagHeight * 0.98
                strokeWeight(0.5)
                stroke(220)
                noFill()
                rect(0, 0, flagWidthCountry, flagHeightCountry)
                noStroke()
                fill(color('rgba(0,0,0, 0.4)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry/3, 0, flagHeightCountry/3)
                fill(color('rgba(255,0,0, 0.4)'));
                quad(0, flagHeightCountry/3, flagWidthCountry, flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, 0, 2*flagHeightCountry/3)
                fill(color('rgba(255,204,0, 0.4)'));
                quad(0, 2*flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, flagWidthCountry, 3*flagHeightCountry/3, 0, 3*flagHeightCountry/3)
            pop();
            
            // italy
            push();
                translate(0, 3*rowHeight)
                var flagWidthCountry = flagWidth + 1/2
                var flagHeightCountry = flagHeight * 1
                strokeWeight(0.5)
                stroke(220)
                noFill()
                rect(0, 0, flagWidthCountry, flagHeightCountry)
                noStroke()
                fill(color('rgba(0,140,69, 0.4)'));
                quad(0, 0, flagWidthCountry/3, 0, flagWidthCountry/3, flagHeightCountry, 0, flagHeightCountry)
                fill(color('rgba(240,240,240, 0.8)'));
                quad(flagWidthCountry/3, 0, flagWidthCountry*2/3, 0, flagWidthCountry*2/3, flagHeightCountry, flagWidthCountry/3, flagHeightCountry)
                fill(color('rgba(205,33,42, 0.4)'));
                quad(flagWidthCountry*2/3, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry, flagWidthCountry*2/3, flagHeightCountry)
            pop();
            
            // germany
            push();
                translate(0, 4*rowHeight)
                var flagWidthCountry = flagWidth + 2/2
                var flagHeightCountry = flagHeight * 1.02
                strokeWeight(0.5)
                stroke(220)
                noFill()
                rect(0, 0, flagWidthCountry, flagHeightCountry)
                noStroke()
                fill(color('rgba(0,0,0, 0.4)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry/3, 0, flagHeightCountry/3)
                fill(color('rgba(255,0,0, 0.4)'));
                quad(0, flagHeightCountry/3, flagWidthCountry, flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, 0, 2*flagHeightCountry/3)
                fill(color('rgba(255,204,0, 0.4)'));
                quad(0, 2*flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, flagWidthCountry, flagHeightCountry, 0, flagHeightCountry)
            pop();
            
            // canada
            push();
                translate(0, 5*rowHeight)
                var flagWidthCountry = flagWidth + 3/2
                var flagHeightCountry = flagHeight * 1.04
                strokeWeight(0.5)
                stroke(220)
                noFill()
                rect(0, 0, flagWidthCountry, flagHeightCountry)
                noStroke()
                fill(color('rgba(255,0,0, 0.4)'));
                quad(0, 0, flagWidthCountry/4, 0, flagWidthCountry/4, flagHeightCountry, 0, flagHeightCountry)
                fill(color('rgba(240,240,240, 0.8)'));
                quad(flagWidthCountry/4, 0, flagWidthCountry*3/4, 0, flagWidthCountry*3/4, flagHeightCountry, flagWidthCountry*1/4, flagHeightCountry)
                fill(color('rgba(255,0,0, 0.4)'));
                quad(flagWidthCountry*3/4, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry, flagWidthCountry*3/4, flagHeightCountry)
                fill(color('rgba(200,0,0, 0.4)'));
                    push();
                        translate(flagWidthCountry/2, flagHeightCountry*2/3)
                        beginShape()
                            vertex(-flagWidthCountry/60, -flagHeightCountry/20)
                            vertex(-flagWidthCountry/8, 0)
                            vertex(-flagWidthCountry/6, -flagHeightCountry/8)
                            vertex(-flagWidthCountry/8, -flagHeightCountry/8*2)
                            vertex(-flagWidthCountry/20, -flagHeightCountry/8*2+flagWidthCountry/60)
                            
                            vertex(-flagWidthCountry/16, -flagHeightCountry/3)
                            vertex(0, -flagHeightCountry/3-flagWidthCountry/8)
                            vertex(flagWidthCountry/16, -flagHeightCountry/3)
                            
                            vertex(flagWidthCountry/20, -flagHeightCountry/8*2+flagWidthCountry/60)
                            vertex(flagWidthCountry/8, -flagHeightCountry/8*2)
                            vertex(flagWidthCountry/6, -flagHeightCountry/8)
                            vertex(flagWidthCountry/8, -flagHeightCountry/30)
                            
                            vertex(flagWidthCountry/60, -flagHeightCountry/20)
                            vertex(flagWidthCountry/60, flagHeightCountry/6)
                            vertex(-flagWidthCountry/60, flagHeightCountry/6)
                        endShape()
                    pop();
            pop();
            
            // italy
            push();
                translate(0, 6*rowHeight)
                var flagWidthCountry = flagWidth + 4/2
                var flagHeightCountry = flagHeight * 1.06
                strokeWeight(0.5)
                stroke(220)
                noFill()
                rect(0, 0, flagWidthCountry, flagHeightCountry)
                noStroke()
                fill(color('rgba(0,140,69, 0.4)'));
                quad(0, 0, flagWidthCountry/3, 0, flagWidthCountry/3, flagHeightCountry, 0, flagHeightCountry)
                fill(color('rgba(240,240,240, 0.8)'));
                quad(flagWidthCountry/3, 0, flagWidthCountry*2/3, 0, flagWidthCountry*2/3, flagHeightCountry, flagWidthCountry/3, flagHeightCountry)
                fill(color('rgba(205,33,42, 0.4)'));
                quad(flagWidthCountry*2/3, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry, flagWidthCountry*2/3, flagHeightCountry)
            pop();
            
            // russia
            push();
                translate(0, 7*rowHeight)
                var flagWidthCountry = flagWidth + 5/2
                var flagHeightCountry = flagHeight * 1.08
                strokeWeight(0.5)
                stroke(220)
                noFill()
                rect(0, 0, flagWidthCountry, flagHeightCountry)
                noStroke()
                fill(color('rgba(240,240,240, 0.8)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry/3, 0, flagHeightCountry/3)
                fill(color('rgba(0,57,166, 0.4)'));
                quad(0, flagHeightCountry/3, flagWidthCountry, flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, 0, 2*flagHeightCountry/3)
                fill(color('rgba(213,43,30, 0.4)'));
                quad(0, 2*flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, flagWidthCountry, flagHeightCountry, 0, flagHeightCountry)
            pop();
        pop();
    }



    //////////////////// moving line ////////////////////
    fill(color('rgba(38, 21, 255, 0.1)'));
    if(frameCount > startFlash[0]+30 & frameCount < endFlash[0]-20 ||
        frameCount > startFlash[1]+30 & frameCount < endFlash[1]-20 ||
        frameCount > startFlash[2]+30 & frameCount < endFlash[2]-20 ||
        frameCount > startFlash[3]+30 & frameCount < endFlash[3]-20) {
        noStroke();
        quad((DG[frameCount]+CM[frameCount]+JL[frameCount]+DF[frameCount]+FL[frameCount]+SE[frameCount]+KF[frameCount]+RR[frameCount])/8 + distanceToStart + 8*laneOffset,   startHeight,
            (DG[frameCount]+CM[frameCount]+JL[frameCount]+DF[frameCount]+FL[frameCount]+SE[frameCount]+KF[frameCount]+RR[frameCount])/8 + distanceToStart + 8*laneOffset + movingLineThickness, startHeight,
            (DG[frameCount]+CM[frameCount]+JL[frameCount]+DF[frameCount]+FL[frameCount]+SE[frameCount]+KF[frameCount]+RR[frameCount])/8 + distanceToStart + movingLineThickness*perspectiveFactor, startHeight + 8 * rowHeight,
            (DG[frameCount]+CM[frameCount]+JL[frameCount]+DF[frameCount]+FL[frameCount]+SE[frameCount]+KF[frameCount]+RR[frameCount])/8 + distanceToStart, startHeight + 8 * rowHeight)
    }



    //////////////////// 7 thin horizontal lines per run ////////////////////
    stroke(100);
    strokeWeight(1);
    for (i = 0; i < 4; i++) {
        for (j = 1; j < 8; j++) {
            line(beginnings[i] + 8 * laneOffset - j * laneOffset - startLineThickness, startHeight + j * rowHeight, ends[i] + 8 * laneOffset - j * laneOffset + startLineThickness + stopLineThickness, startHeight + j * rowHeight)
        }
    }
    
    
    
    //////////////////// athlete names first, second, third text and flags at end of run ////////////////////
    textFont("Noto Sans");
    textStyle(ITALIC);
    textAlign(LEFT);
    fill(color('rgba(38, 21, 255, 0.25)'));
    noStroke();
    textAlign(RIGHT);
    // at end of run 1
    var e = 0
    if(frameCount >= endFlash[e] && frameCount <= (endFlash[e]+20) || frameCount >= (endFlash[e]+40)) {
        textAlign(RIGHT);
        var l = 0
        textSize(rowHeight / 3 + l/1.5);
        fill(color('rgba(218, 165, 32, 0.6)')); 
        text(names[l], ends[e] + 90 - l * laneOffset - 75 - l, startHeight + l * rowHeight + rowHeight * 2 / 3)
        var l = 4
        textSize(rowHeight / 3 + l/1.5);
        fill(color('rgba(100, 100, 100, 0.6)'));
        text(names[l], ends[e] + 90 - l * laneOffset - 75 - l, startHeight + l * rowHeight + rowHeight * 2 / 3)
        var l = 2
        textSize(rowHeight / 3 + l/1.5);
        fill(color('rgba(160, 82, 45, 0.6)'));
        text(names[l], ends[e] + 90 - l * laneOffset - 75 - l, startHeight + l * rowHeight + rowHeight * 2 / 3)
        push();
            translate(ends[e] + 30, startHeight + 0.14*rowHeight)
            shearX(-16.3);
        
            // austria
            push();
                translate(0, 0*rowHeight)
                var flagWidthCountry = flagWidth - 2/2
                var flagHeightCountry = flagHeight * 0.96
                noStroke()
                fill(color('rgba(237,41,57, 0.3)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry/3, 0, flagHeightCountry/3)
                fill(color('rgba(240,240,240, 0.3)'));
                quad(0, flagHeightCountry/3, flagWidthCountry, flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, 0, 2*flagHeightCountry/3)
                fill(color('rgba(237,41,57, 0.3)'));
                quad(0, 2*flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, flagWidthCountry, 3*flagHeightCountry/3, 0, 3*flagHeightCountry/3)
            pop();
            // germany
            push();
                translate(0, 4*rowHeight)
                var flagWidthCountry = flagWidth + 2/2
                var flagHeightCountry = flagHeight * 1.02
                noStroke()
                fill(color('rgba(0,0,0, 0.3)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry/3, 0, flagHeightCountry/3)
                fill(color('rgba(255,0,0, 0.3)'));
                quad(0, flagHeightCountry/3, flagWidthCountry, flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, 0, 2*flagHeightCountry/3)
                fill(color('rgba(255,204,0, 0.3)'));
                quad(0, 2*flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, flagWidthCountry, flagHeightCountry, 0, flagHeightCountry)
            pop();
            // germany
            push();
                translate(0, 2*rowHeight)
                var flagWidthCountry = flagWidth + 0/2
                var flagHeightCountry = flagHeight * 0.98
                noStroke()
                fill(color('rgba(0,0,0, 0.3)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry/3, 0, flagHeightCountry/3)
                fill(color('rgba(255,0,0, 0.3)'));
                quad(0, flagHeightCountry/3, flagWidthCountry, flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, 0, 2*flagHeightCountry/3)
                fill(color('rgba(255,204,0, 0.3)'));
                quad(0, 2*flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, flagWidthCountry, 3*flagHeightCountry/3, 0, 3*flagHeightCountry/3)
            pop();
        pop();
    }
    // at end of run 2
    var e = 1
    if(frameCount >= endFlash[e] && frameCount <= (endFlash[e]+20) || frameCount >= (endFlash[e]+40)) {
        textAlign(RIGHT);
        var l = 4
        textSize(rowHeight / 3 + l/1.5);
        fill(color('rgba(218, 165, 32, 0.6)'));
        text(names[l], ends[e] + 90 - l * laneOffset - 75 - l, startHeight + l * rowHeight + rowHeight * 2 / 3)
        var l = 0
        textSize(rowHeight / 3 + l/1.5);
        fill(color('rgba(100, 100, 100, 0.6)'));
        text(names[l], ends[e] + 90 - l * laneOffset - 75 - l, startHeight + l * rowHeight + rowHeight * 2 / 3)
        var l = 7
        textSize(rowHeight / 3 + l/1.5);
        fill(color('rgba(160, 82, 45, 0.6)'));
        text(names[l], ends[e] + 90 - l * laneOffset - 75 - l, startHeight + l * rowHeight + rowHeight * 2 / 3)
        push();
            translate(ends[e] + 30, startHeight + 0.16*rowHeight)
            shearX(-16.3);
            
            // germany
            push();
                translate(0, 4*rowHeight)
                var flagWidthCountry = flagWidth + 2/2
                var flagHeightCountry = flagHeight * 1.02
                noStroke()
                fill(color('rgba(0,0,0, 0.3)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry/3, 0, flagHeightCountry/3)
                fill(color('rgba(255,0,0, 0.3)'));
                quad(0, flagHeightCountry/3, flagWidthCountry, flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, 0, 2*flagHeightCountry/3)
                fill(color('rgba(255,204,0, 0.3)'));
                quad(0, 2*flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, flagWidthCountry, flagHeightCountry, 0, flagHeightCountry)
            pop();
            // austria
            push();
                translate(0, 0*rowHeight)
                var flagWidthCountry = flagWidth - 2/2
                var flagHeightCountry = flagHeight * 0.96
                noStroke()
                fill(color('rgba(237,41,57, 0.3)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry/3, 0, flagHeightCountry/3)
                fill(color('rgba(240,240,240, 0.3)'));
                quad(0, flagHeightCountry/3, flagWidthCountry, flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, 0, 2*flagHeightCountry/3)
                fill(color('rgba(237,41,57, 0.3)'));
                quad(0, 2*flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, flagWidthCountry, 3*flagHeightCountry/3, 0, 3*flagHeightCountry/3)
            pop();
            // russia
            push();
                translate(0, 7*rowHeight)
                var flagWidthCountry = flagWidth + 5/2
                var flagHeightCountry = flagHeight * 1.08
                noStroke()
                fill(color('rgba(240,240,240, 0.3)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry/3, 0, flagHeightCountry/3)
                fill(color('rgba(0,57,166, 0.3)'));
                quad(0, flagHeightCountry/3, flagWidthCountry, flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, 0, 2*flagHeightCountry/3)
                fill(color('rgba(213,43,30, 0.3)'));
                quad(0, 2*flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, flagWidthCountry, flagHeightCountry, 0, flagHeightCountry)
            pop();
        pop();
    }
    
    // at end of run 3
    var e = 2
    if(frameCount >= endFlash[e] && frameCount <= (endFlash[e]+20) || frameCount >= (endFlash[e]+40)) {
        textAlign(RIGHT);
        var l = 4
        textSize(rowHeight / 3 + l/1.5);
        fill(color('rgba(218, 165, 32, 0.6)'));
        text(names[l], ends[e] + 90 - l * laneOffset - 75 - l, startHeight + l * rowHeight + rowHeight * 2 / 3)
        var l = 1
        textSize(rowHeight / 3 + l/1.5);
        fill(color('rgba(100, 100, 100, 0.6)'));
        text(names[l], ends[e] + 90 - l * laneOffset - 75 - l, startHeight + l * rowHeight + rowHeight * 2 / 3)
        var l = 0
        textSize(rowHeight / 3 + l/1.5);
        fill(color('rgba(160, 82, 45, 0.6)'));
        text(names[l], ends[e] + 90 - l * laneOffset - 75 - l, startHeight + l * rowHeight + rowHeight * 2 / 3)
        push();
            translate(ends[e] + 30, startHeight + 0.16*rowHeight)
            shearX(-16.3);
            
            // germany
            push();
                translate(0, 4*rowHeight)
                var flagWidthCountry = flagWidth + 2/2
                var flagHeightCountry = flagHeight * 1.02
                noStroke()
                fill(color('rgba(0,0,0, 0.3)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry/3, 0, flagHeightCountry/3)
                fill(color('rgba(255,0,0, 0.3)'));
                quad(0, flagHeightCountry/3, flagWidthCountry, flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, 0, 2*flagHeightCountry/3)
                fill(color('rgba(255,204,0, 0.3)'));
                quad(0, 2*flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, flagWidthCountry, flagHeightCountry, 0, flagHeightCountry)
            pop();
            // usa
            push();
                translate(0, 1*rowHeight)
                var flagWidthCountry = flagWidth - 1/2
                var flagHeightCountry = flagHeight * 0.97
                noStroke()
                fill(color('rgba(191, 10, 48, 0.3)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry, 0, flagHeightCountry)
                for(var k = 1; k < 12; k += 2) {
                    fill(color('rgba(240,240,240, 0.2)'));
                    quad(0, flagHeightCountry/13*k, flagWidthCountry, flagHeightCountry/13*k, flagWidthCountry, flagHeightCountry/13*(k+1), 0, flagHeightCountry/13*(k+1))
                }
                fill(color('rgba(0, 40, 104, 0.3)'));
                quad(0, 0, flagWidthCountry*10.4/26, 0, flagWidthCountry*10.4/26, flagHeightCountry*7/13, 0, flagHeightCountry*7/13)
                fill(color('rgba(240,240,240, 0.3)'));
                for(let m = 0; m < 7; m++) {
                    for(let n = 0; n < 5; n++) {
                        x = (flagWidthCountry*10.4/26)/8 + (flagWidthCountry*10.4/26)/8 * m
                        y = (flagHeightCountry*7/13)/6 + (flagHeightCountry*7/13)/6 * n
                        ellipse(x, y, 1, 1)
                    }
                }
            pop();
            // austria
            push();
                translate(0, 0*rowHeight)
                var flagWidthCountry = flagWidth - 2/2
                var flagHeightCountry = flagHeight * 0.96
                noStroke()
                fill(color('rgba(237,41,57, 0.3)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry/3, 0, flagHeightCountry/3)
                fill(color('rgba(240,240,240, 0.3)'));
                quad(0, flagHeightCountry/3, flagWidthCountry, flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, 0, 2*flagHeightCountry/3)
                fill(color('rgba(237,41,57, 0.3)'));
                quad(0, 2*flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, flagWidthCountry, 3*flagHeightCountry/3, 0, 3*flagHeightCountry/3)
            pop();
        pop();
    }

    // at end of run 4
    var e = 3
    if(frameCount >= endFlash[e] && frameCount <= (endFlash[e]+20) || frameCount >= (endFlash[e]+40)) {
        textAlign(RIGHT);
        var l = 0
        textSize(rowHeight / 3 + l/1.5);
        fill(color('rgba(218, 165, 32, 0.8)'));
        text(names[l], ends[e] + 90 - l * laneOffset - 75 - l, startHeight + l * rowHeight + rowHeight * 2 / 3)
        var l = 1
        textSize(rowHeight / 3 + l/1.5);
        fill(color('rgba(100, 100, 100, 0.8)'));
        text(names[l], ends[e] + 90 - l * laneOffset - 75 - l, startHeight + l * rowHeight + rowHeight * 2 / 3)
        var l = 2
        textSize(rowHeight / 3 + l/1.5);
        fill(color('rgba(160, 82, 45, 0.8)'));
        text(names[l], ends[e] + 90 - l * laneOffset - 75 - l, startHeight + l * rowHeight + rowHeight * 2 / 3)
        push();
            translate(ends[e] + 30, startHeight + 0.16*rowHeight)
            shearX(-16.3);
            
            // austria
            push();
                translate(0, 0*rowHeight)
                var flagWidthCountry = flagWidth - 2/2
                var flagHeightCountry = flagHeight * 0.96
                noStroke()
                fill(color('rgba(237,41,57, 0.3)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry/3, 0, flagHeightCountry/3)
                fill(color('rgba(240,240,240, 0.3)'));
                quad(0, flagHeightCountry/3, flagWidthCountry, flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, 0, 2*flagHeightCountry/3)
                fill(color('rgba(237,41,57, 0.3)'));
                quad(0, 2*flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, flagWidthCountry, 3*flagHeightCountry/3, 0, 3*flagHeightCountry/3)
            pop();
            // usa
            push();
                translate(0, 1*rowHeight)
                var flagWidthCountry = flagWidth - 1/2
                var flagHeightCountry = flagHeight * 0.97
                noStroke()
                fill(color('rgba(191, 10, 48, 0.3)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry, 0, flagHeightCountry)
                for(var k = 1; k < 12; k += 2) {
                    fill(color('rgba(240,240,240, 0.2)'));
                    quad(0, flagHeightCountry/13*k, flagWidthCountry, flagHeightCountry/13*k, flagWidthCountry, flagHeightCountry/13*(k+1), 0, flagHeightCountry/13*(k+1))
                }
                fill(color('rgba(0, 40, 104, 0.3)'));
                quad(0, 0, flagWidthCountry*10.4/26, 0, flagWidthCountry*10.4/26, flagHeightCountry*7/13, 0, flagHeightCountry*7/13)
                fill(color('rgba(240,240,240, 0.3)'));
                for(let m = 0; m < 7; m++) {
                    for(let n = 0; n < 5; n++) {
                        x = (flagWidthCountry*10.4/26)/8 + (flagWidthCountry*10.4/26)/8 * m
                        y = (flagHeightCountry*7/13)/6 + (flagHeightCountry*7/13)/6 * n
                        ellipse(x, y, 1, 1)
                    }
                }
            pop();
            // germany
            push();
                translate(0, 2*rowHeight)
                var flagWidthCountry = flagWidth + 0/2
                var flagHeightCountry = flagHeight * 0.98
                noStroke()
                fill(color('rgba(0,0,0, 0.3)'));
                quad(0, 0, flagWidthCountry, 0, flagWidthCountry, flagHeightCountry/3, 0, flagHeightCountry/3)
                fill(color('rgba(255,0,0, 0.3)'));
                quad(0, flagHeightCountry/3, flagWidthCountry, flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, 0, 2*flagHeightCountry/3)
                fill(color('rgba(255,204,0, 0.3)'));
                quad(0, 2*flagHeightCountry/3, flagWidthCountry, 2*flagHeightCountry/3, flagWidthCountry, 3*flagHeightCountry/3, 0, 3*flagHeightCountry/3)
            pop();
        pop();
    }
       


    //////////////////// luge sleds, thin ice patch, spray ////////////////////
       for (i = 0; i < data.length; i++) {
            var ellipseWidth = 8 + i/5
            var ellipseheight = 4 + i/5
            var head = 6 + i/8
            noStroke();
            // thin ice patch
            if(frameCount<3254) {
                fill(color('rgba(255, 255, 255, 0.1)'));
                rect(distanceToStart + 8 * laneOffset - i * laneOffset - 1.5*ellipseWidth, startHeight+i*rowHeight + rowHeight/2 - ellipseheight/2, data[i][frameCount], ellipseheight)
            }
            else {
                fill(color('rgba(255, 255, 255, 0.1)'));
                rect(distanceToStart + 8 * laneOffset - i * laneOffset - 1.5*ellipseWidth, startHeight+i*rowHeight + rowHeight/2 - ellipseheight/2, data[i][3254], ellipseheight)
            }
            // spray
            for(k = 0; k < 25; k++) {
                x = data[i][frameCount] + distanceToStart + 8 * laneOffset - i * laneOffset - random(ellipseWidth,2*ellipseWidth)
                y =  startHeight+i*rowHeight + rowHeight/3 + random(10)
                noStroke();
                fill(color('rgba(240,240,240, 0.5)'));
                ellipse(x, y, 1, 1)
            }
            // luge sled
            push();
                if(frameCount<3254) {
                    translate(data[i][frameCount] + distanceToStart + 8 * laneOffset - i * laneOffset - ellipseWidth/1.5 + i/10, startHeight + i * rowHeight + rowHeight / 2)
                    fill(50);
                    noStroke()
                    ellipse(-ellipseWidth/1.5, -rowHeight/5, head/2.9, head)
                    stroke(50)
                    strokeWeight(4)
                    line(-ellipseWidth/2+1.5, -5, 0, -4)
                    stroke(50)
                    strokeWeight(2)
                    line(-ellipseWidth/2+0.5, 0, -0.5, 0)
                }
                else {
                    translate(data[i][3254] + distanceToStart + 8 * laneOffset - i * laneOffset - ellipseWidth/1.5 + i/10, startHeight + i * rowHeight + rowHeight / 2)
                    fill(50);
                    noStroke()
                    ellipse(-ellipseWidth/1.5, -rowHeight/5, head/2.9, head)
                    stroke(50)
                    strokeWeight(4)
                    line(-ellipseWidth/2+1.5, -5, 0, -4)
                    stroke(50)
                    strokeWeight(2)
                    line(-ellipseWidth/2+0.5, 0, -0.5, 0)
                }
            pop();
            
    } 
}



