import { SpaceLocation } from './SpaceLocation';

let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;

class Spacecraft {
    name: string;
    speedMph: number;
    milesPerKilometer: number = 0.621;
    constructor(name: string, speedMph: number, milesPerKilometer: number = 0.621) {
       this.name = name;
       this.speedMph = speedMph;
       this.milesPerKilometer = milesPerKilometer;
    }

   getDaysToLocation(kilometersAway: number): number {
    
      let milesAway: number = kilometersAway*this.milesPerKilometer;
      let hoursToLocation: number = milesAway / this.speedMph;  
      return hoursToLocation/24;
   }

   printDaysToLocation(location: SpaceLocation) {
   console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
   }
}

let spacecraftName = new Spacecraft ("Determination", 17500)

let mars = new SpaceLocation('Mars', kilometersToMars)
let moon = new SpaceLocation('Moon', kilometersToTheMoon)

console.log(spacecraftName.printDaysToLocation(mars));
console.log(spacecraftName.printDaysToLocation(moon));

// Paste in the code from step 6 here:
