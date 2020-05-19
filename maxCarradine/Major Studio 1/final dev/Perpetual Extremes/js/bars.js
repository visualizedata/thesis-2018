

var margin = {top: 20, right: 50, bottom: 250, left: 50},
  width = 600 
  height = 400;

// set the ranges
var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
var y = d3.scaleLinear()
          .range([height, 0]);
          
// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#bars").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

// get the data
d3.csv("data/noAC.csv", function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
    d.count = +d.count;
  });

  // Scale the range of the data in the domains
  x.domain(data.map(function(d) { return d.hood; }));
  y.domain([0, d3.max(data, function(d) { return d.count + 500; })]);

  // append the rectangles for the bar chart
  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.hood); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.count); })
      .attr("height", function(d) { return height - y(d.count); })
      .style ("fill","blue");
      

// //add title
//    svg.append("text")
//     .attr("x", 0)
//     .attr("y", 0)
//     .text("Many seniors do not have AC at home")
//     .style ("fill","#FF0000");

  // add the x Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")  
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");

  // add the y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

});
