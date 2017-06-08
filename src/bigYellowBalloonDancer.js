var MakeYellowBalloonDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.colorMe('yellow');
  this.grow();
};

MakeYellowBalloonDancer.prototype = Object.create(MakeDancer.prototype);
MakeYellowBalloonDancer.prototype.constructor = MakeYellowBalloonDancer;

/*MakeYellowBalloonDancer.prototype.step = function(timeBetweenSteps) {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};*/

MakeYellowBalloonDancer.prototype.grow = function() {
  var that = this;
  this.$node.animate(
    { borderWidth: 20,
      borderRadius: 50,
      margin: '0 auto'},
    1000,
    function() {
      that.shrink();
    });

};

MakeYellowBalloonDancer.prototype.shrink = function() {
  var that = this;
  this.$node.animate(
    { borderWidth: 5,
      borderRadius: 50,
      margin: '0 auto'},
    1000,
    function() {
      that.grow();
    });
};
