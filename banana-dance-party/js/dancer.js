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
  var styleSettings = { top: top, left: left-100 };
  this.$node.animate(styleSettings,1000);
};


MakeDancer.prototype.lineUp = function(numDancers, id){
    
  var lineLength = $('#floor').width();
  var left = (lineLength/numDancers) * id -50;
  var styleSettings = { top: '75%', left: left };
//  var transition = this.$node.css(styleSettings);
  this.$node.animate(styleSettings,1000)
}

/*var test = new MakeDancer(1,1,1)
console.log(test.step);*/
