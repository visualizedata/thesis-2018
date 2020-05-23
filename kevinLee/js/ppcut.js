var margin = {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
},
width = 980, // screenshot size 1037x436
height = 250;

var barHeight = 20; // 16 at a minimum

//var part1half1URL = "testdata.json";
var ironman_0to10 = "data-10min/ironman_0-10.json";
var ironman_10to20 = "data-10min/ironman_10-20.json";
var ironman_20to30 = "data-10min/ironman_20-30.json";
var ironman_30to40 = "data-10min/ironman_30-40.json";
var ironman_40to50 = "data-10min/ironman_40-50.json";
var ironman_50to60 = "data-10min/ironman_50-60.json";
var ironman_60to70 = "data-10min/ironman_60-70.json";
var ironman_70to80 = "data-10min/ironman_70-80.json";
var ironman_80to90 = "data-10min/ironman_80-90.json";
var ironman_90to100 = "data-10min/ironman_90-100.json";
var ironman_100to110 = "data-10min/ironman_100-110.json";
var ironman_110to120 = "data-10min/ironman_110-120.json";

var clips = ["clips/im-1.mp4","clips/im-2.mp4","clips/im-3.mp4","clips/im-4.mp4","clips/im-5.mp4",
"clips/im-6.mp4","clips/im-7.mp4","clips/im-8.mp4","clips/im-9.mp4","clips/im-10.mp4"];

var screens = ["images/screens/im-1.png","images/screens/im-2.png","images/screens/im-3.png","images/screens/im-4.png",
"images/screens/im-5.png","images/screens/im-6.png","images/screens/im-7.png","images/screens/im-8.png",
"images/screens/im-9.png","images/screens/im-10.png"]; 

// var datatest = [
//     {
//         "time": "00:04:00",
//         "duration": "00:00:01",
//         "visibility": "subtle"
// },
// {
//         "time": "00:20:02",
//         "duration": "00:00:05",
//         "visibility": "discreet"
// },
// {
//         "time": "00:20:01",
//         "duration": "00:01:05",
//         "visibility": "closeup"
// },
// {
//         "time": "00:1:01",
//         "duration": "00:00:07",
//         "visibility": "obvious"
// }];

// The last entry
// var last = null;
// var last_data2 = null;
// var last_data3 = null;
// var last_data4 = null;

// Record overlaps
var lastOneOverlapped = 0; // The offset amount multiple by barHeight to vertically shift the y position if last one overlapped
var mostTimesOverlapped = 0; // To get the max height of chart after vertically stacking multiple events
var lastOneOverlapped_data2 = 0; 
var mostTimesOverlapped_data2 = 0;
var lastOneOverlapped_data3 = 0; 
var mostTimesOverlapped_data3 = 0;
var lastOneOverlapped_data4 = 0; 
var mostTimesOverlapped_data4 = 0;

// Setup the date for time scale to start at 0 (midnight to get the d3 scale to start from 0)
var today = new Date();
today.setHours(0, 0, 0, 0);
var todayMillis = today.getTime();
var today2 = new Date();
today2.setHours(0, 0, 0, 0);
var todayMillis2 = today2.getTime();
var today3 = new Date();
today3.setHours(0, 0, 0, 0);
var todayMillis3 = today3.getTime();
var today4 = new Date();
today4.setHours(0, 0, 0, 0);
var todayMillis4 = today4.getTime();

var tickLabels1 = ['start', '10m'];
var tickLabels2 = ['10m', '20m'];
var tickLabels3 = ['20m', '30m'];
var tickLabels4 = ['30m', '40m'];
var tickLabels5 = ['40m', '50m'];
var tickLabels6 = ['50m', '1h'];
var tickLabels7 = ['1h', '1h10m'];
var tickLabels8 = ['1h10m', '1h20m'];
var tickLabels9 = ['1h20m', '1h30m'];
var tickLabels10 = ['1h30m', '1h40m'];
var tickLabels11 = ['1h40m', '1h50m'];
var tickLabels12 = ['1h50m', 'end'];

// var tickLabels1 = ['start', '', '', '15m', '', '', '30m'];

// var tickLabels2 = ['30m', '', '', '45m', '', '', '1hr'];
// var tickLabels3 = ['1hr', '', '', '1hr15m', '', '', '1hr30m'];
// var tickLabels4 = ['1hr30m', '', '', '1hr45m', '', '', 'end'];

