function extractEmails( inp ) {
    let reg_1 = /[A-Za-z\d\.\-_]+@[A-Za-z\-]+\.[A-Za-z\-\.]+/g
    let reg_2 = /[A-Za-z\d\.\-_]+@[A-Za-z\-]+\.[A-Za-z\-\.]+[^\.\-_]/g
    let res_1 = inp.match(reg_1)
    res_1.forEach(el => {
        el = el.match(reg_2) ;
        console.log(el[0]);
    });
}

extractEmails('Please contact us at: support@github.com.');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.');