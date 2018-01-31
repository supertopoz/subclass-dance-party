window.MakeAllenBanana = class MakeAllenBanana extends MakeDancer{
  constructor(top, left, timeBetweenSteps,idNum,dancerName) {
    super(MakeDancer);
    this.danceData = JSON.parse(data);
    var html = `<span class="dancer" id=${dancerName+'-'+idNum}>
                  <img src=${this.danceData.bananas[dancerName].slide}>
                </span>`
    this.$node = $(html);
    this._timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition(top, left);
    this.name = dancerName;
    this.randomDance(name);
    this.idNum = idNum
  };
}

MakeAllenBanana.prototype.specialMove = function() {

  this.$node.children().addClass('rotateDancer');
  setTimeout(() => { this.$node.children().removeClass('rotateDancer')},2000);
}