// Convert a time string ("hh:mm:ss") into seconds
function timeToSeconds(timeStr) {
  const parts  = timeStr.split(":")
  const hour = parseInt(parts[0] * 3600)
  const minutes = parseInt(parts[1] * 60)
  const seconds = parseInt(parts[2])

  return hour + minutes + seconds
}

function secondsToTime(seconds) {
  const tmp = new Date(null)
  tmp.setSeconds(seconds)
  return tmp.toISOString().substr(11, 8)
}

function extractTime(dateObj) {
    var theTime = dateObj.toString().split(" ");
    return theTime[4];
}

d3.json(ironman_0to10)
.on("progress", function() {
})
.get(function(error, root) {
      setTimeout(function() {
      buildChart(root, "chart1", "chart1_container", 2, 0, tickLabels1, 0, 1, "0-10m");
    //buildChart(root, "chart1", "chart1_container", 15, 0, tickLabels1, 0);
    }, 100)
});
d3.json(ironman_10to20)
.on("progress", function() {
})
.get(function(error, root) {
    setTimeout(function() {
    //buildChart(root, "chart2", "chart2_container", 300, 0);
    buildChart(root, "chart2", "chart2_container", 2, 0, tickLabels2, 200, 2, "10-20");
  }, 105)
});
d3.json(ironman_20to30)
.on("progress", function() {
})
.get(function(error, root) {
    setTimeout(function() {
    buildChart(root, "chart3", "chart3_container", 2, 0, tickLabels3, 400, 3, "20-30");
  }, 110)
});
d3.json(ironman_30to40)
.on("progress", function() {
})
.get(function(error, root) {
    setTimeout(function() {
    //buildChart(root, "chart4", "chart4_container", 300, 0);
    buildChart(root, "chart4", "chart4_container", 2, 0, tickLabels4, 600, 4, "30-40");
  }, 115)
});
d3.json(ironman_40to50)
.on("progress", function() {
})
.get(function(error, root) {
    setTimeout(function() {
    //buildChart(root, "chart4", "chart4_container", 300, 0);
    console.log("before")
    buildChart(root, "chart5", "chart5_container", 2, 0, tickLabels5, 800, 5, "40-50");
    console.log("after")
  }, 120)
});
d3.json(ironman_50to60)
.on("progress", function() {
})
.get(function(error, root) {
    setTimeout(function() {
    //buildChart(root, "chart4", "chart4_container", 300, 0);
    buildChart(root, "chart6", "chart6_container", 2, 0, tickLabels6, 1000, 6, "50-60");
  }, 125)
});
d3.json(ironman_60to70)
.on("progress", function() {
})
.get(function(error, root) {
    setTimeout(function() {
    //buildChart(root, "chart4", "chart4_container", 300, 0);
    buildChart(root, "chart7", "chart7_container", 2, 0, tickLabels7, 1200, 7, "60-70");
  }, 130)
});
d3.json(ironman_70to80)
.on("progress", function() {
})
.get(function(error, root) {
    setTimeout(function() {
    //buildChart(root, "chart4", "chart4_container", 300, 0);
    buildChart(root, "chart8", "chart8_container", 2, 0, tickLabels8, 1400, 8, "70-80");
    }, 135)
});
d3.json(ironman_80to90)
.on("progress", function() {
})
.get(function(error, root) {
    setTimeout(function() {
    //buildChart(root, "chart4", "chart4_container", 300, 0);
    buildChart(root, "chart9", "chart9_container", 2, 0, tickLabels9, 1600, 9, "80-90");
  }, 140)
});
d3.json(ironman_90to100)
.on("progress", function() {
})
.get(function(error, root) {
    setTimeout(function() {
    //buildChart(root, "chart4", "chart4_container", 300, 0);
    buildChart(root, "chart10", "chart10_container", 2, 0, tickLabels10, 1800, 10, "90-100");
  }, 145)
});
d3.json(ironman_100to110)
.on("progress", function() {
})
.get(function(error, root) {
    setTimeout(function() {
    //buildChart(root, "chart4", "chart4_container", 300, 0);
    buildChart(root, "chart11", "chart11_container", 2, 0, tickLabels11, 2000, 11, "100-110");
  }, 150)
});
d3.json(ironman_110to120)
.on("progress", function() {
})
.get(function(error, root) {
    setTimeout(function() {
    //buildChart(root, "chart4", "chart4_container", 300, 0);
    buildChart(root, "chart12", "chart12_container", 2, 0, tickLabels12, 2200, 12, "110-120");
  }, 155)
});

