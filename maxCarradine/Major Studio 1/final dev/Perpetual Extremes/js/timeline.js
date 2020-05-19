var margin = {top: 0, right: 25, bottom: 0, left: 25 }; 

    var hwdata = [
	{ date: '1896-08-04', linestop: 0, days: 10, info: ' 1500 dead' },
	{ date: '1901-06-26', linestop: 0, days: 8, info: ' 700 dead' },
	{ date: '1944-07-05', linestop: 0, days: 9, info: 'dead ' },
	{ date: '1944-08-10', linestop: 0, days: 8, info: ' dead'},
	{ date: '1953-07-15', linestop: 0, days: 7, info: ' dead'},
	{ date: '1953-08-24', linestop: 0, days: 12, info: ' dead'},
	{ date: '1955-08-01', linestop: 0, days: 7, info: ' dead' },
	{ date: '1966-07-06', linestop: 0, days: 9, info: 'dead '},
	{ date: '1973-08-28', linestop: 0, days: 8, info: ' dead'},
	{ date: '1977-07-13', linestop: 0, days: 9, info: ' dead'},
	{ date: '1980-08-02', linestop: 0, days: 8, info: 'dead '},
	{ date: '1981-07-07', linestop: 0, days: 7, info: ' dead'},
	{ date: '1983-07-12', linestop: 0, days: 7, info: ' dead'},
	{ date: '1991-07-15', linestop: 0, days: 7, info: ' dead'},
	{ date: '1993-07-07', linestop: 0, days: 10, info: ' dead'},
	{ date: '1995-07-29', linestop: 0, days: 7, info: ' dead'},
	{ date: '1998-08-09', linestop: 0, days: 7, info: ' dead'},
	{ date: '1999-07-23', linestop: 0, days: 11, info: ' dead'},
	{ date: '2002-07-29', linestop: 0, days: 8, info: ' dead'},
	{ date: '2002-08-11', linestop: 0, days: 9, info: 'dead '},
	{ date: '2013-07-14', linestop: 0, days: 7, info: ' dead'},
];




var svgln = d3.select('#timeline').append("svg")
			.attr('height', '400px')
			.attr('width', '1200px')
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")")

var tool_tip = d3.tip()
      .attr("class", "d3-tip")
      .offset([-20, 120])
      .html(function(d) { return "Started on " + d.date + ", lasted " + d.days +" days"; });
    svgln.call(tool_tip);


var xExtent = d3.extent(hwdata, function(d, i) { return d.date; });
var yExtent = d3.extent(hwdata, function(d, i) { return d.linestop; });

var xScale = d3.scaleTime()
	.domain([ new Date(xExtent[0]), new Date(xExtent[1]) ])
	.range([40,1150]);

var yScale = d3.scaleLinear()
	.domain(yExtent)
	.range([335,140]);	





var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);

svgln.append('g')
	.attr('id', 'xAxisG')
	.attr('transform', 'translate(0,335)')
	.call(xAxis)
	.selectAll("text")
    .attr("y", 0)
    .attr("x", 15)
     .attr("dy", ".35em")
          .attr("dy", ".35em")
     .transition()
    .duration(0)
    	.delay(1000)
	.attr('fill', '#000000')
	.transition()
    .duration(2000)
     .attr('fill', '#ffffff')
     .style("font-size", "16px")
    .attr("transform", "rotate(75)")
    .style("text-anchor", "start");


var linestopLine = d3.line()
	.x(function(d) {
		return xScale(new Date(d.date));
	})
	.y(function(d) {
		return yScale(d.linestop);
	})
	.curve(d3.curveCatmullRom.alpha(0.5));



var path = svgln.append('g').append('path')
	.attr('d', linestopLine(hwdata))
	.attr('fill', 'none')
	.attr('stroke', '#7a7878')
	.attr('stroke-width', 7);

var totalLength = path.node().getTotalLength();

path
	.attr("stroke-dasharray", totalLength + " " + totalLength)
	.attr("stroke-dashoffset", totalLength)
	.transition()
		.delay(1000)
	.duration(2000)
    .ease(d3.easeCubicInOut)
	.attr("stroke-dashoffset", 0);

svgln.append('g')
	.selectAll('circle')
	.data(hwdata)
	.enter()
	.append('circle')
	.style("stroke", "black")
	.on('mouseover', tool_tip.show)
    .on('mouseout', tool_tip.hide)
	.transition()
    .duration(0)
	.attr('fill', '#c4342e')
	.attr('r', 0)
	.attr('cx', function(d, i) {
		return xScale(new Date(d.date));
	})
	
	.attr('cy', function(d, i) {
		return yScale(d.linestop);
	})
	.transition()
	.duration(2000)
	.delay(1000)
	.attr('r', 8);



