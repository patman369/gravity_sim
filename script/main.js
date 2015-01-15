//1 pixel = 1 meter
//100 frames = 1 second
//1 mass = 1kg

//constants
var G=0.0000000000667384;
var WIDTH = 800;
var HEIGHT = 600;
var METERS_PER_PIXEL = 1;
var pi=Math.PI;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//global variables
var mouseX, mouseY;
var simObj = [];
var objStack = [];

objStack[objStack.length] = new planet(250, 200, -5, 0, 10, 100000000000, 'green', "earth1");
objStack[objStack.length] = new planet(250, 250, 5, 0, 10, 100000000000, 'green', "earth2");
objStack[objStack.length] = new planet(250, 150, 0, 0, 5, 100, 'grey', "moon1");

//update logic
function update() {
  //update stack
  updateStack();
  //update objects
  for (var i=0; i<simObj.length; i++){
    simObj[i].update();
    simObj[i].detectCircleCollision();
  }
}

//render the state to the canvas
function render() {
  //resize canvas
  canvas.width=WIDTH;
  canvas.height=HEIGHT;
  //fill background
  ctx.rect(0,0,WIDTH,HEIGHT);
  ctx.fillStyle="black";
  ctx.fill();
  //render objects
  for (var i=0; i<simObj.length; i++){
    simObj[i].render();
  }
  //render mouse position and planets status on to screen in text
  renderPlanetStatus();
  renderMouseCoord(mouseX, mouseY);
}

//wrapper around loop function, updates and renders. 10ms=100fps
function run() {  
  setInterval(function(){
    update();
    render();
  }, 10);
}

//start and run the game
run();  //this was coded by Patrick Lockwood
