const { expect} = require('chai');
const { testNumbers } = require('./testNumbers');

describe('Tests', () => {
    //let t = testNumbers ;
    beforeEach(() => t = testNumbers);
    
    describe('Regular Tests', () => {
        it('sumNumbers tests', () => {
            expect(t.sumNumbers(5,12)).to.equal('17.00');
            expect(t.sumNumbers(-5,12)).to.equal('7.00');
            expect(t.sumNumbers()).to.be.undefined;
            expect(t.sumNumbers('')).to.be.undefined;
            expect(t.sumNumbers('i')).to.be.undefined;
            expect(t.sumNumbers(1)).to.be.undefined;
            expect(t.sumNumbers('i',1)).to.be.undefined;
            expect(t.sumNumbers(1,'i')).to.be.undefined;
        });
        it('numberChecker tests', () => {
            expect(t.numberChecker(1)).to.equal('The number is odd!');
            expect(t.numberChecker(10)).to.equal('The number is even!');
            expect(t.numberChecker('1')).to.equal('The number is odd!');
            expect(t.numberChecker('10')).to.equal('The number is even!');
            expect(() => t.numberChecker('1p')).to.throw(Error,'The input is not a number!');
        })
        it('averageSumArray tests', () => {
            expect(t.averageSumArray([1,2,3])).to.equal(2);            
        });
    });
    
});