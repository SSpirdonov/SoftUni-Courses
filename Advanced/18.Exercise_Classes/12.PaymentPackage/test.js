const { expect } = require('chai');
const {PaymentPackage} = require('./PaymentPackage');

describe("Test the class PaymentPackage", () => {
    it("First", () => {
        expect( ()=>  new PaymentPackage('HR Services')).to.throw('Value must be a non-negative number');
    });
    // TODO: …
});
