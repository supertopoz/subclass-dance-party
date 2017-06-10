var makeBlinkyDancerx = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  this.setPosition(top,left);
  this.oldStep = this.stepper;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.color("blue");
};

makeBlinkyDancerx.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancerx.prototype.constructor = makeBlinkyDancerx;


makeBlinkyDancerx.prototype.step = function(){
      this.oldStep(this.timeBetweenSteps);
      this.$node.toggle();
  }

  





