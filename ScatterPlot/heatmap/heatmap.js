

var baseTemp;
var variances = [];

const w =1000 //document.getElementById('graph').offsetWidth;
const h =600 //document.getElementById('graph').offsetHeight;
const padding = 60;
// console.log(w,h)

var xScale;
var yScale;

const svg = d3.select('#graph');
const tooltip = d3.select('#tooltip');

function generateScales(){
  xScale = d3.scaleLinear()
    // .domain([variances[0].year, variances[variances.length-1].year])
    .range([padding, w-padding]);
  // yScale = d3.scaleLinear()
  //   .domain([1, 12])
  //   .range([h-padding, padding]);
}
function generateCells(){
  
}
function generateAxis(){
  const xAxis = d3.axisBottom(d3.scaleLinear().range([padding, w-padding]));
  // const yAxis = d3.axisLeft(yScale);
  
  svg.append("g")         
    .attr('id','x-axis')
    .call(xAxis);
  // svg.append("g")
  //   .attr('id','y-axis')
  //   .call(yAxis);
}
d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json').then(function(data){ 
baseTemp = data.baseTemperature;
variances = data.monthlyVariance;
  
  generateScales();
  generateCells();
  generateAxis();
});
//My heat map should have rect elements with a class="cell" that represent the data.
//There should be at least 4 different fill colors used for the cells.
//Each cell will have the properties data-month, data-year, data-temp containing their corresponding month, year, and temperature values.