function buildChart(data, chart, container, step, rangeStart, tickLabels, overlapIDStartNum, pageNum, pageTitle) {

    // Sort data by start time and visValue where 
    data.sort(function (a, b) {
        if(timeToSeconds(a.time) > timeToSeconds(b.time)) return 1; //&& a.visValue > b.visValue) return 1;
        if(timeToSeconds(a.time) < timeToSeconds(b.time)) return -1; //&& a.visValue < b.visValue) return -1;
        return 0;
    });

    // data.sort(function (a, b) {
    //     if(a.overlap && b.overlap && a.visValue < b.visValue) return 1;
    //     if(a.overlap && b.overlap && a.visValue > b.visValue) return -1;
    //     return 0;
    // });

    // Calculate the end time
    data.map(item => {
      item.end = secondsToTime(parseInt(timeToSeconds(item.time) + timeToSeconds(item.duration)))
    })

    // Go through data and calculate overlaps and group overlaps together with same ID number to get them later
    var last = null;
    var overlapID = overlapIDStartNum;
    data.forEach(function(current) {
      if (last && current.time <= last.end) {
        current.overlap = true;
        last.overlap = true;
        current.overlapID = overlapID;
        last.overlapID = overlapID;
      }
      else {
        //console.log("current.time is " + current.time + ", last.end is "); // last.end is null here and breaks everything
        current.overlap = false;
        overlapID++;
      }
      last = current;
    });

    // Go through data and calculate visibility values
    data.forEach(function(current) {
        var value = 20;
        //console.log(current.type);
        if (current.type != "mention") {
            if (current.visibility == "discreet")
                current.visValue = value * 1;
            else if (current.visibility == "background")
                current.visValue = value * 2;
            else if (current.visibility == "subtle")
                current.visValue = value * 3;
            else if (current.visibility == "obvious")
                current.visValue = value * 4;
            else if (current.visibility == "close-up")
                current.visValue = value * 5;
        }
        else {
            current.visValue = -20; // works
        }
    });



//lodash stuff
//const _ = require('lodash');
//const _ = require('lodash');
// var data = [{"time": 5, "visValue":60, "overlap": true }, {"time": 2, "visValue":20, "overlap": true }, {"time": 7, "visValue":100, "overlap": false }, {"time": 1, "visValue":40, "overlap": true }, {"time": 9, "visValue":20, "overlap": false }, {"time": 11, "visValue":20, "overlap": false },{"time": 14, "visValue":20, "overlap": false },{"time": 15, "visValue":20, "overlap": false },{"time": 19, "visValue":20, "overlap": false },{"time": 22, "visValue":20, "overlap": false },{"time": 29, "visValue":20, "overlap": false },{"time": 30, "visValue":100, "overlap": true }, {"time": 32, "visValue":20, "overlap": true },{"time": 40, "visValue":40, "overlap": true }, {"time": 52, "visValue":20, "overlap": true },{"time": 53, "visValue":80, "overlap": false }];

  var counter = 0;
var foo = _.groupBy(data, (value) =>{
  var ret = counter + value.overlap.toString();
  // console.log(JSON.stringify(data))
  // console.log(ret)
  var curr = data.indexOf(value);
  if((curr !== data.length -1) && value.overlap !== data[curr+1].overlap) counter++;
  return ret;
  
});
Object.keys(foo).forEach((e) => {
  foo[e].sort(function (a, b) {
          if(a.visValue < b.visValue) {
            return 1;
        }
        else if(a.visValue > b.visValue) { 
            return -1;
        }
        return 0;
        });
});
var finalData = [];
Object.keys(foo).forEach((e) => {
  //console.log(foo[e])
  finalData.push(foo[e])
})
finalData =_.flatten(finalData);
//end lodash stuff

    finalData.forEach(function(d) {
        var parts = d.time.split(/:/);
        
        var timePeriodMillis = (parseInt(parts[0], 10) * 60 * 60 * 1000) +
                               (parseInt(parts[1], 10) * 60 * 1000) + 
                               (parseInt(parts[2], 10) * 1000);

        d.time = new Date();
        d.time.setTime(todayMillis + timePeriodMillis);
        
        var parts2 = d.duration.split(/:/);
        var timePeriodMillis2 = (parseInt(parts2[0], 10) * 60 * 60 * 1000) +
                               (parseInt(parts2[1], 10) * 60 * 1000) + 
                               (parseInt(parts2[2], 10) * 1000);
        
        d.duration = new Date();
        d.duration.setTime(todayMillis + timePeriodMillis2);
    });

    var x = d3.time.scale()
    .domain(d3.extent(finalData, function(d) { return d.time; }))
    .nice(d3.time.minute, step) /*very important to define time scale here. 5 won't allow any timestamp under 5min. 3600 gives one hour scale. */
    .rangeRound([rangeStart, width - margin.left - margin.right]);

    var y = d3.scale.linear()
    .domain([0, 100])
    .range([height - margin.top - margin.bottom, 0]);

    var xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom')
    .ticks(d3.time.minute, 10)
    //.tickFormat(d3.time.format('%M:%S'))
    .tickFormat(function(d,i){ return tickLabels[i] })
    .tickSize(0)
    .tickPadding(8);

    var yAxis = d3.svg.axis()
    .scale(y)
    .orient('left')
    .tickPadding(8)
    .tickFormat(function (d) {
        return ''
    });

    var svg = d3.select("#" + container).append('svg')
    .attr('id', chart)
    .attr('class', 'chart')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
    
    //console.log(finalData);


svg.append("text")
    .attr("x", -2)
    .attr("y", 5)
    .style("text-anchor", "right")
    .style("fill", "#cfcfcf")
    .style("font-size", "10px")
    .text("close-up");

svg.append("text")
    .attr("x", -2)
    .attr("y", 38)
    .style("text-anchor", "right")
    .style("fill", "#cfcfcf")
    .style("font-size", "10px")
    .text("obvious");

svg.append("text")
    .attr("x", -2)
    .attr("y", 73)
    .style("text-anchor", "right")
    .style("fill", "#cfcfcf")
    .style("font-size", "10px")
    .text("subtle");

svg.append("text")
    .attr("x", -2)
    .attr("y", 105)
    .style("text-anchor", "right")
    .style("fill", "#cfcfcf")
    .style("font-size", "10px")
    .text("background");

svg.append("text")
    .attr("x", -2)
    .attr("y", 140)
    .style("text-anchor", "right")
    .style("fill", "#cfcfcf")
    .style("font-size", "10px")
    .text("discreet");

// svg.append("g")
//     .append("line")
//     .attr("x1", 65)
//     .attr("y1", -33)
//     .attr("x2", 890)
//     .attr("y2", -33)
//     .attr("stroke", "#ccc")
//     .attr("stroke-dasharray", "1, 5");


    svg.append("g")
       //.attr("transform", "translate(0, "+y(5)+")")
       .append("line")
       .attr("x1", 65)
       .attr("y1", 0)
       .attr("x2", 890)
       .attr("y2",0)
       .style("stroke", "#d0d0d0")
       .style("stroke-width", "1px")
       .attr("stroke-dasharray", "1, 5");

          svg.append("g")
       //.attr("transform", "translate(0, "+y(5)+")")
       .append("line")
       .attr("x1", 65)
       .attr("y1", 34)
       .attr("x2", 890)
       .attr("y2", 34)
       .style("stroke", "#d0d0d0")
       .style("stroke-width", "1px")
       .attr("stroke-dasharray", "1, 5");

       //subtle
        svg.append("g")
       //.attr("transform", "translate(0, "+y(5)+")")
       .append("line")
       .attr("x1", 65)
       .attr("y1", 68)
       .attr("x2", 890)
       .attr("y2", 68)
       .style("stroke", "#d0d0d0")
       .style("stroke-width", "1px")
       .attr("stroke-dasharray", "1, 5");

        svg.append("g")
       //.attr("transform", "translate(0, "+y(5)+")")
       .append("line")
       .attr("x1", 65)
       .attr("y1", 102)
       .attr("x2", 890)
       .attr("y2", 102)
       .style("stroke", "#d0d0d0")
       .style("stroke-width", "1px")
       .attr("stroke-dasharray", "1, 5");

        svg.append("g")
       //.attr("transform", "translate(0, "+y(5)+")")
       .append("line")
       .attr("x1", 65)
       .attr("y1", 136)
       .attr("x2", 890)
       .attr("y2", 136)
       .style("stroke", "#d0d0d0")
       .style("stroke-width", "1px")
       .attr("stroke-dasharray", "1, 5");



var tooltipdot = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("background", "#000")
    .text("a simple tooltip");
var dot;
var mentionsList = [];
var node = svg.selectAll("#" + chart) // doesnt seem to matter what's in here
    .data(finalData)
    .enter().append('rect')
    .attr('class', function(d) {
        var catString = String(d.category);
        var cat = catString.split(' ')[0];
        var cat = cat.split(',')[0];
        if (d.overlap) {
            var overlapClass = "overlap" + d.overlapID;
            return "bar tooltip " + d.visibility + " " + cat + " " + overlapClass;
        }
        else {
            return "bar tooltip " + d.visibility + " " + cat;
        }
    })
    .attr('style','#tooltip_content')
    .attr('x', function (d) {
        return x(d.time);
    })
    .attr('y', function (d) {
        //console.log("time for y here is: " + d.time + ", returns: " + parseInt(height - margin.top - margin.bottom - (height - margin.top - margin.bottom - y(d.visValue))));
        if (d.type == "mention") {
            mentionsList.push(d);
            dot = svg.append("circle")
            //.data(data)
            //.enter().append("circle")
            .attr("cx", x(d.time))
            .attr("cy", 185)
            .attr("r", 5)
            .attr("class", function(dd) {
                var catString = String(d.category);
                var cat = catString.split(' ')[0];
                var cat = cat.split(',')[0];
                return "mentionDot " + cat;
            })
            .style("fill-opacity",1)
            .on('mouseover', function(dd){
                //d3.select(this).style({opacity:'0.8'})
                //d3.select("text").style({opacity:'1.0'});
                //tooltipdot.text(d.time);
                d3.select("#tooltipBar #brandName").text("");
                var character = d.character.split('-')[0];;
                d3.select("#tooltipBar #quote").text("\x22" + d.quote + "\x22 - " + d.actor);
                d3.select("#tooltipBar #catName").text(d.category);

                var theDur = timeToSeconds(extractTime(d.duration));//.toHHMMSS();
  
                //var visAndTime = "@ " + extractTime(d.realTime) + " for " + toHMS(theDur);// + ", overlapID: " + d.overlapID;
                var visAndTime = "@ " + d.realTime + " for " + toHMS(theDur);
                d3.select("#tooltipBar #visAndTime").text(visAndTime);

               //d3.select("#screen").text(d.quote);
               //$("#screen video").attr("src",clips[d.entryID-1]);
               //$("#screen video").attr("src",d.video2URL);
               //$("#screen img").attr("src",screens[d.entryID-1]);
               if (d.screenshot2URL != "")
                  $("#screen img").attr("src", d.screenshot2URL);
                else if (d.screenshotURL != "")
                  $("#screen img").attr("src", d.screenshotURL);

                var w = d3.select("#tooltipBar").style("width");
                var h = d3.select("#tooltipBar").attr("height");

                 // Get mouse position and then adjust tooltip position accordingly
                var containerNode = d3.select("#container").node();
                var absMousePos = d3.mouse(containerNode);

                if (absMousePos[0] > 1000) {
                    var xpos = absMousePos[0] - 200 - parseFloat(w) - 30;
                } else {
                    var xpos = absMousePos[0] + 10;
                }
                var h2 = $('#tooltipBar').height();

                if (absMousePos[1] > 1000) {
                    var ypos = absMousePos[1] + (715-h2);
                } else {
                    var ypos = absMousePos[1] + (715-h2);
                }

                d3.select("#tooltipBar")
                    .style("left", xpos + "px")
                    .style("top", ypos + "px");

                d3.select("#tooltipBar").classed("hidden", false);
                //return tooltipdot.style("visibility", "visible");

                d3.select(this)
                .transition()
                .duration(100)
                .attr('r',7)
            })
            .attr('stroke','transparent')
            .attr('stroke-width','5px')
            .on('mouseout', function(dd){
                //d3.select(this).style({opacity:'0.0',})
                //d3.select("text").style({opacity:'0.0'});
                d3.select("#tooltipBar").classed("hidden", true);
                //return tooltipdot.style("visibility", "hidden");

                d3.select(this)
                .transition()
                .duration(100)
                .attr('r', 5)
            })
            //.style("text-anchor", "middle")
            //.text("mention");

            return 0;
        }
        else
            return height - margin.top - margin.bottom - (height - margin.top - margin.bottom - y(d.visValue));
    })
    .style("stroke","transparent") // give stroke so hovering close to each bar triggers. hide the stroke so user doesnt see
    .style("stroke-width","1px") // give it a range beyond the bar size to trigger 
    .attr('height', function(d) { // used to be just returning barHeight
        return height - margin.top - margin.bottom - y(d.visValue);
    })//barHeight)
    .attr('width', function (d) {
        if (d.type == "mention")
            return 10;
        else
            return x(d.duration);
    });

    // Displays y and x axis lines
    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom) + ')')
        .call(xAxis);
    /*removed so y axis doesn't append
        svg.append('g')
         .attr('class', 'y axis')
         .call(yAxis);
    */

    // Mouseover stuff
    /*removed so console doesn't get polluted*/
    // node.on("mouseover", function(d) {
    //     var theTime = d.time.toTimeString().split(' ')[0] // as hh:mm:ss
    //     console.log("on, time: " + theTime + ", visibility: " + d.visibility + ", actor: " + d.actor + ", overlap: " + d.overlap +
    //         ", brand: " + d.brand + ", product: " + d.product + ", category: " + d.category + ", dur: " + parseInt(secondsToTime(d.duration)));
    //     d3.select("#screen").text(d.visibility);
    // })
    // .on("mouseout", function(d) {
    //     var theTime = d.time.toTimeString().split(' ')[0] // as hh:mm:ss
    //     console.log("off, time: " + theTime + ", visibility: " + d.visibility + ", character: " + d.character + ", overlap: " + d.overlap +
    //         ", brand: " + d.brand + ", product: " + d.product + ", category: " + d.category + ", dur: " + parseInt(secondsToTime(d.duration)));
    // });
    

    // lastOneOverlapped = 0;
    // mostTimesOverlapped = 0;
    // last = null;


    // dot.on("mouseover", function(d) {
    //     console.log("dot " + d.time);
    // })
    // .on("mousseout", function(d) {
    //     console.log("off dot");
    // })


    // Tooltip effects
        node.on("mouseover", function(d) {
                d3.select("#tooltipBar #quote").text("");
                d3.select("#tooltipBar #brandName").text(d.brand);// + ", " + d.category);
                d3.select("#tooltipBar #catName").text(d.category);

                var theDur = timeToSeconds(extractTime(d.duration));//.toHHMMSS();
                console.log(toHMS(theDur));

                //var visAndTime = d.visibility + " @ " + extractTime(d.realTime) + " for " + toHMS(theDur);// + ", overlapID: " + d.overlapID;
                var visAndTime = d.visibility + " @ " + d.realTime + " for " + toHMS(theDur);
                d3.select("#tooltipBar #visAndTime").text(visAndTime);

                //d3.select("#screen").text(d.visibility);
                //$("#screen video").attr("src",clips[d.entryID-1]);
                //$("#screen video").attr("src",d.video2URL);
                //$("#screen img").attr("src",screens[d.entryID-1]);
                //$("#screen img").attr("src",d.screenshot2URL);
                if (d.video2URL != "" && d.screenshot2URL != "")
                  $("#screen img").attr("src", d.screenshot2URL);
                else if (d.screenshotURL != "")
                  $("#screen img").attr("src", d.screenshotURL);

                var w = d3.select("#tooltipBar").style("width");
                var h = d3.select("#tooltipBar").attr("height");

                 // Get mouse position and then adjust tooltip position accordingly
                var containerNode = d3.select("#container").node();
                var absMousePos = d3.mouse(containerNode);

                if (absMousePos[0] > 700) {
                    var xpos = absMousePos[0] + 100 - parseFloat(w) - 30;
                } else {
                    var xpos = absMousePos[0] + 10;
                }

                if (absMousePos[1] > 100) {
                    var ypos = absMousePos[1] + 670;
                } else {
                    var ypos = absMousePos[1] + 670;
                }

                d3.select("#tooltipBar")
                    .style("left", xpos + "px")
                    .style("top", ypos + "px");

                // Display the tooltip
                d3.select("#tooltipBar").classed("hidden", false);
            })
        .on("mouseout", function(d) {
            // Hide the tooltip
            d3.select("#tooltipBar").classed("hidden", true);
        });

        // svg.append("g")
        //   .attr("class", "y axis")
        //   .call(yAxis)
        //   .append("text")
        //   //.attr("transform", "rotate(-90)")
        //   .attr("y", 6)
        //   .attr("dy", ".71em")
        //   .style("text-anchor", "end")
        //   .text("return time(ms)");

    //    svg.append("g")
    //    .attr("transform", "translate(0, "+y(0)+")")
    //    .append("line")
    //    .attr("x2", 200)
    //    .style("stroke", "#2ecc71")
    //    .style("stroke-width", "5px")

