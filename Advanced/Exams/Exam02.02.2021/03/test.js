const { expect} = require('chai');
const { numberOperations } = require('./NumberOperations_Resources');

describe('Tests', () => {

    describe('powNumber', () => {
        it('num * num', () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
            expect(numberOperations.powNumber(-2)).to.equal(4);
            expect(numberOperations.powNumber(0)).to.equal(0);
        });
    });
    describe('numberChecker', () => {        
        it('Empty string or lower than 100',() => {
            expect(numberOperations.numberChecker('')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('0')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('-1')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('5')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(-1)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(5)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker([])).to.equal('The number is lower than 100!');
        });
        it('Greater or equal to 100',() => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('100')).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('101')).to.equal('The number is greater or equal to 100!');
        });
        it('The input is not a number!',() => {
            expect(() => numberOperations.numberChecker('str')).to.throw(Error,'The input is not a number!');                    
            expect(() => numberOperations.numberChecker({})).to.throw(Error,'The input is not a number!');                       
            expect(() => numberOperations.numberChecker([1,2,3])).to.throw(Error,'The input is not a number!');           
        });
    
    });
    describe('sumArrays', () => {
        it('two arrays', () => {
           expect(numberOperations.sumArrays([1,2,3,4,25],[1,2,3,4])).to.eql([2, 4, 6, 8, 25]);
        });
    });
});