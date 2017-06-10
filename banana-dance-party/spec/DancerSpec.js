describe('MakeDancer', function() {
  var dancer, clock, allen,berty;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new MakeDancer(10, 20, timeBetweenSteps);
    allen = new MakeAllenBanana(10,20,timeBetweenSteps,0, 'allen');
    berty = new MakeBertyBanana(10,20,timeBetweenSteps,0, 'berty');
    sue = new MakeSueBanana(10,20,timeBetweenSteps,0, 'sue');
    steve = new MakeSteveBanana(10,20,timeBetweenSteps,0, 'steve');
    frank = new MakeFrankBanana(10,20,timeBetweenSteps,0, 'frank');
  });

  it('should have a jQuery $node object', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node Blink', function() {
    sinon.spy(dancer.$node, 'toggle');
    dancer.step();
    expect(dancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(dancer, 'step');
      expect(dancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seemsdancer an extra tick is necessary...
      // clock.tick(timeBetweenSteps);
      expect(dancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(dancer.step.callCount).to.be.equal(2);
    });
  });
      describe('Allen dancer', function() {
      it('Should have a jQuery $node object', function() {
      expect(allen.$node).to.be.an.instanceof(jQuery);
    });
  /*    it('Should have a special subclassed spin method', function() {
       sinon.spy(dancer, 'specialMove');
       dancer.specialMove();
       expect(dancer.$node.specialMove.called).to.be.true;
  });*/

  });
      describe('Berty dancer', function() {
      it('Should have a jQuery $node object', function() {
      expect(berty.$node).to.be.an.instanceof(jQuery);
    });
    });
      describe('Sue dancer', function() {
      it('Should have a jQuery $node object', function() {
      expect(sue.$node).to.be.an.instanceof(jQuery);
    });
    });
      describe('Steve dancer', function() {
      it('Should have a jQuery $node object', function() {
      expect(steve.$node).to.be.an.instanceof(jQuery);
    });
    });
      describe('Frank dancer', function() {
      it('Should have a jQuery $node object', function() {
      expect(frank.$node).to.be.an.instanceof(jQuery);
    });
    });



});
