var Balrog = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass("balrog");
  this.$node.attr("src","images/balrog.png");
};



Balrog.prototype = Object.create(Dancer.prototype);

Balrog.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};


Balrog.prototype.constructor = Balrog;