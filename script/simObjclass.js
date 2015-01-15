
// object definitions here
function planet(x, y, xV, yV, rds, ms, clr, nm) {
	this.xPosition=x;
	this.yPosition=y;
	this.xVelocity=xV;
	this.yVelocity=yV;
	this.mass=ms;
	this.radius=rds;
	this.color=clr;
  this.name=nm;

  	this.detectCircleCollision = function() {
	  for (var i=0; i < simObj.length; i++) {
	  	var distance = getDistance(this.xPosition, this.yPosition, simObj[i].xPosition, simObj[i].yPosition);
	  	if (distance<(this.radius+simObj[i].radius) && distance!=0) {
	  	  if (this.mass>simObj[i].mass || this.mass==simObj[i].mass) { //figuer out solution besides "mass equal to mass"
          this.xVelocity += (simObj[i].mass*simObj[i].xVelocity)/this.mass;
          this.yVelocity += (simObj[i].mass*simObj[i].yVelocity)/this.mass;
          this.mass += simObj[i].mass;
          this.radius = Math.sqrt(((Math.PI*(this.radius*this.radius))+(Math.PI*(simObj[i].radius*simObj[i].radius)))/Math.PI);
          simObj.remove(i);
	  	  }
	  	}
	  }
	};

	this.update = function () { //make this read variables from all of the planet objects and calculate gravity... also fix up the external fixer functions.
	    for (var i=0; i < simObj.length; i++) {
	       this.acceleration = calGrav(this.xPosition, this.yPosition, simObj[i].xPosition, simObj[i].yPosition, this.mass, simObj[i].mass);
	       this.angle = getAngle(this.xPosition, this.yPosition, simObj[i].xPosition, simObj[i].yPosition); 
	       this.acc = getAcc(this.angle, this.acceleration);
	       this.xVelocity += this.acc[0]/100;
	       this.yVelocity += this.acc[1]/100;
	       this.xPosition += this.xVelocity/100;
	       this.yPosition += this.yVelocity/100;
	    }
 	};

	this.render = function () {
	  //render shape
	  ctx.beginPath();
	  ctx.arc(this.xPosition*(1/METERS_PER_PIXEL), this.yPosition*(1/METERS_PER_PIXEL), this.radius*(1/METERS_PER_PIXEL), 0, 2 * Math.PI, false);
	  ctx.fillStyle = clr;
	  ctx.fill();
	};
}
