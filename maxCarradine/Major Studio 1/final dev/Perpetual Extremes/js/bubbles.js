var radii = [10, 30, 20, 4, 60, 25, 45, 11, 12];
    var svg = d3.select("svg");
    
    
    // Setup the tool tip.  Note that this is just one example, and that many styling options are available.
    // See original documentation for more details on styling: http://labratrevenge.com/d3-tip/
    // var tool_tip = d3.tip()
    //   .attr("class", "d3-tip")
    //   .offset([-8, 0])
    //   .html(function(d) { return "Radius: " + d; });
    // svg.call(tool_tip);
    
    // Now render the SVG scene, connecting the tool tip to each circle.
    var circles = svg.selectAll("circle").data(radii);
    circles.enter().append("circle")
      .attr("r", function(d) { return d; })
      .attr("cx", function(d, i) { return 50 + 50*i; })
      .attr("cy", function(d, i) { return 50 + 50*i; })
      .style("fill", "red")
      .style("stroke", "black");
      // .on('mouseover', tool_tip.show)
      // .on('mouseout', tool_tip.hide);