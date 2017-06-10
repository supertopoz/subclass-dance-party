describe('MakeDancer', function() {

  var MakeDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    MakeDancer = new MakeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(MakeDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node Blink', function() {
    sinon.spy(MakeDancer.$node, 'toggle');
    MakeDancer.step();
    expect(MakeDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(MakeDancer, 'step');
      expect(MakeDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);

      expect(MakeDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(MakeDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('BigYellowBalloonDancer', function() {

  var MakeDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    MakeDancer = new MakeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(MakeDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node Blink', function() {
    sinon.spy(MakeDancer.$node, 'toggle');
    MakeDancer.step();
    expect(MakeDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(MakeDancer, 'step');
      expect(MakeDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);
      expect(MakeDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(MakeDancer.step.callCount).to.be.equal(2);
    });
      it('should have a border color of yellow', function() {
      sinon.spy(BigYellowBalloonDancer, 'colorMe');
      BigYellowBalloonDancer.colorMe('yellow');
      expect(BigYellowBalloonDancer.$node.css.called).to.be.true;
    });
  });
});
