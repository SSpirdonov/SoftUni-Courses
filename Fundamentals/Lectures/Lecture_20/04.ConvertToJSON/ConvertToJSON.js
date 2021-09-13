function convertToJSON( name, lastName, hairColor  ) {
let man = {} ;
man.name = name ;
man.lastName = lastName ;
man.hairColor = hairColor ;
let text = JSON.stringify(man);
console.log(text);
    
}
convertToJSON ( 'George','Jones','Brown' ) ;