//var body = document.getElementById("test");

/*
function init() {
  circles = d3.select(svg).selectAll('g');
  console.log(circles);
  console.log(svg);
}
*/
var data = [
  [453, 81, 10], [436, 219, 9], [415, 392, 3], [450, 375, 5],
  [488, 304, 4], [481, 480, 5], [492, 448, 7], [479, 505, 6],
  [428, 314, 9], [381, 280, 5], [392, 128, 8], [409, 105, 3]
];

var names = ["a","b","c","d","e","f","g","h","i"];

var svgSelection = d3.select("div").append("svg")
                                     .attr("width", 800)
                                     .attr("height", 1000)

circleRadii = [40, 20, 10]



/*
var circleAttributes = circleSelection
                       .attr("cx", 50)
                       .attr("cy", 50)
                       .attr("r", function (d) { return d; })
                       .style("fill", "green");
                       */

for(var i = 0; i < data.length; i++){
    var circleSelection = svgSelection.append("circle")
                                      .attr("cx", data[i][0])
                                      .attr("cy", data[i][1])
                                      .attr("r", data[i][2])
                                      .style("fill", "cyan")
                                      .transition()
                                        .duration(2000)
                                        .attr("r", data[i][2]*6)
                                        .style("fill-opacity", 0)
                                      .transition()
                                        .duration(800)
                                        .style("fill-opacity", 50);



}





function circle(e){
  var x = event.offsetX;
  var y = event.offsetY;
  var circleSelection = svgSelection.append("circle")
                                     .attr("cx", x)
                                     .attr("cy", y)
                                     .attr("r", 25)
                                     .style("fill", "purple");
}

function printing(e){
  console.log("[" + event.offsetX + ", " + event.offsetY + "]");
}

//body.addEventListener("click", printing);
//svg.addEventListener("click", init);



//////////////////////////////////////////////
var data = [4, 8, 15, 16, 23, 42];

d3.select(".chart")
  .selectAll('div')
  .data(data)
  .enter().append('div')
  .style("width", function(d){
  return d*10+"px";})
  .text(function(d){return d});

<!--
var chart = d3.select(".chart");

var bar = chart.selectAll("div");

var barUpdate = bar.data(data);

var barEnter = barUpdate.enter().append("div");

barEnter.style("width", function(d) {
return d * 10 + "px"; });

barEnter.text(function(d) { return d; });
