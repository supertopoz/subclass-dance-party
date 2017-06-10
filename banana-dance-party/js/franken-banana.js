var MakeFrankenBanana = function (top, left, timeBetweenSteps,idNum) {
  MakeDancer.call(this);
  this.$node = $('<span class="dancer" id=dancer-'+idNum+'><img src="https://lh3.googleusercontent.com/BIvnUEd4l2JcwwWk88nqR3skLLrhH3bEBv7WSEMlaWOayQCEoPeeZV65c1sww6wUD4RkV-zwZNHXh_GQYcsy2z85gQp6qph96aVfWcoYtcU61ZcEtXzFJgJ3_E-aFjC7-2Kmbk4q" alt=""></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

MakeFrankenBanana.prototype = Object.create(MakeDancer.prototype);
MakeFrankenBanana.prototype.constructor = MakeFrankenBanana;
