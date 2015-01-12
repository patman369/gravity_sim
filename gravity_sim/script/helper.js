
function getAngle(xa, ya, xb, yb) {
  var xd = xb - xa;
  var yd = yb - ya;
  var angle = Math.atan2(xd*-1, yd*-1)*(360 / (2*pi));
  if (angle < 0) {angle = Math.abs(angle-180)}
  return angle
}

function calGrav(xa, ya, xb, yb, ma, mb) {
  ma *= 1000;
	mb *= 1000;
  if(xa-xb==0 && ya-yb==0){return 0;}
	var xd = xb-xa;
	var yd = yb-ya;
	var sum = Math.abs(Math.pow(xd,2))+Math.abs(Math.pow(yd,2));
	var distance = Math.sqrt(sum);
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
    if (a < 0) {
          var xAcc = acc*(Math.cos((a)*(Math.PI/180))); //angle coming in in degrees become radians
          var yAcc = acc*(Math.sin((a)*(Math.PI/180))); //angle coming in in degrees become radians
    }else{
          var xAcc = acc*(Math.sin((a)*(Math.PI/180))); //angle coming in in degrees become radians
          var yAcc = acc*(Math.cos((a)*(Math.PI/180))); //angle coming in in degrees become radian 
    }
    if (a>180) {
      yAcc *= -1
    }
    var acceleration = [];
	  acceleration[0]=xAcc;
	  acceleration[1]=yAcc;
    return acceleration;
}
