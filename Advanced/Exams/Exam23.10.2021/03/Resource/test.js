const { expect} = require('chai') ;
const { library } = require('./library');

describe('Tests', () => {
    describe("calcPriceOfBook", () => {
        
        it ('Has all methods', () => {
            expect(library).to.has.ownProperty('calcPriceOfBook');
            expect(library).to.has.ownProperty('findBook');
            expect(library).to.has.ownProperty('arrangeTheBooks');
        });

        it("Normal case", () => {        
            expect(library.calcPriceOfBook('Ivanov',2020)).to.equal(`Price of Ivanov is 20.00`)   
        });

        it("Dicount case", () => {        
            expect(library.calcPriceOfBook('Ivanov',1980)).to.equal(`Price of Ivanov is 10.00`)   
        });

        it('Invalid input', () => {
            //expect(library.calcPriceOfBook(1,2)).to.throw(Error,"Invalid input");
            expect(() => library.calcPriceOfBook()).to.throw(Error, "Invalid input");
        })

     });
     // TODO: …
});
