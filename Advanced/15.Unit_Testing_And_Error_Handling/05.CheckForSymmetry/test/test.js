const { expect} = require('chai') ;
const isSymmetric = require('./CheckForSymmetry');
describe('Symmetry Checker', () => {
    it ('Return true for symetric array', () => {
        expect(isSymmetric([1,2,2,1])).to.be.true ;
    });

    it('Returns false for non-symetric arrray', () => {
        expect(isSymmetric([1,2,3])).to.be.false ;
    });

    it('Returns false for non-arrray', () => {
        expect(isSymmetric(5)).to.be.false ;
    });

    it('Returns false for type-different symmetric arrray', () => {
        expect(isSymmetric([1,2,'1'])).to.be.false ;
    });

});