var year = null;
  var width = 670,
      height = 500;

  var w = 310, h = 50;
  var key = d3.select("#legend1")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    var legend = key.append("defs")
      .append("svg:linearGradient")
      .attr("id", "gradient")
      .attr("x1", "0%")
      .attr("y1", "100%")
      .attr("x2", "100%")
      .attr("y2", "100%")
      .attr("spreadMethod", "pad");

    legend.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#b2d4e6")//f7fcf0")
      .attr("stop-opacity", 1);

    legend.append("stop")
      .attr("offset", "14%")
      .attr("stop-color", "#328ebd")//bae4bc")
      .attr("stop-opacity", 1);

    legend.append("stop")
      .attr("offset", "29%")
      .attr("stop-color", "#0072ad")//7bccc4")
      .attr("stop-opacity", 1);

    legend.append("stop")
      .attr("offset", "43%")
      .attr("stop-color", "#005b8a")//084081")
      .attr("stop-opacity", 1);


    legend.append("stop")
      .attr("offset", "58%")
      .attr("stop-color", "#004467")//084081")
      .attr("stop-opacity", 1);

legend.append("stop")
    .attr("offset", "72%")
    .attr("stop-color", "#0c3557")//084081")
    .attr("stop-opacity", 1);

legend.append("stop")
    .attr("offset", "86%")
    .attr("stop-color", "#002d45")//084081")
    .attr("stop-opacity", 1);

key.append("rect")
    .attr("width", w)
    .attr("height", h - 30)
    .style("fill", "url(#gradient)")
    .attr("transform", "translate(0,10)");

var y = d3.scaleLinear()
    .range([300, 0])
    .domain([700, 12]);

var yAxis = d3.axisBottom()
    .scale(y)
    .ticks(9);

key.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(0,30)")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("axis title");
