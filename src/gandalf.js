var youShallNotPass = new Audio('sound/YouShallNotPass.mp3');
youShallNotPass.volume = 0.2;

var Gandalf = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="dancer"></span>');
  //this.$node = $('<span class="dancer gandalf"></span>');
  this.$node.addClass("gandalf");
  this.$node.attr("src","images/gandalf.png");
  this.$node.attr("onmouseover", "gandalfOnClickFunc()");
  this.$node.attr("onmouseleave", "gandalfMouseLeave()");
};

var gandalfOnClickFunc = function(event) {
  //debugger;
  $('body').css("background-image", "url('images/youShallNotPass.gif')");
  youShallNotPass.play();
};

var gandalfMouseLeave = function(event) {
  //debugger;
  $('body').css("background-image", "url('images/bridge.jpg')");
};

Gandalf.prototype = Object.create(Dancer.prototype);

// Gandalf.prototype.step = function() {
//   Dancer.prototype.step.call(this);
//   this.$node.toggle();
// };

// Gandalf.prototype.setPosition = function(top, right) {
//   var styleSettings = {
//     top: top,
//     right: right
//   };
//   this.$node.css(styleSettings);
// };

Gandalf.prototype.constructor = Gandalf;
