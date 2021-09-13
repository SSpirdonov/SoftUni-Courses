function sysRegister( inp ) {
    let  ttt = 1 ;
    class System {
        constructor (systemName , componentName , subcomponentName) {
            this.systemName = systemName ;
            this.systemAmount = 0 ;
            this.component = {
                componentName : componentName,
                componentAmount : 0,
                subcomponent : {
                    subcomponentName : subcomponentName,
                    subcomponentAmount : 0
                }
            }
        }
    }
    //-------------Creating an array of objects - instances of the System class--------------
    let objArr = [] ; 
    inp.forEach(el => {
        let obj = new System( el.split(' | ')[0] , el.split(' | ')[1] , el.split(' | ')[2] );
        objArr.push(obj) ;
    });
    //-Creating an array with the names of the objects - systemName. Its length gives the number of objects 
    //with the same names
    let sysArr = [] ;
    sysList(sysArr) ;
    let numberOfSystems = sysArr.length ;    
    //---------------------------Loop by elements-----------------------------------------------
    sysArr.forEach(el  => {
        let cmpArr = [] ;
        cmpList(cmpArr,el) ;

        //------------------------Loop by components---------------------------------------------
        cmpArr.forEach( cmp => {
            let subCounter = 0;
            objArr.forEach( obj => {
                if ( obj.systemName === el && obj.component.componentName === cmp ) {
                    obj.component.componentAmount = cmpArr.length ;
                    subCounter++ ;
                }
            })
            objArr.forEach( obj => {
                if ( obj.systemName === el && obj.component.componentName === cmp ) {
                    obj.component.subcomponent.subcomponentAmount = subCounter ;
                    obj.systemAmount = numberOfSystems ;
                }
            })    
        })
        //----------------------------------------------------------------------------------------
    })    
    //------------------------------Sorting-------------------------------------------------------
    objArr.sort(( a,b ) => b.component.componentAmount - a.component.componentAmount ||
                                    a.systemName.localeCompare(b.systemName)  ||
                                    b.component.subcomponent.subcomponentAmount - 
                                    a.component.subcomponent.subcomponentAmount
                        ) ;
    
    //-------------------------------Printing--------------------------------------------------------
    
    let sysArr1 = [] ;
    sysList(sysArr1) ;
    sysArr1.forEach( el => {
        console.log(el);
        let cmpArr1 = [] ;
        cmpList(cmpArr1,el) ;
        cmpArr1.forEach( cmp => {
            console.log('|||' + cmp);
            objArr.forEach(sub => {
                if ( sub.systemName === el && sub.component.componentName === cmp ) {
                    console.log('||||||' + sub.component.subcomponent.subcomponentName);
                }
            })
        })
    } )

    //--------------------------------FUNCTIONS - Functoin 1--------------------------------------
    function sysList(arr) {
        objArr.forEach( sys => {
            if ( !arr.includes(sys.systemName)) {
                arr.push(sys.systemName) ;
            }
        });
    }
    //--------------------------------FUNCTIONS - Functoin 2--------------------------------------
    function cmpList(arr,el) {
        objArr.forEach( cmp => {
            if ( !arr.includes(cmp.component.componentName) && cmp.systemName === el) {
                arr.push(cmp.component.componentName) ;
            }
        })
    }
    //-----------------------------------No more Functions-------------------------------------------
}


sysRegister ([
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