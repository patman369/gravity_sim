
document.getElementById("submit-button").addEventListener("click", function () {
  var X = parseInt(document.getElementById("input-X").value);
  var Y = parseInt(document.getElementById("input-Y").value);
  var Xv = parseInt(document.getElementById("input-Xv").value);
  var Yv = parseInt(document.getElementById("input-Yv").value);
  var radius = parseInt(document.getElementById("input-radius").value);
  var mass = parseInt(document.getElementById("input-mass").value);
  var color = document.getElementById("input-color").value;
  var name = document.getElementById("input-name").value;
  
  var XvIsNaN = isNaN(Xv);
  var YvIsNaN = isNaN(Yv);
  var massIsNaN = isNaN(mass);
  
  if (X>0 && Y>0 && XvIsNaN===false && YvIsNaN===false && radius>0 && massIsNaN===false ) {
    objStack[objStack.length] = new planet(X, Y, Xv, Yv, radius, mass, color, name);
  }else{
    alert("Please input proper variable types");
  }
});
    
canvas.addEventListener('mousemove', function(evt) {
  var rect = canvas.getBoundingClientRect();
  mouseX = evt.clientX - rect.left;
  mouseY = evt.clientY - rect.top;
});

document.getElementById("save").addEventListener("click", function () {
  save();
});

document.getElementById("load").addEventListener("click", function () {
  load();
});

document.getElementById("clear-button").addEventListener("click", function () {
  simObj = [];
  objStack = [];
});

document.getElementById("zoomIn-button").addEventListener("click", function () {
  zoomIn();
});

document.getElementById("zoomOut-button").addEventListener("click", function () {
  zoomOut();
});

document.getElementById("init-button").addEventListener("click", function () {
  stackToSim();
});

document.getElementById("canvas").addEventListener("click", function () {
  document.getElementById("input-X").value = mouseX*METERS_PER_PIXEL;
  document.getElementById("input-Y").value = mouseY*METERS_PER_PIXEL;
});



