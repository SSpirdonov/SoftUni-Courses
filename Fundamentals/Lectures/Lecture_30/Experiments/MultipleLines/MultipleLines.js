



function multipleLines() {
    let s = 'Please yes\nmake my day! NOW'

    let res = s.match(/yes.*day/);
    // Returns null
    console.log(res);
    res = s.match(/yes[^]*day/);
    // Returns ["yes\nmake my day"
    console.log(res[0]);

}

multipleLines() ;