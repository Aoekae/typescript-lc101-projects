let cargoItems: []
cargoItems = []

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo [] = [];


// Properties:
// name should be a string.
// totalCapacityKg should be a number.
// cargoItems should be an array of Cargo objects.
// Should be initialized to an empty array []
// astronauts should be an array of Astronaut objects.
// Should be initialized to an empty array []
// Constructor:
// Parameter name should be a string.
// Parameter totalCapacityKg should be a number.
// Sets value of this.name and this.totalCapacityKg
// Methods:
// sumMass( items: Payload[] ): number
// Returns the sum of all items using each item's massKg property
// currentMassKg(): number
// Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
// canAdd(item: Payload): boolean
// Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
// addCargo(cargo: Cargo): boolean
// Uses this.canAdd() to see if another item can be added.
// If true, adds cargo to this.cargoItems and returns true.
// If false, returns false.
// addAstronaut(astronaut: Astronaut): boolean
// Uses this.canAdd() to see if another astronaut can be added.
// If true, adds astronaut to this.astronauts and returns true.
// If false, returns false.
 }