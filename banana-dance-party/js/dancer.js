var MakeDancer = function(top, left, timeBetweenSteps,) {
  console.log("Working")
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

  var styleSettings = { top: top-100, left: left-100 };
  var moveSpeed = Math.floor(Math.random() * (5000 - 0));
  this.$node.children().css({"width":150,"height":150})
  this.$node.animate(styleSettings,moveSpeed);
};


MakeDancer.prototype.lineUp = function(numDancers, id){

  var lineLength = $('#floor').width();
  var left = (lineLength/numDancers) * id;
  console.log(lineLength);
  var styleSettings = { top: 100, left: left };
  var moveSpeed = Math.floor(Math.random() * (5000 - 0));
  this.$node.animate(styleSettings,moveSpeed)
}

/*var test = new MakeDancer(1,1,1)
console.log(test.step);*/

MakeDancer.prototype.randomDance = function(){
  var moves = ["grind","leftTap","rightTap","upDown","slide","wiggle"]
  var randomMove = Math.floor(Math.random() * (6 - 0));
  var url = this.danceData.bananas[this.name][moves[randomMove]];
  var that = this;
  setTimeout(function(){

  that.$node.children().attr("src",url);

  that.randomDance();
  },2000);
}
