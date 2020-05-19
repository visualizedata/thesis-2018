var Alpine = '<option value="men Downhill">Men\'s Downhill</option> \
<option value="men Super G">Men\'s Super-G</option> \
<option value="men Giant Slalom">Men\'s Giant Slalom</option> \
<option value="men Slalom">Men\'s Slalom</option> \
<option value="men Combined">Men\'s Combined</option> \
<option value="women Downhill">Ladies\' Downhill</option> \
<option value="women Super G">Ladies\' Super-G</option> \
<option value="women Giant Slalom">Ladies\' Giant Slalom</option> \
<option value="women Slalom">Ladies\' Slalom</option> \
<option value="women Combined">Ladies\' Combined</option>';

var Bobsleigh = '<option value="men Two-Man">Two-Man</option> \
<option value="men Four-Man">Four-Man</option> \
<option value="women Two-Woman">Two-Woman</option>';

var Cross_Country = '<option value="men 15K Freestyle">Men\'s 15 kilometers</option> \
<option value="women 10K Freestyle">Ladies\' 10 kilometers</option>';

var Luge = '<option value="men Singles">Men\'s Singles</option> \
<option value="men Doubles">Men\'s Doubles</option> \
<option value="women Singles">Ladies\' Singles</option>';

var Skeleton = '<option value="men Singles">Men\'s Singles</option> \
<option value="women Singles">Ladies\' Singles</option>';

var Speed_Skating = '<option value="men 500 meters">Men\'s 500 meters</option> \
<option value="men 1000 meters">Men\'s 1,000 meters</option> \
<option value="men 1500 meters">Men\'s 1,500 meters</option> \
<option value="men 5000 meters">Men\'s 5,000 meters</option> \
<option value="men 10000 meters">Men\'s 10,000 meters</option> \
<option value="women 500 meters">Ladies\' 500 meters</option> \
<option value="women 1000 meters">Ladies\' 1,000 meters</option> \
<option value="women 1500 meters">Ladies\' 1,500 meters</option> \
<option value="women 3000 meters">Ladies\' 3,000 meters</option> \
<option value="women 5000 meters">Ladies\' 5,000 meters</option>';

var selectedSport, selectedEvent, allBut, percentFaster, performanceColNumber, rankColNumber;
var olympicsSVG;

$(document).ready(function() {
    initialMenu();
    selectedSport = $('#selectSport').val();
    selectedEvent = $('#selectEvent').val();
    $('input[name="radio1"]').prop('checked', false);
    $('input[name="radio2"]').prop('checked', false);
    // allBut = $("input[type='radio'][name='mode1']:checked").val()
    // percentFaster = $("input[type='radio'][name='mode2']:checked").val()
    // colNumber = parseFloat(allBut) * parseFloat(percentFaster);
    drawGraph();
});

$('#selectSport').change(function() {
    initialMenu();
    selectedSport = $('#selectSport').val();
    selectedEvent = $('#selectEvent').val();
    $('input[name="radio1"]').prop('checked', false);
    $('input[name="radio2"]').prop('checked', false);
    // allBut = $('#radio1').val();
    // percentFaster = $('#radio2').val();
    // console.log(selectedSport); // note that getting updates when change sport but not when change event
    // console.log(selectedEvent); // this only works inside here; can't get the variable values to inside d3
    drawGraph();
});

$('#selectEvent').change(function() {
    selectedEvent = $('#selectEvent').val();
    $('input[name="radio1"]').prop('checked', false);
    $('input[name="radio2"]').prop('checked', false);
    // allBut = $('#radio1').val();
    // percentFaster = $('#radio2').val();
    // console.log(selectedSport); // note that getting updates when change sport but not when change event
    // console.log(selectedEvent); // this only works inside here; can't get the variable values to inside d3
    drawGraph();
});


function initialMenu() {
    if ($('#selectSport').val() == 'Select') {
        $('#selectEvent').empty().append(Select);
    }
    else if ($('#selectSport').val() == 'Alpine') {
        $('#selectEvent').empty().append(Alpine);
    }
    else if ($('#selectSport').val() == 'Bobsleigh') {
        $('#selectEvent').empty().append(Bobsleigh)
    }
    else if ($('#selectSport').val() == 'Cross_Country') {
        $('#selectEvent').empty().append(Cross_Country);
    }
    else if ($('#selectSport').val() == 'Luge') {
        $('#selectEvent').empty().append(Luge);
    }
    else if ($('#selectSport').val() == 'Skeleton') {
        $('#selectEvent').empty().append(Skeleton);
    }
    else if ($('#selectSport').val() == 'Speed_Skating') {
        $('#selectEvent').empty().append(Speed_Skating)
    }
}


