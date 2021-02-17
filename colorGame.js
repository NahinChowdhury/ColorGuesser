var numOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
	// mode button's event listeners
	for(var i = 0; i < modeButtons.length; i++){

		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");

			this.classList.add("selected");
			if(this.textContent === "Easy")numOfSquares = 3;
			else numOfSquares = 6;
			reset();
		});
	}

	for(var i = 0; i < squares.length; i++){
		// add click listeners to squares
		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(pickedColor);
				header.style.backgroundColor = clickedColor;
				//hardBtn.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again?"
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!"
			}
		});
	}

	reset();
}





function reset(){

	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	header.style.backgroundColor = "steelblue";	
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	for (var i = 0; i< squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else squares[i].style.display = "none";
	}
}




resetButton.addEventListener("click",function(){
	reset();
});

function changeColors(color){
	// loop through all squares
	for(var  i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	};
};

function pickColor(){
	// this line's syntax is : Math.random() * maxValue(excluding it) + minValue(probably excluding it)
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num){
	var arr = [];

	for(var i = 0; i < num; i++){
		// get random color and push into arr
		arr.push(randomColor());
	}

	return arr;
};

function randomColor(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);

	return "rgb("+ red+", " + green+", "+blue+")";
};