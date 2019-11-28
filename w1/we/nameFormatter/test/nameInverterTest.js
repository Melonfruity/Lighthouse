const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {
  it('return an empty string when passed an empty string', function (){
    const output = nameInverter('');
    assert.isEmpty(output);
  })
  it('return a single name when passed a single name', function (){
    const output = nameInverter('eric');
    assert.isTrue(output === 'eric');
  })
  it('return a single name when passed a single name with extra spaces', function (){
    const output = nameInverter('eric ');
    assert.isTrue(output === 'eric');
  })
  it('return a last-name, first-name when passed a first and last-name', function (){
    const output = nameInverter('eric luo');
    assert.isTrue(output === 'luo, eric');
  })
  it('return a last-name, first-name when passed a first and last-name with extra spaces around the names', function (){
    const output = nameInverter(' eric luo ');
    assert.isTrue(output === 'luo, eric');
  })
  it('return an empty string when passed a single honorific', function (){
    const output = nameInverter('Dr.');
    assert.isTrue(output === '');
  })
  it('return honorific first-name when passed honorific first-name', function (){
    const output = nameInverter('Dr. eric');
    assert.isTrue(output === 'Dr. eric');
  })
  it('return a honorific last-name, first-name when passed honorific first-name last-name', function (){
    const output = nameInverter('Dr. eric luo');
    assert.isTrue(output === 'Dr. luo, eric');
  })
  it('return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words', function (){
    const output = nameInverter(' Dr. eric luo ');
    assert.isTrue(output === 'Dr. luo, eric');
  })
  it('throw an error when name is undefined', function (){
    assert.throws(() => nameInverter(undefined), /error/);
  })
});