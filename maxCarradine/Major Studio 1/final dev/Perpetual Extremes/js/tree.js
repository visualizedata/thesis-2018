// function treemap() {
var width = 1000
var height = 450
var svgContainer;
var data, totaldeaths=0, deathsSquare, sideSquare=25;


var setup = function(callback){
    svgContainer = d3.select("#treemap").append("svg")
                     .attr("width",width)
                     .attr("height",height);
    d3.json("data/deaths.json",function(resp){
        data = resp;
        for(var bur in data){
            totaldeaths += parseInt(data[bur]["total"]);
        }
        var areaSquare = sideSquare*sideSquare;
        deathsSquare = parseInt((totaldeaths/(width*height))*areaSquare);
        callback();
    })
}
var tx=0,ty=0;

var drawdeaths = function(pop,color){
    d3.range(parseInt(pop/deathsSquare)).forEach(function(i){
        if(ty>height){
            ty=0;
            tx=tx+sideSquare;
        }
         svgContainer.append("rect")
                     .attr("x",tx)
                     .attr("y",ty)
                     .attr("width",sideSquare-1)
                     .attr("height",sideSquare-1)
                     .style("fill",color)
                     .style("fill-opacity",0)
                     .attr("class","tr")
                     .transition()
                     .delay(i*3)
                     .duration(20)
                     .style("fill-opacity",1)
                        ty=ty+sideSquare


        

 


    })
}
      
setup(function(){
    //When setup is complete
    drawdeaths(totaldeaths,"#85929E");
    tx=0;
    ty=0;
    d3.selectAll(".btn").on("click",function(){

        var val = d3.select(event.target).html();
        if(val=="See 1995"){
            drawdeaths(data["1995"]["total"],data["1995"]["color"]);
        }else if(val=="See 1999"){
            drawdeaths(data["1999"]["total"],data["1999"]["color"]);
                    
        }
    })
});      

// }
