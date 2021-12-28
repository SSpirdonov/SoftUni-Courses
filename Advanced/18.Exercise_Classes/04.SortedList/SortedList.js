class List {
    constructor() {
        this.arr = [];
        this.size = 0;
    }

    add(element) {  
       this.arr.push(element);
       this.arr.sort((a,b)=>a-b);
       this.size++     

    }
    remove(index) {
        if(index > -1 && index < this.size) {
            this.arr.splice(index,1);
            this.arr.sort((a,b)=>a-b);
            this.size--;
        }
    }

    get(index) {
        if(index > -1 && index < this.size) {
            return this.arr[index];
        }                
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);
