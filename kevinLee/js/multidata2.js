

var currState = 'total';
var medCutoff = 5;
var showParentLab = false;
var currOcc = null;


var palette = {"advertising": "#a6cee3", "clothing, footwear & accessories": "#1f78b4","electronics": "#b2df8a", 
"entertainment": "#33a02c", "establishment": "#fb9a99", "food & drink": "#e31a1c", "home": "#fdbf6f", 
"organization": "#ff7f00", "personal brand": "#cab2d6", "smoking": "#6a3d9a", "sports equipment": "#ffff99", "vehicle": "#b15928"};


var movieByCategoryURL = "data-tree/movie-movie-category.json";
var genreByCategoryURL = "data-tree/movie-genre-category.json";
var actorByCategoryURL = "data-tree/movie-actor-category.json";
var ageByCategoryURL = "data-tree/movie-age-category.json";
var ethnicityByCategoryURL = "data-tree/movie-ethnicity-category.json";
var genderByCategoryURL = "data-tree/movie-gender-category.json";
var strengthByCategoryURL = "data-tree/movie-strength-category.json";
var categoryByBrandURL = "data-tree/movie-category-brand.json";
var grossByCategoryURL = "data-tree/movie-gross-category.json";

var movieByCategoryData; // global
var genreByCategoryData;
var actorByCategoryData; // global
var ageByCategoryData; // global
var ethnicityByCategoryData; // global
var genderByCategoryData; // global
var strengthByCategoryData; // global
var categoryByBrandData; // global
var grossByCategoryData; // global

d3.json(movieByCategoryURL)
.on("progress", function() {
        d3.select("#loadprogress .progvalue").text(Math.round(100 * d3.event.loaded / 1075072));
    })
    .get(function(error, root) {
        d3.select("#loadprogress").remove();
        buildTreemap(root, false, 12, "movie");
        positionParentLabels();

        //Show relevant description and remove others
        // $("#treeMovieDesc").show();
        // $("#treeGenreDesc").hide();
        // $("#treeActorDesc").hide();
        // $("#treeAgeDesc").hide();
        // $("#treeEthnicityDesc").hide();
        // $("#treeGenderDesc").hide();


        d3.selectAll("#movieByCategoryButton").on("click", function() {
            d3.select("#treemap").remove();
            buildTreemap(root, false, 12, "movie");
            positionParentLabels();

            //Show relevant description and remove others
            // $("#treeMovieDesc").show();
            // $("#treeGenreDesc").hide();

        });
        d3.select("#treemap").attr("class", "movCatMap");

        $("#parentcheck").click();
});

d3.json(genreByCategoryURL)
.on("progress", function() {
        d3.select("#loadprogress .progvalue").text(Math.round(100 * d3.event.loaded / 1075072));
    })
    .get(function(error, root) {
        d3.select("#loadprogress").remove();

        d3.selectAll("#genreByCategoryButton").on("click", function() {
            d3.select("#treemap").remove();
            buildTreemap(root, false, 14, "genre");
            positionParentLabels();

            //Show relevant description and remove others
            $("#treeMovieDesc").hide();
            $("#treeGenreDesc").show();
        });
});

d3.json(actorByCategoryURL)
.on("progress", function() {
        d3.select("#loadprogress .progvalue").text(Math.round(100 * d3.event.loaded / 1075072));
    })
    .get(function(error, root) {
        d3.select("#loadprogress").remove();

        d3.selectAll("#actorByCategoryButton").on("click", function() {
            d3.select("#treemap").remove();
            buildTreemap(root, false, 12, "actor");
            positionParentLabels();
        });
});

d3.json(ageByCategoryURL)
.on("progress", function() {
        d3.select("#loadprogress .progvalue").text(Math.round(100 * d3.event.loaded / 1075072));
    })
    .get(function(error, root) {
        d3.select("#loadprogress").remove();

        d3.selectAll("#ageByCategoryButton").on("click", function() {
            d3.select("#treemap").remove();
            buildTreemap(root, false, 14, "age");
            positionParentLabels();
        });
});


d3.json(ethnicityByCategoryURL)
.on("progress", function() {
        d3.select("#loadprogress .progvalue").text(Math.round(100 * d3.event.loaded / 1075072));
    })
    .get(function(error, root) {
        d3.select("#loadprogress").remove();

        d3.selectAll("#ethnicityByCategoryButton").on("click", function() {
            d3.select("#treemap").remove();
            buildTreemap(root, false, 14, "ethnicity");
            positionParentLabels();
        });
});


d3.json(genderByCategoryURL)
.on("progress", function() {
        d3.select("#loadprogress .progvalue").text(Math.round(100 * d3.event.loaded / 1075072));
    })
    .get(function(error, root) {
        d3.select("#loadprogress").remove();

        d3.selectAll("#genderByCategoryButton").on("click", function() {
            d3.select("#treemap").remove();
            buildTreemap(root, false, 14, "gender");
            positionParentLabels();
        });
});

