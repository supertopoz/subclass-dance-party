var MakeAllenBanana = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this);
  this.$node = $('<span class="dancer"><img class="allenBanana" src="https://lh5.googleusercontent.com/Yo0__X4LSN1iLCZIDQ52VjhEoAE2g6L9GtV_9iaLR_uMaDOOwt4jWJ-XDGxJJHRF_bsANw4qsYt8AJlzi_HTrvRJy0ad07jRfD7CVrYkBIMpC1RU8K0KDOC6d4FCL_djIutiYr7v" alt=""></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);

};

MakeAllenBanana.prototype = Object.create(MakeDancer.prototype);
MakeAllenBanana.prototype.constructor = MakeAllenBanana;
