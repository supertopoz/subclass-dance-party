/*eslint-disable no-mixed-spaces-and-tabs */
/*eslint-disable no-unused-vars */
/*eslint-disable indent */
/*eslint-disable no-console */
/*eslint-disable semi */
/*eslint-disable no-delete-var */
/*eslint-disable quotes */
/*eslint-disable no-undef */


$(document).ready(function() {


  $(document).on('mouseenter','.allenBanana', function() {
       var instanceId = $(this).parent().attr('id');
       var num = instanceId.replace("dancer-","");
       window.dancers[num].randomDance();
});

//play audio

  $('#start-music' || '#start-music-2').on('click',function(){
     var audio = document.getElementById("audio");
     audio.play();
   })


// End of document on ready
});

$('#lineUp').on('click', function(){
  var numDancers = window.dancers.length;
    if (numDancers === 0) alert("No dancers to make a line with");

  if ($(this).text() === 'Line up'){
    window.dancers.forEach( x=> {
    var id = x.$node.attr('id').replace("dancer-", "")
    x.lineUp(numDancers, id);
  });
  $(this).text("Random");
} else {
    window.dancers.forEach( x=> {
      var top = $('#floor').height() * Math.random()
      var left = $('#floor').width() * Math.random()
    x.setPosition(top, left);
    });
    $(this).text("Line up");
  }



})
