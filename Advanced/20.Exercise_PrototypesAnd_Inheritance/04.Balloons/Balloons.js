function solve() {
    class Balloon {
        constructor(color, hasWeight){
            this.color = color;
            this.hasWeight = hasWeight;
        }
    }    

    class PartyBalloon extends Balloon {
        constructor(color,hasWeight,ribbonColor,ribbonLength){
            super(color,hasWeight);            
            this._ribbon = { color: ribbonColor, length: ribbonLength}
        }        
        
        get ribbon() {return this._ribbon}
    }


    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        // BirthdayBalloon: BirthdayBalloon
    }
}

let classes = solve();
//let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
//let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5);
// let ribbon = testPartyBalloon.ribbon;
//console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);
