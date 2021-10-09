// const department = {
//       name: "Engineering",
//       data: { 
//         director: {
//           name: 'John', 
//           position: 'Engineering Director' 
//         }, 
//         employees: [],
//         company: 'Quick Build' 
//       }
//     };
//     const {data: {director}} = department; 
    // director is { name: 'John', position: 'Engineering Director'}
    //console.log(director);
    // const employees = [
    //     {name: 'John', position: 'worker'},  // first element
    //     {name: 'Jane', position: 'secretary'}
    //   ];
    //   const [{name}] = employees; // name of first element is 'John'
    //console.log(name);      
    const company = { 
          employees: ['John', 'Jane', 'Sam', 'Suzanne'],
          name: 'Quick Build',
        };
        const { employees: [empName,second,third,fourth] } = company; // empName is 'John'
    console.log(empName,second,third,fourth);        
    