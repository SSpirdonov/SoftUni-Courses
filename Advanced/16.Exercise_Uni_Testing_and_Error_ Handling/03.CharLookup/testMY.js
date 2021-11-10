const { expect } = require('chai') ;
const { lookupChar } = require('./CharLookup') ;

describe('Correct', () => {
    it('The first parameter is NOT a string. It is a number', () => {
        expect(lookupChar(5,6)).to.be.undefined ;
    });

    it('The first parameter is NOT a string. It is an array', () => {
        expect(lookupChar([5],6)).to.be.undefined ;
    });

    it('The first parameter is NOT a string. It is an object', () => {
        expect(lookupChar({five :5},6)).to.be.undefined ;
    });

    it('The second parameter is NOT a number', () => {
        expect(lookupChar('5','1')).to.be.undefined ;
    });

    it('Return undefined when second paramether is decimal num', () => {
        expect(lookupChar('text', 3.3)).to.be.undefined
    });

    it('Return undefined when second paramether is num as string', () => {
        expect(lookupChar('abcd', '2')).to.be.undefined;
    });

    it('Not enough parameters', () => {
        expect(lookupChar('1')).to.be.undefined ;
    });

    it('Not enough parameters', () => {
        expect(lookupChar()).to.be.undefined ;
    });

    it('The value of the index is incorrect', () => {
        expect(lookupChar('abv',-1)).to.equal('Incorrect index') ;
    });

    it('The value of the index is incorrect', () => {
        expect(lookupChar('abv',3)).to.equal('Incorrect index') ;
    });

    it('Return undefined when second paramether is bigger then string length', () => {
        expect(lookupChar('abcd', 6)).to.be.equal('Incorrect index');
    });

    it('All is OK', () => {
        expect(lookupChar('abv',2)).to.equal('v') ;
    });


});