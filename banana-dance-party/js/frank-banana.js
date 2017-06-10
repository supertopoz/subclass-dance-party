var MakeFrankBanana = function (top, left, timeBetweenSteps,idNum,dancerName) {
  MakeDancer.call(this);
  this.danceData = JSON.parse(data);
  this.$node = $('<span class="dancer" id='+dancerName+'-'+idNum+'><img src="'+this.danceData.bananas[dancerName].slide+'""></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.name = dancerName;
  this.randomDance(name);
};

MakeFrankBanana.prototype = Object.create(MakeDancer.prototype);
MakeFrankBanana.prototype.constructor = MakeFrankBanana;
