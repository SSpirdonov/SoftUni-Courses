function createComputerHierarchy() {
    
    class Keyboard {
        constructor(manufacturer, responseTime){
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }
    //-----------------------------------
    class Monitor {
        constructor(manufacturer, width, height){
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }
    //-----------------------------------
    class Battery {
        constructor(manufacturer, expectedLife){
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    //-----------------------------------
    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            if(new.target == Computer){
                throw new Error("Cannot make instance of abstract class Computer.");
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    //-----------------------------------
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery){            
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }
        set battery(value){
            if(!(value instanceof Battery)){
                throw new TypeError(`Not correct instance`);
            }
                this._battery = value ;            
        }
        get battery() { 
            return this._battery 
        }
    }
    //-----------------------------------
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        set keyboard(value){
            if(!(value instanceof Keyboard )){
                throw new TypeError(`Not correct instance`);
            } else {
                this._keyboard = value;
            }
        }
        get keyboard() { return this._keyboard }

        set monitor(value){
            if(!(value instanceof Monitor )){
                throw new TypeError(`Not correct instance`);
            } else {
                this._monitor = value;
            }
        }
        get monitor() { return this._monitor }
    }
    //-----------------------------------


    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);
//---------------------------------------
let keyboard = new Keyboard('Ivanov', 38);
console.log(keyboard);
//---------------------------------------
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", keyboard);
console.log(laptop);