function drawGraph() {

    // set the dimensions and margins of the graph
    var margin = { top: 100, right: 250, bottom: 125, left: 250 },
        width = 1200 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var colors = ['#daa520', '#999999', '#a0522d', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'];

    var y = d3.scaleBand()
        .range([0, height])
        .padding(0.1);
    var x = d3.scaleLinear()
        .range([0, width]);
    var color = d3.scaleOrdinal()
        .domain([1, 2, 3, 4, 5, 6, 7, 8])
        .range(colors);

    d3.select(".medalSVGclass").remove();

    // append the svg object to the body of the page
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    olympicsSVG = d3.select("#olympicsSketch").append("svg")
        .attr("class", "medalSVGclass")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    var eventArray = [];
    var i = 0;
    var min;
    var subsetPerformances = [];

    // Define the div for the tooltip
    var div = d3.select("#olympicsSketch").append("div")
        .attr("class", "tooltipMedal")
        .style("opacity", 0);

    // get the data
    d3.csv("data/medalsData.csv", function(error, data) {
        if (error) throw error;

        // format the data
        data.forEach(function(d) {
            if (d.sport == selectedSport && d.genderEvent == selectedEvent) {
                // d.performance = +d.performance;
                // console.log(d.name);
                // d.country = +d.country;
                // eventArray =[];
                eventArray[i++] = d;
                // console.log(eventArray);
            }
            // console.log(eventArray);
        });
        
        subsetPerformances = eventArray.map(a => a.performance);
        subsetPerformances = subsetPerformances[7];
        min =  Math.floor(subsetPerformances)

        // Scale the range of the data in the domains
        // y.domain(eventArray.map(function(e) { return e.rank; }));
        y.domain(eventArray.map(function(e) { return e.position; }));
        // x.domain([97, d3.max(eventArray, function(e) { return e.performance; })]);
        x.domain([min, 101]);

        // append lines on the chart
        var lin = olympicsSVG.selectAll(".lines")
            .data(eventArray)
            .enter().append("line")
            .attr("class", "chartLine")
            .attr("x1", 0)
            .attr("y1", function(eventArray) { return y(eventArray.position); })
            .attr("x2", function(eventArray) { return x(eventArray.performance); })
            .attr("y2", function(eventArray) { return y(eventArray.position); })
            .attr("stroke", "gray")
            .attr("stroke-width", 1)

        olympicsSVG.selectAll(".circlesUnder")
            .data(eventArray)
            .enter().append("circle")
            .attr("class", "chartCircle")
            .attr("fill", "white")
            .attr("cx", function(eventArray) { return x(eventArray.performance); })
            .attr("cy", function(eventArray) { return y(eventArray.position); })
            .attr("r", 10)
            .attr("stroke", "#666666")
            .attr("stroke-width", 0.5)
            .attr("opacity", 1)

        var circ = olympicsSVG.selectAll(".circles")
            .data(eventArray)
            .enter().append("circle")
            .attr("class", "chartCircle")
            .attr("fill",
                function(eventArray) {
                    return color(eventArray.rank);
                })
            .attr("cx", function(eventArray) { return x(eventArray.performance); })
            .attr("cy", function(eventArray) { return y(eventArray.position); })
            .attr("r", 10)
            .attr("stroke", "#666666")
            .attr("stroke-width", 1)

        olympicsSVG.selectAll(".names")
            .data(eventArray)
            .enter()
            .append("a")
            .attr("xlink:href", function(eventArray) {
                return "http://www.google.com/search?q=" + eventArray.name + "+olympics+2018+wikipedia&btnI"
                // return "https://en.wikipedia.org/wiki/" + eventArray.name.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }).split(' ').join('_')
            })
            // alternative, if have column of all wiki pages
            // .attr("xlink:href", function(eventArray) { return eventArray.web })
            .append("text")
            .attr("class", "chartText")
            .attr("x", 0)
            .attr("y", function(eventArray) { return y(eventArray.position); })
            .style("text-anchor", "end")
            .attr("dy", ".35em")
            .attr("dx", "-.5em")
            .text(function(eventArray) { return eventArray.name; })

        var coun = olympicsSVG.selectAll(".countries")
            .data(eventArray)
            .enter().append("text")
            .attr("class", "chartCountry")
            .attr("x", function(eventArray) { return x(eventArray.performance); })
            .attr("y", function(eventArray) { return y(eventArray.position); })
            .style("text-anchor", "start")
            .attr("dy", ".35em")
            .attr("dx", "1.1em")
            .text(function(eventArray) { return eventArray.country; });

        // add the x-axis
        olympicsSVG.append("g")
            .attr("transform", "translate(0," + height + ")")
            .attr("class", "xAxis")
            .call(d3.axisBottom(x));
            
        // label for the x-axis
        olympicsSVG.append("text")
            .attr("x", width / 2)
            .attr("y", height + 0.4 * margin.bottom)
            .attr("class", "chartLabel")
            .style("text-anchor", "middle")
            .text("Performance (%)");

        // label for the y-axis
        olympicsSVG.append("text")
            .attr("class", "chartLabel")
            .attr("x", 0)
            .attr("y", -0.3 * margin.top)
            .attr("dx", "-0.3em")
            .style("text-anchor", "end")
            .text("Top 8 finishers");
            
        // text below graph to describe data source
        olympicsSVG.append("text")
            .attr("x", 0)
            .attr("y", height + margin.bottom - 30)
            .attr("class", "chartData")
            .style("text-anchor", "start")
            .text("Data are from the International Olympic Committee (IOC). The top 8 finishers for each event are shown. The actual gold medalist's performance is")
        
        olympicsSVG.append("text")
            .attr("x", 0)
            .attr("y", height + margin.bottom - 15)
            .attr("class", "chartData")
            .style("text-anchor", "start")
            .text("set to 100%. All other finishers' performances — actual or after hypothetical improvements — are calculated relative to the actual winning time.");
        
        var x1 = width - 50
        var y1 = height/2 + 100 + 30
        var x2 = width - 50 + 12
        var y2 = height/2 + 100
        var noteLineCoordinates = x1 + ", " + y1 + " " + x1 + ", " + y2 + " " + x2 + ", " + y2;
        
        var noteLine = olympicsSVG.append("polyline")
            .attr("class", "lineKey")
            .attr("points", noteLineCoordinates)
            .attr("fill", "none");
        
        var noteText1 = olympicsSVG.append("text")
            .attr("class", "chartData")
            .attr("x", width - 30)
            .attr("y", height/2 + 100)
            .text("The x-axis extends beyond 100% to")
        
        var noteText2 = olympicsSVG.append("text")
            .attr("class", "chartData")
            .attr("x", width - 30)
            .attr("y", height/2 + 115)
            .text("accommodate hypothetical scenarios.")
            
        d3.selectAll("input")
            .on("change", function() {
                allBut  = d3.select('input[name=radio1]:checked').attr('value');
                percentFaster = d3.select('input[name=radio2]:checked').attr('value');
                performanceColNumber = 12 + (parseFloat(percentFaster)-1)*6 + (parseFloat(allBut)-1)*3     // 12 is column where hypothetical values begin
                rankColNumber = performanceColNumber + 1
                var valueKey1 = data.columns[performanceColNumber];
                var valueKey2 = data.columns[rankColNumber];
                changed(valueKey1, valueKey2)
            });

        function changed(valueKey1, valueKey2) {
            if (allBut == 0) actual();
            else hypothetical(valueKey1, valueKey2);
        }


        function hypothetical(valueKey1, valueKey2) {
            
            lin.transition()
                .duration(1750)
                .attr("x1", 0)
                .attr("y1", function(eventArray) { return y(eventArray.position); })
                .attr("x2", function(d, i) { return x(d[valueKey1]); })     
                .attr("y2", function(eventArray) { return y(eventArray.position); })
                .attr("stroke", "gray")
                .attr("stroke-width", 1)

            circ.transition()
                .duration(1750)
                .attr("fill", function(d, i) { return color(d[valueKey2]); })
                .attr("cx", function(d, i) { return x(d[valueKey1]); })
                .attr("cy", function(eventArray) { return y(eventArray.position); })
                .attr("r", 10)
                .attr("stroke", "#666666")
                .attr("stroke-width", 1)

            coun.transition()
                .duration(1750)
                .attr("x", function(d, i) { return x(d[valueKey1]); })
                .attr("y", function(eventArray) { return y(eventArray.position); })
                .style("text-anchor", "start")
                .attr("dy", ".35em")
                .attr("dx", "1.1em")
                .text(function(eventArray) { return eventArray.country; })
            
            noteLine.transition()
                .duration(1000)
                .style("opacity", 0);
                
            noteText1.transition()
                .duration(1000)
                .style("opacity", 0);
            
            noteText2.transition()
                .duration(1000)
                .style("opacity", 0);
        }


        function actual() {
            
            $('input[name="radio2"]').prop('checked', false);   // unchecks any percent faster radio button

            lin.transition()
                .duration(1750)
                .attr("x1", 0)
                .attr("y1", function(eventArray) { return y(eventArray.position); })
                .attr("x2", function(eventArray) { return x(eventArray.performance); })
                .attr("y2", function(eventArray) { return y(eventArray.position); })
                .attr("stroke", "gray")
                .attr("stroke-width", 1)

            circ.transition()
                .duration(1750)
                .attr("fill", function(eventArray) { return color(eventArray.rank); })
                .attr("cx", function(eventArray) { return x(eventArray.performance); })
                .attr("cy", function(eventArray) { return y(eventArray.position); })
                .attr("r", 10)
                .attr("stroke", "#666666")
                .attr("stroke-width", 1)

            coun.transition()
                .duration(1750)
                .attr("x", function(eventArray) { return x(eventArray.performance); })
                .attr("y", function(eventArray) { return y(eventArray.position); })
                .style("text-anchor", "start")
                .attr("dy", ".35em")
                .attr("dx", "1.1em")
                .text(function(eventArray) { return eventArray.country; });
        }

        olympicsSVG.exit().remove();

    });
}