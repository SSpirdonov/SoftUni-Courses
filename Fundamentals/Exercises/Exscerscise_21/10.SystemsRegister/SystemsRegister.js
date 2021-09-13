function systemsRegister( inp ) {
    class System {
        constructor (systemName , componentName , subcomponentName) {
            this.systemName = systemName ;
            this.componentName = componentName ;
            this.subcomponentName = subcomponentName ;
            this.componentAmount = 0 ;
            this.subComponentAmount = 0 ;
        }
    }
    //let inpArr = [] ; //maybe later or never
    let inpArrOfObjects = [] ;
    let primaryKeyArr = [] ;
    
    inp.forEach(el => {
        //inpArr.push( el.split(' | ') ) ;  //maybe later or never
        let obj = new System( el.split(' | ')[0] , el.split(' | ')[1] , el.split(' | ')[2] );
        inpArrOfObjects.push(obj) ;
    });

    for ( let el of inpArrOfObjects ) {
        if ( !primaryKeyArr.includes(el.systemName) ) {
            primaryKeyArr.push(el.systemName) ;
        }
    }
    primaryKeyArr.forEach(el => {
        let cmpArr = [] ;
        inpArrOfObjects.forEach( i => {
            if ( !cmpArr.includes(i.componentName) && i.systemName === el ) {
                cmpArr.push(i.componentName) ;
            }
        } ) ;
        
        inpArrOfObjects.forEach( i => {
            if ( i.systemName === el ) {
                i.componentAmount = cmpArr.length ;
            }
        } ) ;
        let subArr = [] ;
        cmpArr.forEach ( em  => {
            inpArrOfObjects.forEach ( i => {
                if ( !subArr === em && i.systemName === el && i.componentName === em ) {
                    subArr.push(i.subcomponentName) ;
                }
            } ) ;
            
            inpArrOfObjects.forEach ( i => {
                if ( i.subcomponentName === em && i.systemName === el ) {
                    i.subComponentAmount = subArr.length;
                }
            } ) ;
        } ) ;

        let ooo = 1

        // let subArr = [] ;
        // inpArrOfObjects.forEach( i => {
        //     if ( !subArr.includes(i.subComponentName) && i.systemName === el ) {
        //         cmpArr.push(i.componentName) ;
        //     }
        // } ) ;
        
    }) ;

    inpArrOfObjects.sort( (a,b) => b.componentAmount - a.componentAmount ||
                                   a.componentName.localeCompare(b.componentName) );//||
                                   //b.subComponentAmount - a.subComponentAmount  ) ;

    let k = 1 ;

    

}

systemsRegister ([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
    ]) ;