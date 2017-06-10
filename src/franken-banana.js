var MakeFrankenBanana = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this);
  this.$node = $('<span class="dancer"><img src="updown50.gif" alt=""></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

MakeFrankenBanana.prototype = Object.create(MakeDancer.prototype);
MakeFrankenBanana.prototype.constructor = MakeFrankenBanana;
