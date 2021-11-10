const { expect } = require('chai') ;
const { mathEnforcer } = require('./MathEnforcer') ;

describe('mathEnforcer', () => {
    
    describe('addFive', () => {
    
        it('Non-number parameter', () =>  {
            expect(mathEnforcer.addFive('1')).to.be.undefined ;
        });

        it('Negative number', () =>  {
            expect(mathEnforcer.addFive(-1)).to.equal(4) ;
        });

        it('Floating point parameter', () =>  {
            expect(mathEnforcer.addFive(1.1)).to.closeTo(6.1,0.01) ;
        });


    });
    describe('subtractTen', () => {
        
        it('Non-number parameter', () =>  {
            expect(mathEnforcer.subtractTen('1')).to.be.undefined ;
        });

        it('Negative number', () =>  {
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11) ;
        });

        it('Floating point parameter', () =>  {
            expect(mathEnforcer.subtractTen(1.1)).to.closeTo(-8.9,0.01) ;
        });
    });
    describe('sum', () => {
        it('Non-number parameter', () =>  {
            expect(mathEnforcer.sum('1',1)).to.be.undefined ;
            expect(mathEnforcer.sum(1,'1')).to.be.undefined ;
        });

        it('Negative numbers', () =>  {
            expect(mathEnforcer.sum(-1,-2)).to.equal(-3) ;
        });

        it('Floating point parameter', () =>  {
            expect(mathEnforcer.sum(5.635,1.321)).to.closeTo(6.96,0.01) ;
        });
    });
});