// svg.append("line")
//     //.append("line")
//     //.data(d3.range(10))
//   //.enter().append("line")
//     .attr("x1", 65)
//     .attr("y1", -33)
//     .attr("x2", 890)
//     .attr("y2", -33)
//     .attr("stroke", "#ccc")
//     .attr("stroke-dasharray", "1, 5");

// var line2 = svg.select("line")
//     //.data(d3.range(10))
//   //.enter().append("line")
//     .attr("x1", 65)
//     .attr("y1", -63)
//     .attr("x2", 890)
//     .attr("y2", -63)
//     .attr("stroke", "#ccc")
//     .attr("stroke-dasharray", "1, 5");

//$("#dot1").append("<b>Appended text</b>"); // works! does it 12 times though


  //call this after owl gets fully created
  setTimeout(function() {
    showMiniCharts(pageNum, pageTitle, data, mentionsList);
  }, 200)
  

  if($("div.pageTitle").length > 0) {
    console.log(pageNum + ", " + pageTitle);
  }

}

//create the mini charts for navigation which depend and attach onto the owl carousel
//probably needs a callback to wait for owl to be created fully first, then do this to attach to it.
function showMiniCharts(pageNum, pageTitle, data, mentionsList) {
  //console.log("showin charts")
//use jquery to append pageTitle here
$("#dot" + pageNum + " span").append("<div class='pageTitle'>" + pageTitle + "</div>");
console.log("dot" + pageNum + " span");
var canvas = d3.select("#dot" + pageNum + " span").append("svg").attr({width: 30, height: 100}).attr("style","z-index: -4;");

//onclick of svg, click the parent button
// $("#dot" + pageNum + " span svg").click(function(){
//     $("button#dot" + pageNum).click();
//     console.log(pageNum + " svg " + "button#dot" + pageNum);
// });
// $("#dot" + pageNum + " span svg rect").click(function(){
//     $("button#dot" + pageNum).click();
//     console.log(pageNum + " rect");
// });

//var values = [50, 90, 30]

//var colours = ['#FA0', '#0AF', '#AF0']

var dataset = []

var yOffset = 0

//Process the data

//works
data.sort(function(a,b) {
    if(a.category < b.category) return -1;
    if(a.category > b.category) return 1;
    return 0;
});

for(var i = 0; i < data.length; i++) {
    

    if (typeof data[i].category != 'undefined' && data[i].type != "mention" && data[i].type != "dummy") {// && (data[i].type == "sighting" || data[i].type == "Sighting")) {
        //console.log(data[i].type)
        //console.log("undef")
        var val = timeToSeconds(extractTime(data[i].duration));
        //console.log(data[i].category)
    
        var datum = {
            dur : val,
            cat : data[i].category,
            brand : data[i].brand,
            x: 0,
            y: yOffset,
        }
        yOffset += val;
    }
    //else
        //yOffset -= val;
    
    //yOffset += values[i]
    ////yOffset += val;

    dataset.push(datum)
        
}

//works
// dataset.sort(function(a,b) {
//     var aCatString = String(a.cat);
//     var aCat = aCatString.split(' ')[0];
//     var aCat = aCat.split(',')[0];

//     var bCatString = String(b.cat);
//     var bCat = bCatString.split(' ')[0];
//     var bCat = bCat.split(',')[0];

//     //console.log("sor" + aCat);
//     if(aCat < bCat) return -1;
//     if(aCat > bCat) return 1;
//     return 0;
// });
// dataset.sort(function(a,b) {
//     if(a.y<b.y) return -1;
//     if(a.y>b.y) return 1;
//     return 0;
// })

//console.log(dataset);

var lastBar;

var bars = canvas.selectAll('rect').data(dataset)

bars
    .enter()
    .append('rect')
    .attr({
        width : 30,
        height : function(d) {
            //console.log(d.dur);
            if (typeof d.dur != 'undefined' && d.type != "mention" && d.type != "dummy") {
            //if (data.type != "dummy") {
              //console.log("poiupoiu")
              return d.dur/9;
            }
            else {
              //console.log("asdfasdf")
              return 0;
            }
        },
        y : function(d) {
            lastBar = d.y/9;
            //if (typeof d.dur != 'undefined' && d.type != "mention" && d.type != "dummy") 
              return (d.y/9); // return 60-d.y/9
            //else
            //  return 0;
        }
    })
    .attr("class", function(d) {
        var catString = String(d.cat);
        var cat = catString.split(' ')[0];
        var cat = cat.split(',')[0];

        var brandString = String(d.brand);
        var brand = brandString.split(' ')[0];
        var brand = brand.split(',')[0];

        //return cat + " " + brand;
        return cat;
    })
    // .style({
    //     fill : function(d) {
    //         return d.colour
    //     }
    // })
    .on("click", function(){
        $("button#dot" + pageNum).click();
    })
    //.attr("style","z-index: -7;");

    //<circle cx="770" cy="185" r="5" class="establishment" style="fill-opacity: 1;"></circle>


//get mentions in nav
// var dataset_mentions = [];
// for(var i = 0; i < data.length; i++) {
    

//     if (typeof data[i].category != 'undefined' && data[i].type == "mention") {
//         //console.log(data[i].type)
//         //console.log("undef")
//         //console.log("type: " + data[i].type);
//         var val = timeToSeconds(extractTime(data[i].duration));
//         //console.log(data[i].category)
    
//         var datum = {
//             dur : val,
//             cat : data[i].category,
//             brand : data[i].brand,
//             type : data[i].type,
//             x: 0,
//             y: yOffset,
//         }
//         yOffset += val;
//     }
//     //else
//         //yOffset -= val;
    
//     //yOffset += values[i]
//     ////yOffset += val;
// //console.log(datum);
//     dataset_mentions.push(datum)
        
// }

// console.log(dataset_mentions);

var circ = canvas.selectAll('circle').data(mentionsList)

circ
    .enter()
    .append('circle')
            .attr("cx", 15)
            .attr("cy", lastBar + 13)
            .attr("r", 5)
            .attr("class", function(d) {
                console.log(d);
                var catString = String(d.cat);
                var cat = catString.split(' ')[0];
                var cat = cat.split(',')[0];
                return cat;
            })
            .style("fill","#D6D6D6")
            .style("fill-opacity",1)


//make it so clicking the pageTitle also clicks the button to change page
$("div.pageTitle").click(function(){
        $("button#dot" + pageNum).click();
    })

} //end showMiniCharts()


