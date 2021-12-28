    class SummerCamp {
        constructor(organizer, location){
            this.organizer = organizer;
            this.location = location;
            this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
            this.listOfParticipants = [];
        }
        //---------------------------------------------------
        registerParticipant (name, condition, money){
            let alreadyRegistred = false;
            if(!(this.priceForTheCamp.hasOwnProperty(condition))){
                throw Error("Unsuccessful registration at the camp.");
            } else if(money < this.priceForTheCamp[condition]) {
                return `The money is not enough to pay the stay at the camp.`;
            } else {                
                this.listOfParticipants.forEach(el=>{
                    if(el.name === name) alreadyRegistred = true;
                });
                if(alreadyRegistred){
                    return `The ${name} is already registered at the camp.`; 
                } else {
                    this.listOfParticipants.push({name, condition, power: 100, wins: 0});
                    return `The ${name} was successfully registered.`
                }
            }
        }     
        //---------------------------------------------------
        unregisterParticipant (name) {
            let alreadyRegistred = false;
            let tempArr = [];
            this.listOfParticipants.forEach(el=>{
                if(el.name === name) {
                    alreadyRegistred = true;                    
                } else {
                    tempArr.push(el);
                }    
            });
            this.listOfParticipants = tempArr
            if(!alreadyRegistred) {
                throw (`The ${name} is not registered in the camp.`);
            } else {                
                return `The ${name} removed successfully.`;                
            }            
        }
        //---------------------------------------------------
        timeToPlay (typeOfGame, participant1, participant2){
            if (typeOfGame === 'Battleship') {
                let p1 = this.listOfParticipants.filter(el => el.name === participant1);                
                if(p1.length === 1 && p1[0].name === participant1){
                    for(let participant of this.listOfParticipants){
                        if(participant.name === participant1){
                            participant.power += 20;
                            return `The ${participant.name} successfully completed the game ${typeOfGame}.`
                        }
                    }                    
                } else {
                    throw Error(`Invalid entered name/s.`);
                }
            } else if(typeOfGame === 'WaterBalloonFights'){
                let p1 = this.listOfParticipants.filter(el => el.name === participant1);                
                let p2 = this.listOfParticipants.filter(el => el.name === participant2);                
                if(p1.length === 1 && p1[0].name === participant1 && p2.length === 1 && p2[0].name === participant2) {
                    if(p1[0].condition === p2[0].condition){
                        if(p1[0].power === p2[0].power ) {
                            return `There is no winner.`;
                        } else {
                            let winner = '';
                            if(p1[0].power > p2[0].power){
                                winner = p1[0].name;                            
                            } else {
                                winner = p2[0].name;                                                                
                            }
                            
                            for ( let participant of this.listOfParticipants){
                                if(participant.name === winner){
                                    participant.wins++;
                                    return `The ${participant.name} is winner in the game ${typeOfGame}.`                                            
                                }
                            }    
                            
                        }
                    } else {
                       throw Error(`Choose players with equal condition.`);    
                    }
                } else {
                    throw Error(`Invalid entered name/s.`);
                }
            }
        }
        //---------------------------------------------------
        toString (){
            let str1 =  `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;
            let str2 =  '';
            this.listOfParticipants.sort((a, b) => b.wins - a.wins);
            for( let p of this.listOfParticipants){
                str2 += `\n${p.name} - ${p.condition} - ${p.power} - ${p.wins}`
            }
            return str1 + str2;
        }

    }

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant('Petar Petarson', 'child', 300));
console.log(summerCamp.registerParticipant('Sara Dickinson', 'child', 200));
console.log(summerCamp.timeToPlay('Battleship', 'Sara Dickinson'));
console.log(summerCamp.timeToPlay('WaterBalloonFights', 'Sara Dickinson','Petar Petarson'));




// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "child", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));
// console.log(summerCamp.registerParticipant("Ivan Petrov", "student", 400));
console.log('------------------------------------------');
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.toString());



