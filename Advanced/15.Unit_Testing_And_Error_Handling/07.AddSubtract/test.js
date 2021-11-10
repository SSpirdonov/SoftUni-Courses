const { expect } = require('chai') ;
const { createCalculator } = require('./AddSubtract') ;

describe('Sumator', ()=> {
    let instace = null ;
    beforeEach( () => {
        instance = createCalculator();
    });

    it ('Has all methods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    });

    it ('Starts empty', () => {
        expect(instance.get()).to.equal(0);
    });

    it('Adds single number', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    });

    it('Adds multiple numbers', () => {
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.equal(3);
    });

    it('Subtracts single numbers', () => {
        instance.subtract(1);
        expect(instance.get()).to.equal(-1);
    });

    it('Subtracts multiple numbers', () => {
        instance.subtract(1);
        instance.subtract(2);        
        expect(instance.get()).to.equal(-3);
    });

    it('Adds and Subtracts', () => {
        instance.add('1');
        instance.add('2');
        instance.subtract('4');        
        expect(instance.get()).to.equal(-1);
    });

    it('Works with numbers as strings', () => {
        instance.add('1');
        instance.subtract('2');        
        expect(instance.get()).to.equal(-1);
    });


});