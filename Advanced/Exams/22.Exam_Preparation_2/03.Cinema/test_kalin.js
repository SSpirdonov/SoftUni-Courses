

describe("Tests Cinema", function () {
    describe("show movies", function () {
        it("empty arr", function () {
            expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.')
        });
        it("show arr", function () {
            expect(cinema.showMovies(['jack', 'nickson'])).to.be.equal('jack, nickson')
        });
    });

    describe("ticket price", function () {
        it("corect projection", function () {
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);

        });
        it("incorrect projection", function () {
            expect(() => cinema.ticketPrice('Premier')).to.throw(Error, 'Invalid projection type.');

        });
    });

    describe("swapSeatsInHall", function () {
        it("correct swap", function () {
            expect(cinema.swapSeatsInHall(2, 4)).to.be.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 20)).to.be.equal("Successful change of seats in the hall.");
            
        });
        it("incorrect swap", function () {
            expect(cinema.swapSeatsInHall(4)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(4.4, 6)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(4, 21)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(23, 2)).to.be.equal("Unsuccessful change of seats in the hall.");
            
            expect(cinema.swapSeatsInHall(-4, 6)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(5, '5')).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(23, 21)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall("mov", null)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(0, 4)).to.be.equal("Unsuccessful change of seats in the hall.");
            
            expect(cinema.swapSeatsInHall(4, 0)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(5, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
            
        });
    });
});