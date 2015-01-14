function getAngle(xa, ya, xb, yb) {
  var xd = xb - xa;
  var yd = yb - ya;
  var angle = Math.atan2(xd*-1, yd*-1)*(360 / (2*pi));
  return angle
}

function getDistance(xa, ya, xb, yb) {
  var xd = xb-xa;
  var yd = yb-ya;
  var sum = Math.abs(Math.pow(xd,2))+Math.abs(Math.pow(yd,2));
  return Math.sqrt(sum);
}

function calGrav(xa, ya, xb, yb, ma, mb) {
  ma *= 1000;
  mb *= 1000;
  if(xa-xb==0 && ya-yb==0){return 0;}
  var distance = getDistance(xa, ya, xb, yb);
  var F = G*((ma*mb)/Math.pow(distance,2));
  var A = (F/ma);
  return A;
}   

function getAcc(angle, acceleration) {
  var acc = acceleration*-1;  
  if(acc==0){
    var acceleration = [];
    acceleration[0]=0;
    acceleration[1]=0;
    return acceleration;
  }
  var a = angle;
  var xAcc = acc*(Math.sin((a)*(Math.PI/180))); //angle coming in in degrees become radians
  var yAcc = acc*(Math.cos((a)*(Math.PI/180)));
    
  if (a>180) {
    yAcc *= -1
  }

  var acceleration = [];
  acceleration[0]=xAcc;
  acceleration[1]=yAcc;
  return acceleration;
}

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

function renderPlanetStatus() {
    //render stats of all objects in simObj
    for (i=0; i<simObj.length; i++){
      ctx.font = "15px Arial";
      ctx.fillStyle="green";
      ctx.fillText(simObj[i].name+" "+"Mass: "+simObj[i].mass+" "+"Xv:"+Math.round(simObj[i].xVelocity)+"  "+"Yv:"+Math.round(simObj[i].yVelocity*-1),500,25+(i*16));
    }
}
 
function renderMouseCoord(X, Y) {
  ctx.font = '18pt Calibri';
  ctx.fillStyle = 'green';
  ctx.fillText('Mouse position: ' + X*METERS_PER_PIXEL + ',' + Y*METERS_PER_PIXEL, 10, 25);
}

function zoomIn() {
  if(METERS_PER_PIXEL!=1){
    METERS_PER_PIXEL -= 1;
  }
}
function zoomOut() {
  METERS_PER_PIXEL += 1;
}
