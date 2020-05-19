
var width = 600
var height = 400
var svgContainer;
var data, totalPopulation=0, populationSquare, sideSquare=20;

var setup = function(callback){
    svgContainer = d3.select("body").append("svg")
                     .attr("width",width)
                     .attr("height",height);
    d3.json("data.json",function(resp){
        data = resp;
        for(var bur in data){
            totalPopulation += parseInt(data[bur]["total"]);
        }
        var areaSquare = sideSquare*sideSquare;
        populationSquare = parseInt((totalPopulation/(width*height))*areaSquare);
        console.log(totalPopulation +"--"+populationSquare);
        callback();
    })
}
var x=0,y=0;
var drawPopulation = function(pop,color){
    d3.range(parseInt(pop/populationSquare)).forEach(function(i){
        if(y>height){
            y=0;
            x=x+sideSquare;
        }
         svgContainer.append("rect")
                     .attr("x",x)
                     .attr("y",y)
                     .attr("width",sideSquare-1)
                     .attr("height",sideSquare-1)
                     .style("fill",color)
                     .style("fill-opacity",0)
                     .transition()
                     .delay(i*2)
                     .duration(1)
                     .style("fill-opacity",1)
         y=y+sideSquare;
    })
}
      
setup(function(){
    //When setup is complete
    drawPopulation(totalPopulation,"#888888");
    x=0;
    y=0;
    d3.selectAll(".btn").on("click",function(){

        var val = d3.select(event.target).html();
        if(val=="1995"){
            drawPopulation(data["1995"]["total"],data["1995"]["color"]);
        }else if(val=="1999"){
            drawPopulation(data["1999"]["total"],data["1999"]["color"]);
                    
        }
    })
});      


