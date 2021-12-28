const { expect} = require('chai');
const { companyAdministration } = require('./companyAdministration');



describe('Tests', () => {
    
    it('hiringEmployee', () => {
        expect(() => companyAdministration.hiringEmployee('Iv',"pas",4)).to.throw(Error,'We are not looking for workers for this position.');
        expect(() => companyAdministration.hiringEmployee('Iv',"pas",3)).to.throw(Error,'We are not looking for workers for this position.');
        expect(companyAdministration.hiringEmployee('Iv',"Programmer",2)).to.equal(`Iv is not approved for this position.`);
        expect(companyAdministration.hiringEmployee('Iv',"Programmer",4)).to.equal(`Iv was successfully hired for the position Programmer.`);
        expect(companyAdministration.hiringEmployee('Iv',"Programmer",3)).to.equal(`Iv was successfully hired for the position Programmer.`);
    });
    it('calculateSalary', () => {
        expect(companyAdministration.calculateSalary(4)).to.equal(60);
        expect(companyAdministration.calculateSalary(0)).to.equal(0);
        expect(companyAdministration.calculateSalary(170)).to.equal(3550);
        expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        
        expect(() => companyAdministration.calculateSalary()).to.throw(Error,"Invalid hours");
        expect(() => companyAdministration.calculateSalary('4')).to.throw(Error,"Invalid hours");
        expect(() => companyAdministration.calculateSalary([])).to.throw(Error,"Invalid hours");
        expect(() => companyAdministration.calculateSalary([1])).to.throw(Error,"Invalid hours");
        expect(() => companyAdministration.calculateSalary(['2'])).to.throw(Error,"Invalid hours");
        expect(() => companyAdministration.calculateSalary({})).to.throw(Error,"Invalid hours");
        expect(() => companyAdministration.calculateSalary(-1)).to.throw(Error,"Invalid hours");        
                
    });
    it('firedEmployee', () => {
        expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"],1)).to.equal('Petar, George');
        expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"],0)).to.equal('Ivan, George');
        expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"],2)).to.equal('Petar, Ivan');
        expect(companyAdministration.firedEmployee(["Petar"],0)).to.equal('');

        expect(() => (companyAdministration.firedEmployee(["Petar", "Ivan", "George"],3))).to.throw(Error,"Invalid input");
        expect(() => (companyAdministration.firedEmployee(8,3))).to.throw(Error,"Invalid input");
        expect(() => (companyAdministration.firedEmployee("Petar",3))).to.throw(Error,"Invalid input");
        expect(() => (companyAdministration.firedEmployee("Petar",'3'))).to.throw(Error,"Invalid input");
        expect(() => (companyAdministration.firedEmployee(["Petar", "Ivan", "George"],'3'))).to.throw(Error,"Invalid input");
        expect(() => (companyAdministration.firedEmployee(["Petar", "Ivan", "George"],-1))).to.throw(Error,"Invalid input");
        expect(() => (companyAdministration.firedEmployee({},1))).to.throw(Error,"Invalid input");
        expect(() => (companyAdministration.firedEmployee({},1))).to.throw(Error,"Invalid input");
        expect(() => (companyAdministration.firedEmployee(["Petar", "Ivan", "George"],8))).to.throw(Error,"Invalid input");
        expect(() => (companyAdministration.firedEmployee(8))).to.throw(Error,"Invalid input");
        expect(() => (companyAdministration.firedEmployee(["Petar", "Ivan", "George"]))).to.throw(Error,"Invalid input");
        expect(() => (companyAdministration.firedEmployee())).to.throw(Error,"Invalid input");


    })
})