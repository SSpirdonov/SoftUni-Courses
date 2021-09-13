function solve() {
    let contacts = { 'Tim': { phone: '0876566344',
                              address: 'Doe Crossing' },

                     'Bill': { phone: '0896543112',
                            address: 'Nelson Place' } };

//let billsContact = contacts['Bill']; // Get reference
let billsContact = contacts.Bill; // Get reference

console.log(contacts.Tim.address); // '0896543112'
}

solve();