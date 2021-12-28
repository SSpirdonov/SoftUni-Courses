(function stringExtension() {
    String.prototype.ensureStart = function(str) {
        if(this.startsWith(str)) {
            return this.slice();
        } else {
            return str + this;
        }
    }
    //----------------------------------------------------
    String.prototype.ensureEnd = function(str) {
        if(this.endsWith(str)) {
            return this.slice();
        } else {
            return this + str;
        }
    }
    //----------------------------------------------------
    String.prototype.isEmpty = function() {
        if(this.length > 0) {
            return false;
        } else {
            return true;
        }
    }
    //----------------------------------------------------
    String.prototype.truncate = function(n) {    // Не е ясно дали не трябва да се отреже до дължината на низа
        if(n < 4 && n > 0) {
            return ('.'.repeat(2));
        } else if(!this.includes(' ')){
            return this.slice(0,n-3) + '...';  
        } else if (this.length > n)  {
            let newStringAsArr = this.split(' ');
            let newString = newStringAsArr.slice(0,newStringAsArr.length -1).join(' ');
            let result = newString + '...';
            result = result.slice(0,n);
            return result;
        } else {
            let output = this.slice();
            return output;
        }
    }
    //----------------------------------------------------
    String.format = function(string, ...params) {
        let pattern = /{\d+}/g;
        let arr = string.match(pattern);
        if(!(arr === null)) {
            arr = arr.map(el => Number(el.slice(1,el.length-1)));
            let arr2 = params;
            let res = '';
            for ( let i = 0; i < arr.length; i++ ) {
                if(arr2[i]) {
                    res = string.split(`{${arr[i]}}`).join(arr2[i]);
                    string = res;                    
                }                
            }
            return (res);
        } else {
            return string;
        }                
    }
    //--------Да се изтрие --------------------------------------------
//     let str = 'my string';
//     str = str.ensureStart('my');        console.log(str);
//     str = str.ensureStart('hello ');    console.log(str);
//     str = str.truncate(16);             console.log(str);
//     str = str.truncate(14);             console.log(str);    
//     str = str.truncate(8);              console.log(str);    
//     str = str.truncate(4);              console.log(str);    
//     str = str.truncate(2);              console.log(str);
//     str = String.format('The {0} {1} fox',
//   'quick', 'brown');                    console.log(str);
//     str = String.format('jumps {0} {1}', 
//   'dog');                               console.log(str);
  //----------------------------------------------------------------------
})()
stringExtension()

