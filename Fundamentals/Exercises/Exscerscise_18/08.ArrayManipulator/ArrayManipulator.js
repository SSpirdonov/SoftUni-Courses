function arrayManipulator( dataArr , commArr ) {
        
    for ( let element of commArr   ) {
        let arr = element.split(' ') ;
        let command = arr[0] ;
        if        ( command === 'add' )      {
            let index =   Number(arr[1]);
            let element = Number(arr[2]);
            dataArr.splice(index, 0, element) ;
        } else if ( command === 'addMany' )  {
            let index =   Number(arr[1]);
            arr.shift() ; arr.shift();
            for ( let i = 0 ; i < arr.length ; i ++) {
                dataArr.splice(index + i, 0 , Number(arr[i]) ) ;
            }          
        } else if ( command === 'contains' ) {
            let num = Number(arr[1]);
            if ( element.includes(num) ) {
                console.log( dataArr.indexOf(num) );
            } else {
                console.log( -1 );
            }
        } else if ( command === 'remove' )   {
            let index = Number(arr[1] ) ;
            dataArr.splice(index,1) ;
        } else if ( command === 'shift' )    {
            let positions = Number(arr[1] ) ;
            for ( let i = 1 ; i <= positions ; i++  ) {
                let num = dataArr.shift() ;
                dataArr.push(num) ;
            }
        } else if ( command === 'sumPairs' ) {
            if ( dataArr.length % 2 === 1 ) {
                dataArr.push(0) ;
            }
            let resArr = [] ;
            for ( let i = 0 ; i <dataArr.length ; i +=2 ) {
                resArr.push(dataArr[i] + dataArr[i+1] ) ;
            }
            dataArr = resArr ;
        } else if ( command === 'print' )    {
            console.log( '[ ' + dataArr.join(', ') + ' ]');
        }        
    }
}
//arrayManipulator ( [1, 2, 4, 5, 6, 7] , ['add 1 8', 'contains 1', 'contains 3', 'print'] ) ;
arrayManipulator ( [1, 2, 3, 4, 5 ] , ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'] ) ;
//arrayManipulator ( [1, 2, 3, 4, 5 ] , ['sumPairs' , 'print'] ) ;