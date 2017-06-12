
window.dancers = [];

// --------------------- UI event handlers -------------------------------------------------------------------------

$('#go-bananas').on('click', function(event) {
  let bananaFunctionNames = ['MakeAllenBanana', 'MakeFrankBanana', 'MakeSteveBanana', 'MakeSueBanana', 'MakeBertyBanana'];
  for (let i = 0; i < 40 ; i++) {
    let dancerMakerFunctionName = bananaFunctionNames[Math.floor(Math.random() * (5 - 0))];
    let dancerName = formatName(dancerMakerFunctionName);
    initDancer(dancerMakerFunctionName,dancerName);
  }
    
});

$('.addDancerButton').on('click', function(event) {
  let dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
  let dancerName = formatName(dancerMakerFunctionName);
  initDancer(dancerMakerFunctionName,dancerName);
});

// --------------------- /UI event handlers -------------------------------------------------------------------------



// --------------------- Dancer init -------------------------------------------------------------------------------

let formatName = (name) =>{
  return name.replace('Make','').replace('Banana','').toLowerCase();
}

let initDancer = (dancerMakerFunctionName,dancerName) => {
  
  let dancerMakerFunction = window[dancerMakerFunctionName];
  let idNum = window.dancers.length;
  let heightPos =  $('#floor').height() - 100 * Math.random();
  let leftPos = $('#floor').width() * Math.random();
  let delay = Math.random() * 1000
  let dancer = new dancerMakerFunction( heightPos, leftPos, delay, idNum, dancerName);

  window.dancers.push(dancer)
  $('#floor').append(dancer.$node);

}

// --------------------- /Dancer init -------------------------------------------------------------------------------