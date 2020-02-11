$(document).ready(function() {
  window.fireDancers = [];
  window.gandalfDancers = [];
  window.balrogDancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.fireDancers.push(dancer);
    console.log(window.fireDancers);
  });

  $('.addFireLineupButton').on('click', function(event) {
    var top = 100;
    var left = 250;

    for (var i = 0; i < window.fireDancers.length; i++) {
      window.fireDancers[i].lineup(top, left);
      top += 50;
      left += 50;
    }
  });

  $('.addGandalfButton').on('click', function(event) {
    var gandalfMakerFunctionName = $(this).data('dancer-maker-function-name');

    var gandalfMakerFunction = window[gandalfMakerFunctionName];

    var gandalfDance = new gandalfMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(gandalfDance.$node);

    window.gandalfDancers.push(gandalfDance);
  });

  $('.addGandalfLineupButton').on('click', function(event) {
    var top = 250;
    var left = 600;

    for (var i = 0; i < window.gandalfDancers.length; i++) {
      window.gandalfDancers[i].lineup(top, left);
      top += 50;
      left += 25;
    }
  });

  $('.addBalrogButton').on('click', function(event) {
    var balrogMakerFunctionName = $(this).data('dancer-maker-function-name');

    var balrogMakerFunction = window[balrogMakerFunctionName];

    var balrogDance = new balrogMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(balrogDance.$node);

    window.balrogDancers.push(balrogDance);
  });


  $('.addBalrogLineupButton').on('click', function(event) {
    var top = 100;
    var left = 100;

    for (var i = 0; i < window.balrogDancers.length; i++) {
      window.balrogDancers[i].lineup(top, left);
      top += 50;
    }
  });

  // $('.dancer').on('click', function(event) {
  //   //debugger;
  //   $('body').css("background-image", "url('file:///Users/student/hrsf126-subclass-dance-party/images/youShallNotPass.gif')");
  // });



});

