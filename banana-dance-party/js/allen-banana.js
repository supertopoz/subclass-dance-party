window.MakeAllenBanana = class MakeAllenBanana extends MakeDancer{
  constructor(top, left, timeBetweenSteps,idNum,dancerName) {
    super(MakeDancer);
    this.danceData = JSON.parse(data);
    this.$node = $('<span class="dancer" id='+dancerName+'-'+idNum+'><img src="'+this.danceData.bananas[dancerName].slide+'""></span>');
    this._timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition(top, left);
    this.name = dancerName;
    this.randomDance(name);
    this.idNum = idNum
  };
}

MakeAllenBanana.prototype.specialMove = function() {
  var that = this;
  this.$node.children().addClass('rotateDancer');
  setTimeout(function() {
    that.$node.children().removeClass('rotateDancer');
  },2000);
}
