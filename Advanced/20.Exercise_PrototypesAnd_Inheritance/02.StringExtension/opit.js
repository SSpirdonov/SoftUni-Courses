(function stringExtension() {
    String.prototype.ensureStart = function(str) {
        if(this.startsWith(str)) {
            return this.slice();
        } else {
            return str + this;
        }
    }
    //----------------------------------------------------
    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        }
        return `${this}${str}`;

    };
    //----------------------------------------------------
    String.prototype.isEmpty = function() {
        if(this.length > 0) {
            return false;
        } else {
            return true;
        }
    }
    //----------------------------------------------------
    String.prototype.truncate = function (n) {
        if (n <= 3) {
            return ".".repeat(n);
        }
        if (this.length <= n) {
            return this.toString();
        } else {
            let lastIndex = this.substr(0, n - 2).lastIndexOf(" ");
            if (lastIndex != -1) {
                return this.substr(0, lastIndex) + "...";
            } else {
                return this.substr(0, n - 3) + "...";
            }
        }
    };
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
})()