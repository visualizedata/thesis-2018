    // --this one works

    var data = [
	{ date: '1896-08-04', linestop: 0 },
	{ date: '1901-06-26', linestop: 0 },
	{ date: '1944-07-05', linestop: 0 },
	{ date: '1944-08-10', linestop: 0 },
	{ date: '1953-07-15', linestop: 0 },
	{ date: '1953-08-24', linestop: 0 },
	{ date: '1955-08-01', linestop: 0 },
	{ date: '1966-07-06', linestop: 0 },
	{ date: '1973-08-28', linestop: 0 },
	{ date: '1977-07-13', linestop: 0 },
	{ date: '1980-08-02', linestop: 0 },
	{ date: '1981-07-07', linestop: 0 },
	{ date: '1983-07-12', linestop: 0 },
	{ date: '1991-07-15', linestop: 0 },
	{ date: '1993-07-07', linestop: 0 },
	{ date: '1995-07-29', linestop: 0 },
	{ date: '1998-08-09', linestop: 0 },
	{ date: '1999-07-23', linestop: 0 },
	{ date: '2002-07-29', linestop: 0 },
	{ date: '2002-08-11', linestop: 0 },
	{ date: '2013-07-14', linestop: 0 },
	{ date: '2016-08-11', linestop: 0 },
];


var svgln = d3.select('#timeline').append('svg')
.attr('height', '600px')
.attr('width', '600px');

 var tool_tip = d3.tip()
      .attr("class", "d3-tip")
      .offset([-8, 0])
      .html(function(d) { return "Started on: " + d.date; });
    svgln.call(tool_tip);

var xExtent = d3.extent(data, function(d, i) { return d.date; });
var yExtent = d3.extent(data, function(d, i) { return d.linestop; });

var xScale = d3.scaleTime()
	.domain([ new Date(xExtent[0]), new Date(xExtent[1]) ])
	.range([40,495]);

var yScale = d3.scaleLinear()
	.domain(yExtent)
	.range([460,240]);


var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);

svgln.append('g')
	.attr('id', 'xAxisG')
	.attr('transform', 'translate(0,460)')
	.call(xAxis)
	.selectAll("text")
    .attr("y", 0)
    .attr("x", 15)
     .attr("dy", ".35em")
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
	.attr('d', linestopLine(data))
	.attr('fill', 'none')
	.attr('stroke', '#7a7878')
	.attr('stroke-width', 5);

var totalLength = path.node().getTotalLength();

path
	.attr("stroke-dasharray", totalLength + " " + totalLength)
	.attr("stroke-dashoffset", totalLength)
	.transition()
	.duration(2000)
    .ease(d3.easeCubicInOut)
	.attr("stroke-dashoffset", 0);

svgln.append('g')
	.selectAll('circle')
	.data(data)
	.enter()
	.append('circle')
	.style("stroke", "black")
	 .on('mouseover', tool_tip.show)
     .on('mouseout', tool_tip.hide)
	.transition()
    .duration(2000)
	.attr('fill', '#c4342e')
	.attr('r', 7)
	.attr('cx', function(d, i) {
		return xScale(new Date(d.date));
	})

	.attr('cy', function(d, i) {
		return yScale(d.linestop);
	})

	.transition()
	.duration(1500)
	.delay(1800)
	.attr('r', 7)
	.transition()
	.duration(1800)
	.attr('r', 6);




