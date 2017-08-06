var colors = ["rgb(0,0,0)",
"rgb(222,0,222)",
"rgb(168,167,0)",
"rgb(145,0,0)",
"rgb(0,0,178)",
"rgb(0,167,2)"];
var squares = document.querySelectorAll(".square");
for(var i=0;i<squares.length;i++){
 squares[i].style.background = colors[i]; 
}