//1 pixel = 1 meter
//100 frames = 1 second
//1 mass = 1kg

//constants
var G=0.0000000000667384;
var WIDTH = 800;
var HEIGHT = 600;
var pi=Math.PI;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var mouseX, mouseY;
var simObj = [];

//update logic
function update() {
  //update objects
  for (var i=0; i<simObj.length; i++){
    simObj[i].update();
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
    writeMessage();
  }, 10);
}

//start and run the game
run();  //this was coded by Patrick Lockwood and if you steal it you suck.
