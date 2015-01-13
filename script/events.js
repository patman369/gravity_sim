document.getElementById("submit-button").addEventListener("click", function () {;
  var X = parseInt(document.getElementById("input-X").value);
  var Y = parseInt(document.getElementById("input-Y").value);
  var Xv = parseInt(document.getElementById("input-Xv").value);
  var Yv = parseInt(document.getElementById("input-Yv").value);
  var radius = parseInt(document.getElementById("input-radius").value);
  var mass = parseInt(document.getElementById("input-mass").value);
  var color = document.getElementById("input-color").value;
  var name = document.getElementById("input-name").value;
  simObj[simObj.length] = new planet(X, Y, Xv, Yv, radius, mass, color, name);
});
    
canvas.addEventListener('mousemove', function(evt) {
  var rect = canvas.getBoundingClientRect();
  mouseX = evt.clientX - rect.left;
  mouseY = evt.clientY - rect.top;
});

document.getElementById("clear-button").addEventListener("click", function () {;
  simObj = [];
});
