const library = require('./library');
const { assert, expect } = require('chai');

describe("Test Library functionallity", function() {
    describe("Test calcPriceOfBook", function() {
        it("calcPriceOfBook should return 20.00 and year is 1990", function() {
            let price = 20
            let expectedResult = `Price of My Title is 20.00`;
            let actualResult = library.calcPriceOfBook('My Title', 1990);
            expect(expectedResult).to.equal(actualResult);
        });

        it("calcPriceOfBook should return descreased price when year is equal to 1980", function() {
            let expectedResult = `Price of My Title is 10.00`;
            let actualResult = library.calcPriceOfBook('My Title', 1980) 
            expect(expectedResult).to.equal(actualResult);
        });

        it("calcPriceOfBook should return descreased price when year is equal to 1979", function() {
            let expectedResult = `Price of My Title is 10.00`;
            let actualResult = library.calcPriceOfBook('My Title', 1979);
            expect(expectedResult).to.equal(actualResult);
        });

        it("calcPriceOfBook should should throw ex when name is array", function() {
            assert.throw(() => library.calcPriceOfBook([], 1979))
         //   expect().to.throw(error);
        });

        it("calcPriceOfBook should should throw ex when name is undefined", function() {
            assert.throw(() => library.calcPriceOfBook(undefined, 1979));
        });

        it("calcPriceOfBook should should throw ex when name is null", function() {
            assert.throw(() => library.calcPriceOfBook(null, 1979));
        });

        it("calcPriceOfBook should should throw ex when name is object", function() {
            assert.throw(() => library.calcPriceOfBook({}, 1979));
        });

        it("calcPriceOfBook should should throw ex when year is double", function() {
            assert.throw(() => library.calcPriceOfBook('My Title', 1979.25));
        });

        it("calcPriceOfBook should should throw ex when year is string", function() {
            assert.throw(() => library.calcPriceOfBook('My Title', '1979'));
        });

        it("calcPriceOfBook should should throw ex when year is Nan", function() {
            assert.throw(() => library.calcPriceOfBook('My Title', NaN));
        });

        it("calcPriceOfBook should should throw ex when year is undefined", function() {
            assert.throw(() => library.calcPriceOfBook('My Title', undefined));
        });
        
        it("calcPriceOfBook should should throw ex when year is object", function() {
            assert.throw(() => library.calcPriceOfBook('My Title', {}));
        });

        it("calcPriceOfBook should should throw ex when year is array", function() {
            assert.throw(() => library.calcPriceOfBook('My Title', []));
        });
     });
    

     describe("Test findBook", function() {
        it("findBook should return success message when book is found", function() {
            let expectedResult = `We found the book you want.`;
            let actualResult = library.findBook(['Spiderman', 'Pod igoto'], 'Pod igoto');
            expect(expectedResult).to.equal(actualResult);
        });

        it("findBook should throws when array is empty", function() {
            //test meesage of ex?
            assert.throw(() => library.findBook([], 'Pod Igoto'));
        });

        it("findBook should return no found message when book is not found", function() {
            let expectedResult = `The book you are looking for is not here!`;
            let actualResult = library.findBook(['Spiderman', 'Pod igoto'], 'Druga kniga');
            expect(expectedResult).to.equal(actualResult);
        });

        it("findBook should return no found message when book is not found", function() {
            let expectedResult = `The book you are looking for is not here!`;
            let actualResult = library.findBook(['Spiderman', 6], 'Druga kniga');
            expect(expectedResult).to.equal(actualResult);
        });
     });

     describe("Test arrangeTheBooks", function() {
        it("arrangeTheBooks should return success message when books are below 40", function() {
            //countShelves = 40
            let expectedResult = `Great job, the books are arranged.`;
            let actualResult = library.arrangeTheBooks(35);
            expect(expectedResult).to.equal(actualResult);
        });

        it("arrangeTheBooks should return success message when books are exact 40", function() {
            //countShelves = 40
            let expectedResult = `Great job, the books are arranged.`;
            let actualResult = library.arrangeTheBooks(40);
            expect(expectedResult).to.equal(actualResult);
        });

        it("arrangeTheBooks should return no success message when books are above 40", function() {
            //countShelves = 40
            let expectedResult = `Insufficient space, more shelves need to be purchased.`;
            let actualResult = library.arrangeTheBooks(41);
            expect(expectedResult).to.equal(actualResult);
        });

        it("arrangeTheBooks should throw ex when count is string", function() {
            assert.throw(() => library.arrangeTheBooks('40'));
        });

        it("arrangeTheBooks should throw ex when count is string", function() {
            assert.throw(() => library.arrangeTheBooks('somestring'));
        });

        it("arrangeTheBooks should throw ex when count is array", function() {
            assert.throw(() => library.arrangeTheBooks([]));
        });

        it("arrangeTheBooks should throw ex when count is object", function() {
            assert.throw(() => library.arrangeTheBooks({}));
        });

        it("arrangeTheBooks should throw ex when count is double", function() {
            assert.throw(() => library.arrangeTheBooks(4.50));
        });

        it("arrangeTheBooks should throw ex when count is negative", function() {
            assert.throw(() => library.arrangeTheBooks(-5));
        });
    });
})