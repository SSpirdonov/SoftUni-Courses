function extensibleObject() { 
    return {
        extend: template => {
            let objProto = Object.getPrototypeOf(this);
            let templateEntries = Object.entries(template);
        }
    }
} 

const myObj = extensibleObject();
const template = { 
    extensionMethod: function () {}, 
    extensionProperty: 'someString' 
} 
myObj.extend(template);
  
    