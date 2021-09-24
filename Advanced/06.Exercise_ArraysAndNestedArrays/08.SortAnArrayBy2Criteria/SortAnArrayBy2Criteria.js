function sortAnArrayBy2Criteria(inp) {
    let res = inp.sort( (a, b) => a.length - b.length || a.localeCompare(b) );
    console.log(res.join('\n'));
}

sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortAnArrayBy2Criteria(["test", "Deny", "omen", "Default"]);