d3.json(strengthByCategoryURL)
.on("progress", function() {
        d3.select("#loadprogress .progvalue").text(Math.round(100 * d3.event.loaded / 1075072));
    })
    .get(function(error, root) {
        d3.select("#loadprogress").remove();

        d3.selectAll("#strengthByCategoryButton").on("click", function() {
            d3.select("#treemap").remove();
            buildTreemap(root, false, 14, "strength");
            positionParentLabels();
        });
});

d3.json(categoryByBrandURL)
.on("progress", function() {
        d3.select("#loadprogress .progvalue").text(Math.round(100 * d3.event.loaded / 1075072));
    })
    .get(function(error, root) {
        d3.select("#loadprogress").remove();

        d3.selectAll("#categoryByBrandButton").on("click", function() {
            d3.select("#treemap").remove();
            buildTreemap(root, true, 14, "brand");
            positionParentLabels();
        });
});

d3.json(grossByCategoryURL)
.on("progress", function() {
        d3.select("#loadprogress .progvalue").text(Math.round(100 * d3.event.loaded / 1075072));
    })
    .get(function(error, root) {
        d3.select("#loadprogress").remove();

        d3.selectAll("#grossByCategoryButton").on("click", function() {
            d3.select("#treemap").remove();
            buildTreemap(root, false, 14, "gross");
            positionParentLabels();
        });
});

function showDesc(topic) {
        // if (topic == "age" || topic == "brand") {
        //     $("#treeLeftCol").hide();
        //     $("#treeRightCol").show();
        // }
        // else {
        //     $("#treeLeftCol").show();
        //     $("#treeRightCol").hide();
        // }   
        $(".desc").hide();
        $("#" + topic + "Desc").show();
}

