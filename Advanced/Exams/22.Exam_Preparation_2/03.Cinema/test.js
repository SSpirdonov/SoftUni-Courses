const { expect} = require('chai');
const { cinema } = require('./cinema');

describe('Tests', () => {
    it('Empty input array', () => {
        expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
    });
    it('Regular input array', () => {
        expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
        expect(cinema.showMovies(['King Kong'])).to.equal('King Kong');
    });
    it('projectionType is present', () => {
        expect(cinema.ticketPrice("Premiere")).to.equal(12.00);
        expect(cinema.ticketPrice("Normal")).to.equal(7.50);
        expect(cinema.ticketPrice("Discount")).to.equal(5.50);
    });
    it('projectionType is NOT present', () => {
        expect(() => cinema.ticketPrice("Premi")).to.throw(Error,'Invalid projection type.');        
    });
    it('If one of the two numbers do not exist', () => {
        
        expect(cinema.swapSeatsInHall(1)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(1.5,2)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(1,21)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(21,20)).to.equal('Unsuccessful change of seats in the hall.');                
        expect(cinema.swapSeatsInHall(-1,20)).to.equal('Unsuccessful change of seats in the hall.');                
        expect(cinema.swapSeatsInHall(1,'2')).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(23,21)).to.equal('Unsuccessful change of seats in the hall.');                
        expect(cinema.swapSeatsInHall(0,20)).to.equal('Unsuccessful change of seats in the hall.');                
        expect(cinema.swapSeatsInHall(1,0)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(1,1)).to.equal('Unsuccessful change of seats in the hall.');
        //expect(cinema.swapSeatsInHall("mov", null)).to.be.equal("Unsuccessful change of seats in the hall.");

        
    });
    it('Two projectionType are regular', () => {
        expect(cinema.swapSeatsInHall(1,20)).to.equal('Successful change of seats in the hall.');
    });


});