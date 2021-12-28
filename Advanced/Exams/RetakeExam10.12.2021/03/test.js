const { expect} = require('chai');
const { companyAdministration } = require('./companyAdministration');

describe('Tests', () => {
    it('hiringEmployee',() => {
        //expect(() => companyAdministration.hiringEmployee('Ivan','Se',3)).to.throw(Error,'We are not looking for workers for this position.');
        //expect(() => cinema.ticketPrice("Premi")).to.throw(Error,'Invalid projection type.');
        expect(companyAdministration.hiringEmployee('Ibaan','Programmer',3)).to.equal('Ibaan was successfully hired for the position Programmer.');
    });


});