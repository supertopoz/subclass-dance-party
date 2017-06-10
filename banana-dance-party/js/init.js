$(document).ready(function() {
  window.dancers = [];

  $('#go-bananas').on('click', function(event) {
    var bananaFunctionNames = ['MakeAllenBanana', 'MakeFrankBanana', 'MakeSteveBanana', 'MakeSueBanana', 'MakeBertyBanana'];

    for (var i = 0; i < 50 ; i++) {
      var dancerMakerFunctionName = bananaFunctionNames[Math.floor(Math.random() * (5 - 0))];
      var dancerMakerFunction = window[dancerMakerFunctionName];
      var dancerName = dancerMakerFunctionName.replace('Make','').replace('Banana','').toLowerCase();
      var idNum = window.dancers.length;
      var danceFloorHeight = $('#floor').height() - 100
      var dancer = new dancerMakerFunction(
        danceFloorHeight * Math.random(),
        $('#floor').width() * Math.random(),
        Math.random() * 1000,
        idNum,
        dancerName
      );
      window.dancers.push(dancer)
      $('#floor').append(dancer.$node);
    }


  });





  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the 'data-dancer-maker-function-name' attribute of a
     * class='addDancerButton' DOM node matches one of the names of the
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
    var dancerName = dancerMakerFunctionName.replace('Make','').replace('Banana','').toLowerCase();
      // make a dancer with a random position
    var idNum = window.dancers.length;
    var danceFloorHeight = $('#floor').height() - 100
    var dancer = new dancerMakerFunction(
      danceFloorHeight * Math.random(),
      $('#floor').width() * Math.random(),
      Math.random() * 1000,
      idNum,
      dancerName
    );
    window.dancers.push(dancer)
    $('#floor').append(dancer.$node);

  });
});
