var MakeRandomColorDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.randomColor();
};

MakeRandomColorDancer.prototype = Object.create(MakeDancer.prototype);
MakeRandomColorDancer.prototype.constructor = MakeRandomColorDancer;

MakeRandomColorDancer.prototype.step = function(timeBetweenSteps) {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};

MakeRandomColorDancer.prototype.randomColor = function() {
  var that = this;
  console.log(that.randomColorNumber());
  this.$node.css({border: 'solid 10px rgb(' + that.randomColorNumber() + ')'});
  setTimeout(function() {
    that.randomColor();
  }, this._timeBetweenSteps);
};

MakeRandomColorDancer.prototype.randomColorNumber = function() {
  var r = Math.floor((Math.random() * 255) + 1);
  var g = Math.floor((Math.random() * 255) + 1);
  var b = Math.floor((Math.random() * 255) + 1);

  return r + ',' + g + ',' + b;
};




//create rand num generator 1-255

//create rand color with settimeout
