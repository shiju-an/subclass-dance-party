var Gandalf = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="dancer"></span>');
  //this.$node = $('<span class="dancer gandalf"></span>');
  this.$node.addClass("gandalf");
  this.$node.attr("src","file:///Users/student/hrsf126-subclass-dance-party/images/gandalf.png");
};



Gandalf.prototype = Object.create(Dancer.prototype);

Gandalf.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

// Gandalf.prototype.setPosition = function(top, right) {
//   var styleSettings = {
//     top: top,
//     right: right
//   };
//   this.$node.css(styleSettings);
// };


Gandalf.prototype.constructor = Gandalf;
