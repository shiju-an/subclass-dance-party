var Gandalf = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="dancer"></span>');
  this.$node = $('<span class="gandalf"></span>');
};



Gandalf.prototype = Object.create(Dancer.prototype);

Gandalf.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

// Gandalf.prototype.setPosition = function(top, left) {
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);
// };


Gandalf.prototype.constructor = Gandalf;
