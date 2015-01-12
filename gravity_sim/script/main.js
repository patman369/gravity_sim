//1 pixel = 1 meter
//100 frames = 1 second
//1 mass = 1kg

//constants
var G=0.0000000000667384;
var pi=Math.PI;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//physics objects
var simObj = [];
var earthObj = new planet(250, 200, 0, 0, 10, 100000000000, 'green');
var moonObj = new planet(250, 250, 8, 0, 5, 100, 'grey');
var moonObj2 = new planet(250, 185, 13, 0, 5, 100, 'grey');
simObj[simObj.length]=earthObj;
simObj[simObj.length]=moonObj;
simObj[simObj.length]=moonObj2;

//update logic
function update() {
  //update objects
  earthObj.update();
  moonObj.update();
  moonObj2.update();
}

//render the state to the canvas
function render() {
  //resize canvas
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
  //fill background
  ctx.rect(0,0,window.innerWidth,window.innerHeight);
  ctx.fillStyle="black";
  ctx.fill();
  //render objects
  for (i=0; i<simObj.length; i++){
    simObj[i].render();
  }
}

//wrapper around loop function, updates and renders. 10ms=100fps
function run() {  
	setInterval(function(){
		update();
		render();
    renderStatus();
	}, 10);
}

//start and run the game
run();  //this was coded by Patrick Lockwood and if you steal it you suck.