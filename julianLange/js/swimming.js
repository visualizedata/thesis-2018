var selectedSwimDistance;
var selectedGender;
var selectedDistance;
var swimSVG;

$(document).ready(function() {
    selectedSwimDistance = $('#selectSwimDistance').val();
    // selectedGender = "men"
    // selectedDistance = 50
    drawSwimGraph();
    // console.log(selectedSwimDistance)
    // console.log(selectedGender);
    // console.log(selectedDistance);
});

$('#selectSwimDistance').change(function() {
    selectedSwimDistance = $('#selectSwimDistance').val();
    // selectedGender = selectedSwimDistance.substr(0, selectedSwimDistance.indexOf(' '));
    // selectedDistance = selectedSwimDistance.substr( selectedSwimDistance.indexOf(' ') + 1);
    drawSwimGraph();
    // console.log(selectedGender);
    // console.log(selectedDistance);
});

function drawSwimGraph() {

    // set the dimensions and margins of the graph
    var margin = { top: 100, right: 340, bottom: 100, left: 340 },
        width = 1380 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var colors = ['#225EA8', '#41B6C4', '#253494', '#8DC6A0'];
    var strokesShort = ["free", "fly", "back", "breast"]
    var strokes = ["freestyle", "butterfly", "backstroke", "breaststroke"]

    var eventArraySwim = [];
    var eventArraySwimIncludingNA = [];
    var i = 0;
    var j = 0;
    var a = 1;
    var s = 0;
    var p = 0;
    var y = 0;
    var years = [2003, 2005, 2007, 2009, 2011, 2013, 2015, 2017];
    var times;
    var min;
    var max;

    var y = d3.scaleBand()
        .range([0, height])
        .padding(0.1);
    var x = d3.scaleLinear()
        .range([0, width]);
    var color = d3.scaleOrdinal()
        .domain(["free", "fly", "back", "breast"])
        .range(colors);
    var strokes = d3.scaleOrdinal()
        .domain(["free", "fly", "back", "breast"])
        .range(strokes);

    d3.select(".swimSVGclass").remove();

    // append the svg object to the body of the page
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    swimSVG = d3.select("#swimSketch").append("svg")
        .attr("class", "swimSVGclass")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Define the div for the tooltip
    var div = d3.select("#swimSketch").append("div")
        .attr("class", "tooltipSwimming")
        .style("opacity", 0);

    // get the data
    d3.csv("data/swimmingData.csv", function(error, data) {
        if (error) throw error;

        // pulls out all 256 swim times for selected gender and distance
        // pulls out all 256 swim times for selected gender and distance except those with time = NA
        data.forEach(function(d) {
            if (d.genderDistance == selectedSwimDistance) {
                eventArraySwimIncludingNA[i++] = d;
            }
            if (d.genderDistance == selectedSwimDistance && d.time > 0) {
                eventArraySwim[j++] = d;
            }
        });

        // pull out min, max, year, and median for each of 32 events being shown
        // then create array to be used to plot medians and encompassing bars
        var subset;
        var subsetTimes = [];
        var subsetMin = [];
        var subsetMax = [];
        var subsetMedian = [];
        var subsetMean = [];
        var subsetYears = [];
        var subsetYear = [];
        var subsetStrokes = [];
        var subsetStroke = [];
        var plotArray = []
        var plotArrayLabels = [];
        for (let s = 0; s < 256; s += 8) {
            subset = eventArraySwimIncludingNA.slice(s, s + 8);
            subsetTimes = subset.map(a => a.time);
            for (let j = 0; j < 8; j++) { // these next few lines are to remove NAs prior to determining min, max, and median
                if (subsetTimes[j] == "NA") {
                    subsetTimes.pop()
                }
            };
            subsetMin.push(d3.min(subsetTimes));
            subsetMax.push(d3.max(subsetTimes));
            subsetMedian.push(d3.median(subsetTimes))
            subsetYears = subset.map(a => a.year);
            subsetYear.push(d3.mean(subsetYears))
            subsetStrokes = subset.map(a => a.stroke)
            subsetStroke.push(subsetStrokes[0])
        };
        for (let p = 0; p < 32; p++) {
            var tempLine = [];
            tempLine[0] = parseFloat(subsetMin[p]);
            tempLine[1] = parseFloat(subsetMax[p]);
            tempLine[2] = subsetMedian[p];
            tempLine[3] = (parseFloat(subsetMin[p]) + parseFloat(subsetMax[p])) / 2;
            tempLine[4] = subsetYear[p];
            tempLine[5] = subsetStroke[p];
            plotArray[p] = tempLine
        };
        for (let p = 0; p < 4; p++) {
            var tempLine2003 = [];
            tempLine2003[0] = parseFloat(subsetMin[p]);
            tempLine2003[1] = parseFloat(subsetMax[p]);
            tempLine2003[2] = subsetMedian[p];
            tempLine2003[3] = (parseFloat(subsetMin[p]) + parseFloat(subsetMax[p])) / 2;
            tempLine2003[4] = subsetYear[p];
            tempLine2003[5] = subsetStroke[p];
            plotArrayLabels[p] = tempLine2003
        };
        // console.log(plotArrayLabels);

        // pull out overall min and max to determine x-axis coordinates for graph
        var times = eventArraySwim.map(a => a.time);
        var distances = eventArraySwim.map(a => a.distance);
        min = d3.min(times);
        max = d3.max(times);
        min = Math.floor(min) - distances[0] / 50;
        max = Math.ceil(max) + distances[0] / 50;

        // scale the range of the data in the domains
        y.domain(eventArraySwim.map(function(e) { return e.year; }));
        // y.domain([2003, 2017]);
        // x.domain([97, d3.max(eventArraySwim, function(e) { return e.performance; })]);
        x.domain([min, max]);

        // graphing parameters
        var pointSize = 7.5
        var medianPointSize = 5

        // append lines on the chart
        swimSVG.selectAll(".line")
            .data(years)
            .enter().append("line")
            .attr("class", "chartLine")
            .attr("x1", x(min))
            .attr("y1", function(years) { return y(years); })
            .attr("x2", x(max))
            .attr("y2", function(years) { return y(years); })
            .attr("stroke", "gray")
            .attr("stroke-width", 1)

        // bars for each event encompassing all points - one for each of 32 events
        swimSVG.selectAll(".bars")
            .data(plotArray)
            .enter()
            .append("line")
            .attr("class", "eventBars")
            .attr("opacity", 0.3)
            .attr("x1", function(plotArray) { return x(plotArray[0]) - pointSize / 3; })
            .attr("y1", function(plotArray) { return y(plotArray[4]); })
            .attr("x2", function(plotArray) { return x(plotArray[1]) + pointSize / 3; })
            .attr("y2", function(plotArray) { return y(plotArray[4]); })
            .attr("stroke-width", 20)
            .attr("stroke-linecap", "round")
            .style("stroke", function(plotArray) { return color(plotArray[5]); });

        // top labels for each stroke
        swimSVG.selectAll(".barLabels")
            .data(plotArrayLabels)
            .enter().append("text")
            .attr("class", "chartYear")
            .attr("x", function(plotArrayLabels) { return x(plotArrayLabels[3]); })
            .attr("y", function(plotArrayLabels) { return y(plotArrayLabels[5]); })
            .style("text-anchor", "middle")
            .attr("dy", "-1em")
            .style("fill", function(plotArrayLabels) { return color(plotArrayLabels[5]); })
            .text(function(plotArrayLabels) { return strokes(plotArrayLabels[5]); });

        swimSVG.selectAll("years")
            .data(years)
            .enter().append("text")
            .attr("class", "chartYear")
            .attr("x", 0)
            .attr("y", function(years) { return y(years); })
            .style("text-anchor", "end")
            .attr("dy", ".35em")
            .attr("dx", "-.5em")
            .text(function(years) { return (years); })

        // append 256 circles - one for each athlete
        swimSVG.selectAll(".circle")
            .data(eventArraySwim)
            .enter()
            .append("a")
            // fix names in swimming spreadsheet
            .attr("xlink:target", "_blank")
            .attr("xlink:href", function(eventArraySwim) {
                return "http://www.google.com/search?q=" + eventArraySwim.name + "+swimmer+wikipedia&btnI"
                // return "https://en.wikipedia.org/wiki/" + eventArraySwim.name.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }).split(' ').join('_')
            })
            // alternative, if have column called web containing all wiki pages
            // .attr("xlink:href", function(eventArraySwim) { return eventArraySwim.web })
            .append("circle")
            .attr("class", "chartCircle")
            .style("fill",
                function(eventArraySwim) {
                    return color(eventArraySwim.stroke);
                })
            .attr("opacity", 0.7)
            .attr("cx", function(eventArraySwim) { return x(eventArraySwim.time); })
            .attr("cy", function(eventArraySwim) { return y(eventArraySwim.year); })
            .attr("r", pointSize)

            .on("mouseover", function(eventArraySwim) {
                div.transition()
                    .duration(100)
                    .style("opacity", 0.9)
                    .style("visibility", "visible");
                div.html(eventArraySwim.name + " (" + eventArraySwim.country + ")" + "<br/>" +
                        "Rank in " + eventArraySwim.distance + "-meter " + strokes(eventArraySwim.stroke) + ": " + eventArraySwim.rank +
                        "<br/>" + "Time: " + eventArraySwim.time + " seconds")
                    .style("left", (d3.event.pageX - 80) + "px")
                    .style("top", (d3.event.pageY - 90) + "px");
            })
            .on("mouseout", function(eventArraySwim) {
                div.transition()
                    .duration(1000)
                    .style("visibility", "hidden");
            });

        // add medians - one for each of 32 events
        swimSVG.selectAll(".circle")
            .data(plotArray)
            .enter()
            .append("circle")
            .attr("class", "medianCircle")
            .attr("opacity", 0.7)
            .attr("cx", function(plotArray) { return x(plotArray[2]); })
            .attr("cy", function(plotArray) { return y(plotArray[4]); })
            .attr("r", medianPointSize)
            .attr("fill", "orange")
            .attr("stroke", "black")
            .attr("stroke-width", 0.5);

        // add the x-axis
        swimSVG.append("g")
            .attr("transform", "translate(0," + height + ")")
            .attr("class", "xAxis")
            .call(d3.axisBottom(x));

        // overall label for the x-axis
        swimSVG.append("text")
            .attr("x", width / 2)
            .attr("y", height + 0.5 * margin.bottom)
            .attr("class", "chartLabel")
            .style("text-anchor", "middle")
            .text("Time (seconds)");

        // overall label for the y-axis
        swimSVG.append("text")
            .attr("x", -11)
            .attr("y", -0.3 * margin.top)
            .attr("class", "chartLabel")
            .style("text-anchor", "end")
            .text("Year");

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////        

        // text below graph to describe data source

        swimSVG.append("text")
            .attr("x", 0)
            .attr("y", height + margin.bottom - 10)
            .attr("class", "chartKey")
            .style("text-anchor", "start")
            .text("Data are from the Fédération Internationale de Natation (FINA). Swim times in each event final are displayed. Disqualified athletes are not shown.");


        ////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // key parameters

        var keyHeight = -margin.top / 1.6
        var factor = 2
        var pos = 280
        var keyCircles = [width / factor * 1.07 + pos, width / factor * 1.1 + pos, width / factor * 1.115 + pos, width / factor * 1.16 + pos, width / factor * 1.215 + pos, width / factor * 1.22 + pos, width / factor * 1.23 + pos, width / factor * 1.27 + pos]
        var keyCircleMedian = width / factor * 1.1725 + pos

        var x1 = 1.03 * (width / factor + pos)
        var y1 = keyHeight - 12
        var x2 = 0.98 * (width / factor + width / 6 + pos)
        var y2 = keyHeight - 20
        var keyLineCoordinates = x1 + ", " + y1 + " " + x1 + ", " + y2 + " " + x2 + ", " + y2 + " " + x2 + ", " + y1;
        
        var noteLine = swimSVG.append("polyline")
            .attr("class", "lineKey")
            .attr("points", keyLineCoordinates)
            .attr("fill", "none");

        swimSVG.append("line")
            .attr("x1", width / factor + pos)
            .attr("y1", keyHeight)
            .attr("x2", width / factor + width / 6 + pos)
            .attr("y2", keyHeight)
            .attr("stroke", "gray")
            .attr("stroke-width", 1)

        swimSVG.append("line")
            .attr("opacity", 0.3)
            .attr("x1", width / factor * 1.07 + pos - pointSize / 3)
            .attr("y1", keyHeight)
            .attr("x2", width / factor * 1.27 + pos + pointSize / 3)
            .attr("y2", keyHeight)
            .attr("stroke-width", 20)
            .attr("stroke-linecap", "round")
            .style("stroke", "gray");

        swimSVG.selectAll(".keyCircle")
            .data(keyCircles)
            .enter().append("circle")
            .attr("class", "keyCircle")
            .style("fill", "gray")
            .attr("opacity", 0.8)
            .attr("cx", function(keyCircles) { return keyCircles; })
            .attr("cy", keyHeight)
            .attr("r", pointSize);

        swimSVG.append("circle")
            .style("fill", "orange")
            .attr("opacity", 0.8)
            .attr("cx", keyCircleMedian)
            .attr("cy", keyHeight)
            .attr("r", medianPointSize)
            .attr("stroke", "black")
            .attr("stroke-width", 0.5);

        swimSVG.append("text")
            .attr("x", width / factor + pos * 0.97)
            .attr("y", keyHeight)
            .attr("class", "chartKey")
            .style("font-size", 16)
            .style("text-anchor", "end")
            .style("dominant-baseline", "middle")
            .style("fill", "gray")
            .text("KEY");

        swimSVG.append("text")
            .attr("x", width / factor + width / 12 + pos)
            .attr("y", keyHeight - 25)
            .attr("class", "chartKey")
            .style("text-anchor", "middle")
            .style("fill", "gray")
            .text("Results from event final");

        swimSVG.append("text")
            .attr("x", keyCircleMedian + 10)
            .attr("y", keyHeight + 30)
            .attr("class", "chartKey")
            .style("text-anchor", "start")
            .text("median of swim times");

        swimSVG.append("line")
            .attr("x1", keyCircleMedian + 3)
            .attr("y1", keyHeight + 5)
            .attr("x2", keyCircleMedian + 10)
            .attr("y2", keyHeight + 20)
            .attr("stroke", "darkgray")
            .attr("stroke-width", 1)

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // swimsuit images and text
        
        var imgs = swimSVG.selectAll("image")
            .data([0]);

        imgs.enter()
            .append("svg:image")
            .attr("xlink:href", "assets/swimsuit1.png")
            .attr("x", "-145")
            .attr("y", "10")
            .attr("width", "100")
            .attr("height", "60");

        imgs.enter()
            .append("svg:image")
            .attr("xlink:href", "assets/swimsuit2.png")
            .attr("x", "-145")
            .attr("y", "90")
            .attr("width", "100")
            .attr("height", "60");

        imgs.enter()
            .append("svg:image")
            .attr("xlink:href", "assets/swimsuit3.png")
            .attr("x", "-145")
            .attr("y", "170")
            .attr("width", "100")
            .attr("height", "60");
        
        var suitXstart = -60
        var suitXend = suitXstart - 10
        var suitYstart = margin.top - 100
        var suitYmid1 = suitYstart + 80
        var suitYmid2 = suitYmid1 + 25
        var suitYmid3 = suitYmid2 + 20
        var suitYmid4 = suitYmid3 + 25
        var suitYend = height - margin.bottom + 65

        var polyline1 = suitXstart + ", " + suitYstart + " " + suitXend + ", " + suitYstart + " " +
            suitXend + ", " + suitYmid1 + " " + suitXstart + ", " + suitYmid1;
        var polyline2 = suitXstart + ", " + suitYmid2 + " " + suitXend + ", " + suitYmid2 + " " +
            suitXend + ", " + suitYmid3 + " " + suitXstart + ", " + suitYmid3;
        var polyline3 = suitXstart + ", " + suitYmid4 + " " + suitXend + ", " + suitYmid4 + " " +
            suitXend + ", " + suitYend + " " + suitXstart + ", " + suitYend;

        swimSVG.append("polyline")
            .attr("class", "lineKey")
            .attr("points", polyline1)
            .attr("fill", "none");
        
        swimSVG.append("polyline")
            .attr("class", "lineKey")
            .attr("points", polyline2)
            .attr("fill", "none");

        swimSVG.append("polyline")
            .attr("class", "lineKey")
            .attr("points", polyline3)
            .attr("fill", "none");
        
        swimSVG.append("text")
            .attr("class", "descriptiveText")
            .style("text-anchor", "end")
            .attr('x', -120)
            .attr('y', margin.top - 60)
            .text("full-body, textile")
            .append('svg:tspan')
            .attr('x', -120)
            .attr('dy', 78)
            .text("full-body, polyurethane")
            .append('svg:tspan')
            .attr('x', -120)
            .attr('dy', 87)
            .text("jammer style, textile")

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // explanatory text at right

        swimSVG.append("text")
            .attr("class", "descriptiveText")
            .style("text-anchor", "start")
            .attr('x', width + 50)
            .attr('y', margin.top - 65)
            .text("Between 2003 and 2007, swim times improve at")
            .append('svg:tspan')
            .attr('x', width + 50)
            .attr('dy', 20)
            .text("a moderate rates.")
            .append('svg:tspan')
            .attr('x', width + 50)
            .attr('dy', 55)
            .text("In 2009, some athletes wear full-body suits made")
            .append('svg:tspan')
            .attr('x', width + 50)
            .attr('dy', 20)
            .text("of polyurethane. Swim times improve dramatically.")
            .append('svg:tspan')
            .attr('x', width + 50)
            .attr('dy', 50)
            .text("In 2011, after non-textile materials and full-body")
            .append('svg:tspan')
            .attr('x', width + 50)
            .attr('dy', 20)
            .text("suits are banned, swim times are slower. Rates")
            .append('svg:tspan')
            .attr('x', width + 50)
            .attr('dy', 20)
            .text("of improvement return to normal.");


        var explXstart = width + 20
        var explXend = explXstart + 10
        var explYstart = margin.top - 100
        var explYmid1 = explYstart + 80
        var explYmid2 = explYmid1 + 25
        var explYmid3 = explYmid2 + 20
        var explYmid4 = explYmid3 + 25
        var explYend = height - margin.bottom + 65

        var polyline4 = explXstart + ", " + explYstart + " " + explXend + ", " + explYstart + " " +
            explXend + ", " + explYmid1 + " " + explXstart + ", " + explYmid1;
        var polyline5 = explXstart + ", " + explYmid2 + " " + explXend + ", " + explYmid2 + " " +
            explXend + ", " + explYmid3 + " " + explXstart + ", " + explYmid3;
        var polyline6 = explXstart + ", " + explYmid4 + " " + explXend + ", " + explYmid4 + " " +
            explXend + ", " + explYend + " " + explXstart + ", " + explYend;

        swimSVG.append("polyline")
            .attr("class", "lineKey")
            .attr("points", polyline4)
            .attr("fill", "none");

        swimSVG.append("polyline")
            .attr("class", "lineKey")
            .attr("points", polyline5)
            .attr("fill", "none");

        swimSVG.append("polyline")
            .attr("class", "lineKey")
            .attr("points", polyline6)
            .attr("fill", "none");

        swimSVG.exit().remove();

    });
}
