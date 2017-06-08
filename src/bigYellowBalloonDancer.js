var MakeYellowBalloonDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.colorMe();
};

MakeYellowBalloonDancer.prototype = Object.create(MakeDancer.prototype);
MakeYellowBalloonDancer.prototype.constructor = MakeYellowBalloonDancer;

MakeYellowBalloonDancer.prototype.step = function(timeBetweenSteps) {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};

MakeYellowBalloonDancer.prototype.colorMe = function() {
  this.$node.css('border', '10px solid yellow');
};
