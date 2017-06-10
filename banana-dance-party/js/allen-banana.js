var MakeAllenBanana = function (top, left, timeBetweenSteps,idNum) {
  MakeDancer.call(this);
  this.$node = $('<span class="dancer" id=dancer-'+idNum+'><img class="allenBanana" src="https://lh5.googleusercontent.com/Yo0__X4LSN1iLCZIDQ52VjhEoAE2g6L9GtV_9iaLR_uMaDOOwt4jWJ-XDGxJJHRF_bsANw4qsYt8AJlzi_HTrvRJy0ad07jRfD7CVrYkBIMpC1RU8K0KDOC6d4FCL_djIutiYr7v" alt=""></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.danceData = JSON.parse(data);
  this.randomDance();
};

MakeAllenBanana.prototype = Object.create(MakeDancer.prototype);
MakeAllenBanana.prototype.constructor = MakeAllenBanana;


MakeAllenBanana.prototype.randomDance = function(){

  var moves = ["grind","leftTap","rigthTap","upDown","slide","wiggle"]
  var randomMove = Math.floor(Math.random() * (6 - 0));
  var url = this.danceData.bananas.allen[moves[randomMove]];
  var that = this;
  setTimeout(function(){
  that.$node.children().attr("src",url);
  that.randomDance();
  },2000);
}
