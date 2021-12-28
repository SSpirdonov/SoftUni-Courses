function tickets(inp, criteria) {
  let arr = [];
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  //inp.forEach((el) => {
  for(let el of inp) {
    let innerArr = el.split("|");
    let instance = new Ticket(innerArr[0], innerArr[1], innerArr[2]);
    arr.push(instance);
  }//);
  arr.sort((a, b) => {
    if (criteria === "price") {
      return a.price - b.price;
    } else if (criteria === "destination") {
      return a.destination.localeCompare(b.destination);
    } else if (criteria === "status") {
      return a.status.localeCompare(b.status);
    }
  });

  //console.log(arr);
  return arr ;
}

// tickets(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination'
// );

tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "status"
);