function buildTreemap(theData, isBrandMap, parentLabelFontSize, topic) {
        showDesc(topic);

        var margin = {top: 0, right: 0, bottom: 0, left: 0},
            //width = 1040, //fullest width of page
            
            //width = 900;
            //width = 710;
            
            //width = 740;
            //height = 740;
            
            widthTree = 770; //766 best width for full size, 715 was old width
            heightTree = 712; //766 best height for full size, 715 was old height
    
        var treemap = d3.layout.treemap()
            .size([widthTree, heightTree])
            //.sticky(true)
            .padding(1.5)
            .sort(function(a, b) { return a.value - b.value; })
            .value(function(d) { return d[currState]; });



        var div = d3.select("body #treemapholder").append("div")
            .attr("id", "treemap")
            .style("position", "relative")
            .style("width", (widthTree + margin.left + margin.right) + "px")
            .style("height", (heightTree + margin.top + margin.bottom) + "px")
            .style("left", margin.left + "px")
            .style("top", margin.top + "px");


        if (isBrandMap)
            d3.select("#treemap").attr("class", "brandMap");
    
        var node = div.datum(theData).selectAll(".node")
        .data(treemap.nodes)
        .enter().append("div")
            .attr("class", function(d) { 
                var val;

                if(d.children) {
                    val = "parent node " + d.name;
                }
                else {
                    val = "node";
                }
                return val;

                //return d.children ? "parent node" : "node";
            })
            .attr("style", function(d) {
                var bgColor;
                if (!d.children) {
                    if (isBrandMap) {
                        //bgColor = "background-color: #fff";
                        bgColor = "background-color:" + palette[d.parent.name];
                    }
                    else {
                        bgColor = "background-color:" + palette[d.name];
                    }
                }
                return bgColor;
            })
            .attr("id", function(d) { return 'occnode' + d.ocode })
            .call(position);

        // node.transition()
        //     .duration(500)
        //     .call(position);


        // Append labels to wider rectangles
        var label = node.append("div")
            .attr("class", "childlabel")
            .text(function(d) {
                if (d.children || d.dx*d.dy < 800) { return null; }
                else { return d.name; }
            });


        // Append group labels on top
        d3.selectAll(".parent").data().map(function(d) {  
            if (d.name === "occs") return null;
            if (d.dx <= 22) return null;
            if (d.dy <= 22) return null;
                div.append("div")
                    .text(d.name)
                    .style("left", d.x + "px")
                    .style("top", d.y + "px")
                    .style("width", (d.dx-22) + "px")
                    .style("height", (d.dy-22) + "px")
                    .attr("class", "parentlabel")
                    .attr("id", "plab"+d.ocode);
        });

        // Adjust parent labels on checkbox
        d3.selectAll("#parentcheck").on("change", function change() {
            showParentLab = this.checked;
            d3.selectAll(".parentlabel")
                .call(positionParentLabels);
        });
        $(".parentlabel").css("font-size", parentLabelFontSize + "px");

        var items = [];
        // Tooltip effects
        node.on("mouseover", function(d) {
            //console.log(d.parent.children);
            // var parent = d.parent;
            // for(var property in parent) {
            //     console.log(property);
            // }
            var grandTotal = 0;
            d.parent.children.forEach(function(current){
                //console.log(typeof current); //object
                // Object.keys(current).forEach(function(key,index) {
                //     // key: the name of the object key
                //     // index: the ordinal position of the key within the object 
                //     if (key == "total")
                //         console.log();
                // });
                // for(var i=0;i<current.length;i++) {
                //     console.log(current[i]);
                // }

                for (const [key, value] of Object.entries(current)) { 
                    if (key == "total")
                        grandTotal += parseInt(value);
                }
                console.log(grandTotal);
            })

            if (!d.children) {
                // Add job category and job name
                d3.select("#tooltip #heading #jobgroup").text(d.parent.name);
                d3.select("#tooltip #heading #jobtitle").text(grandTotal.toString().toHHMMSS());

                var brandName = "";
                var parentName = d.parent.name;
                var thisName = d.name;

                var result = theData.children;
                for(var i = 0;i<result.length; i++) {
                    if (result[i].name == parentName) {
                        var movieRow = result[i];
                        var movieRowChildren = movieRow.children;
                        for(var j = 0;j < movieRowChildren.length;j++) {
                            if (movieRowChildren[j].name == thisName) {
                                var movieRowChildrenItems = movieRowChildren[j];
                                items = doSort(movieRowChildrenItems);
                                remove(items, "area");
                                remove(items, "total");
                                remove(items, "value");
                                remove(items, "ocode");
                                remove(items, "dx");
                                remove(items, "dy");
                                remove(items, "x");
                                remove(items, "y");
                                remove(items, "depth");
                                remove(items, "z");
                                remove(items, "name");
                                remove(items, "parent");
                            }
                        }
                    }
                }

                d3.select("#tooltip #catName").text(d.name);

                var totalSec = d[currState];
                var totalFormatted = totalSec.toString().toHHMMSS();
                d3.select("#tooltip #jobsalary").text(totalFormatted);
                
                // Add employee count  
                //var empText = numberWithCommas(d[currState]) + " people";
                
                if (!isBrandMap) {
                    var top5 = items.splice(0,5);
                    var top5String = "";
                    top5.forEach(function(entry) {
                        top5String += entry + ", ";
                    });
                    top5String = top5String.replace(/, $/, ''); // removes ", " (comma space) if it's at end of string
                    d3.select("#tooltip #jobemptot").text("Top Items: " + top5String);
                }
                else {
                    d3.select("#tooltip #jobemptot").text("");
                }

                // Adjust the width and height
                var w = d3.select("#tooltip").style("width");
                var h = d3.select("#tooltip").attr("height");

                // Get mouse position and then adjust tooltip position accordingly
                var jobsNode = d3.select("#jobs").node();
                var absMousePos = d3.mouse(jobsNode);

                if (absMousePos[0] > 400) {
                    var xpos = absMousePos[0] - parseFloat(w) + 200;// - 30;
                } else {
                    var xpos = absMousePos[0] + 10;
                }

                if (absMousePos[1] < 460) {
                    var ypos = absMousePos[1] + 400;// - 50;
                } else {
                    var ypos = absMousePos[1] + 300;// - 20;
                }

                console.log(xpos, ypos);

                d3.select("#tooltip")
                    .style("left", xpos + "px")
                    .style("top", ypos + "px");

                // Display the tooltip
                d3.select("#tooltip").classed("hidden", false);
            }
        })
        .on("mouseout", function(d) {
            // Hide the tooltip
            d3.select("#tooltip").classed("hidden", true);
        });

    };
    
    //buildTreemap();


function position() {
  this.style("left", function(d) { return d.x + "px"; })
      .style("top", function(d) { return d.y + "px"; })
      .style("width", function(d) { return Math.max(0, d.dx - 1) + "px"; })
      .style("height", function(d) { return Math.max(0, d.dy - 1) + "px"; });
}

function positionParentLabels() {
    d3.selectAll(".parent").data().map(function(d) {
        
        d3.select("#plab" + d.ocode)
            .transition().duration(1000)
            .style("left", d.x + "px")
            .style("top", d.y + "px")
            .style("width", (d.dx-22) + "px")
            .style("height", (d.dy-22) + "px")
            .style("display", function() { return d.dx > 22 && showParentLab ? "block" : "none" });
        });
}

function medHighlight(d) {
      if (d.children) {
         return "parent node"; 
      } else if (d[currState+"P"] > medCutoff && !d.children) {
          return "node highlight";
      } else {
          return "node";
      }
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function doSort(theList) {
     keysSorted = Object.keys(theList).sort(function(a,b){
    return theList[b]-theList[a];
    });
    
    return keysSorted;
}


function remove(array, element) {
    const index = array.indexOf(element);
    
    if (index !== -1) {
        array.splice(index, 1);
    }
}


//takes seconds and converts to "3h 3m 8s"
String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
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

  $(document).ready(function(){
    $('.treeButton').click(function() {
        $(".treeButton.active").removeClass("active");
        $(this).addClass("active");
        //$("#treemap").addClass("fade-in");
    });
 });