//takes seconds and returns a value of "3h 3m 8s", must set value to this like var val = asfd.toHHMMSS()
function toHMS(val) {
    var sec_num = parseInt(val, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    //if (hours   < 10) {hours   = "0"+hours;}
    //if (minutes < 10) {minutes = "0"+minutes;}
    //if (seconds < 10) {seconds = "0"+seconds;}
    
    
    var output = [];
    var hr = "";
    var min = "";
    var sec = "";
    
    if (hours != 0) {
        hr += hours;
      if (hours < 2)
        hr += "h";//" hr";
      else
        hr += "h";//" hrs";
        output.push(hr);
    }
    
    if (minutes != 0) {
        min += minutes;
      if (minutes < 2)
        min += "m";//" min";
      else
        min += "m";//" mins";
      output.push(min);
    }
      
    if (seconds != 0) {
        sec += seconds
      if (seconds < 2)
        sec += "s";//" sec";
      else
        sec += "s"//" sec";
      output.push(sec);
    }
    
    var formatted = "";
    
    for(var i = 0;i<output.length;i++) {
        formatted += output[i] + " ";//", ";
    }
    
    formatted = formatted.replace(/, $/, ''); // removes ", " (comma space) if it's at end of string
    
    return formatted;
    
}

//  $(document).ready(function(){
//     $('#container').slick({
//       dots: true
//       //speed: 500
//     });
// });


// $( document ).ready(function() {

//  });

// - split data into individual 00:00:00-00:30:00 sets
// - if event overlaps between sets, split it up (part in one set, part in next set)