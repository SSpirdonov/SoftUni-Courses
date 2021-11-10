const { expect } = require('chai') ;
const sum = require('./SumOfNumbers') ;

describe('Sumator', () => {
    it('Sums all elements of array', () => {
        expect(sum([1,2,3])).to.equal(6);
    });
});    