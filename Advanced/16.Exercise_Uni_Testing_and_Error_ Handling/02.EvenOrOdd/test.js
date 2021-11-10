const { expect } = require('chai') ;
const { isOddOrEven } = require('./EvenOrOdd') ;

describe('isOddOrEven', () => {
    it ('Input is a number', () => {
        expect(isOddOrEven(5)).to.be.undefined ;
    });

    it ('Input is a array', () => {
        expect(isOddOrEven([5,'we'])).to.be.undefined ;
    });

    it ('Input is a object', () => {
        expect(isOddOrEven({wel: 18})).to.be.undefined ;
    });

    it ('String has an even length', () => {
        expect(isOddOrEven('Abcd')).to.equal('even');
    });

    it ('String has an odd length', () => {
        expect(isOddOrEven('Abc')).to.equal('odd');
    });

    it ('Input is a boolean true', () => {
        expect(isOddOrEven(true)).to.be.undefined ;
    });

    it ('Input is a boolean false', () => {
        expect(isOddOrEven(false)).to.be.undefined ;
    });

});