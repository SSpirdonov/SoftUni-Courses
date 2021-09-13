function SmallestTwoNumbers( inp ) {
    console.log(inp.sort((a,b)=> a-b)
                   .slice(0,2)
                   .join(' ')
                );
}
SmallestTwoNumbers( [30, 15, 50, 5] ) ;
SmallestTwoNumbers( [3, 0, 10, 4, 7, 3] ) ;