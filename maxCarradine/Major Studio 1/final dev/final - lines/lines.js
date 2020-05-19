var margin = {top: 25, right: 25, bottom: 100, left: 50},
    width = 650,
    height = 400;

var parseTime = d3.timeParse("%d-%b-%y");


// Scales and axes. 
var x = d3.scaleTime().range([0, width]),
    y = d3.scaleLinear().range([height, 0]),
    xAxis = d3.axisBottom(x).tickSize(-height),
    yAxis = d3.axisRight(y).tickArguments(4);



var line = d3.line()
    .curve(d3.curveMonotoneX)
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.temperature); });

d3.csv("tempvardata.csv",function type(d) {
d.date = parseTime(d.date);
  d.temperature = +d.temperature;
  return d;
}, function(error, data) {
  if (error) throw error;


// d3.csv("tempvardata.csv", type, function(error, data) {
//   data.forEach(function(d) {
//       d = type(d);
//   });
  //   console.log(data);
  // console.log(parseTime(data[0].date));

  var values = data.filter(function(d) {
    return d.condition == "outside";
  });

  var noAC = data.filter(function(d) {
    return d.condition == "noAC";
  });

  var withAC = data.filter(function(d) {
    return d.condition == "withAC";
  });

  // get the minimum and maximum date, and the maximum temperature.
  x.domain([values[0].date, values[values.length - 1].date]);
  y.domain([70, d3.max(values, function(d) { return d.temperature +2; })]).nice;

  // Add an SVG element 
  var svg = d3.select("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  // Add the clip path.
  svg.append("clipPath")
      .attr("id", "clip")
    .append("rect")
      .attr("width", width)
      .attr("height", height);

  // Add the x-axis.
    svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x)
              .tickFormat(d3.timeFormat("%Y-%m-%d")))
      .selectAll("text")  
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");
  // svg.append("g")
  //     .attr("class", "x axis")
  //     .attr("transform", "translate(0," + height + ")")
  //     .call(xAxis);

  // Add the y-axis.
  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + width + ",0)")
      .call(yAxis);


  var colors = d3.scaleOrdinal()
  .domain(["outside", "noAC"])
  .range(["#efefa5", "#FF0000"]);


  svg.selectAll('.line')
    .data([values, noAC])
    .enter()
      .append('path')
        .attr('class', 'line')
        .style('stroke', function(d) {
 return colors(Math.random() * 1);

        })
        .attr('clip-path', 'url(#clip)')
        .attr('d', function(d) {
          return line(d);
        })
        //adding line labels
svg.append("text")
    .attr("x", 0)
    .attr("y", 310)
    .text("Outside temp")
    .style ("fill","#efefa5");


    svg.append("text")
    .attr("x", 0)
    .attr("y", 150)
    .text("Inside temp (no AC)")
    .style ("fill","#FF0000");


  /* Add 'curtain' rectangle to hide entire graph */
  var curtain = svg.append('rect')
    .attr('x', -1 * width)
    .attr('y', -1 * height)
    .attr('height', height)
    .attr('width', width)
    .attr('class', 'curtain')
    .attr('transform', 'rotate(180)')
    .style('fill', '#000000')


  /* Create a shared transition for anything we're animating */
  var t = svg.transition()
    .delay(500)
    .duration(7000)
 .ease(d3.easeLinear)
    .on('end', function() {
      d3.select('line.guide')
        .transition()
        .style('opacity', 0)
        .remove()
    });

  t.select('rect.curtain')
    .attr('width', 0);
  t.select('line.guide')
    .attr('transform', 'translate(' + width + ', 0)')

});


