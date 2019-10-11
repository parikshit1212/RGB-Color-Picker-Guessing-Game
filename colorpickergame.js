var numSquares=6;
var colors=generateRandomColors(numSquares);

var pickedColor=pickColor();  
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var h1=document.querySelector("h1");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");  
colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
       // grab the color
       var clickedColor=this.style.backgroundColor;
       // if color matches
       if(clickedColor===pickedColor){
       	 messageDisplay.textContent="Correct!";
       	 resetButton.textContent="Play Again?";
       	 changeColors(clickedColor);
       	 h1.style.backgroundColor=clickedColor;
       }
       else{
       	this.style.backgroundColor="#232323"; 
       	messageDisplay.textContent="Try Again";
       } 
	});   
}
  
resetButton.addEventListener("click",function(){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<colors.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	resetButton.textContent="New Colors";
	messageDisplay.textContent="";
});

easyBtn.addEventListener("click",function(){ 
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected"); 
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i]; 
		}
		else{
			squares[i].style.display="none";
		}   
	}
}); 

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");   
	hardBtn.classList.add("selected");   
	numSquares=6;
	colors=generateRandomColors(numSquares);  
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];  
			squares[i].style.display="block"; 
	}
});

function generateRandomColors(num){
 var arr=[];
 for(var i=0;i<num;i++){
 	arr.push(randomColor());
 }
 return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}


function changeColors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=color;
	}
}
  
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}