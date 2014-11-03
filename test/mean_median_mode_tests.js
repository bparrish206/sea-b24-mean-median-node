var expect = require('chai').expect;
var mmm = require('../lib/mean_median_mode');

describe('Mean', function() {
  it('gets an accurate mean', function() {
    expect(mmm.Mean([2,4,6])).to.eql(4);
  });
});

describe('Median', function() {
  it('gets an accurate median', function() {
    expect(mmm.Median([4,5,6])).to.eql(5);
  });
});

describe('Mode', function() {
  it('gets an accurate mode', function() {
    expect(mmm.Mode([5,5,6,7])).to.eql(5);
  });
});
