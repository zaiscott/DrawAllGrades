var PenguinPromise = d3.json("classData.json")
PenguinPromise.then(function(penguins)
{
  console.log(penguins)
  var screen = {width:400,height:500}
  var margins = {top:10,right:50,bottom:50,left:50}
   
  
},

function(err)
                    {
    console.log("error", err)
})

var setup = function(penguin)
{
    d3.selct("svg")
      .attr("width",screen.width)
      .attr("height",screen.height)
      .append("g")
      .attr("id","graph")
      .attr("transform","translate("+margins.left+","+margins.top+")");
      
    var width = screen.width - margins.left - margins.right; 
    var height = screen.height - margins.top - margins.bottom;
    
    var xScale = d3.scaleLinear()
    xScale.domain([
    ])
    
    xScale.range([0, screen.width-10])
    
    var yScale = d3.scaleLinear()
    yScale.domain([
       
    ])
     yScale.range([screen.height-20, 500]) 
}
