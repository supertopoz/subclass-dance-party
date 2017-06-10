var MakeDancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function(timeBetweenSteps) {
  var that = this;
  setTimeout(function() { that.step(); }, this._timeBetweenSteps);
};


MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = { top: top, left: left };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.colorMe = function(color) {
  this.$node.css('border', '10px solid ' + color);
};

/*var test = new MakeDancer(1,1,1)
console.log(test.step);*/
