"use strict";
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph, milesPerKilometer) {
        if (milesPerKilometer === void 0) { milesPerKilometer = 0.621; }
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
        this.milesPerKilometer = milesPerKilometer;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        return hoursToLocation / 24;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
var spacecraftName = new Spacecraft("Determination", 17500);
var mars = new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars);
var moon = new SpaceLocation_1.SpaceLocation('Moon', kilometersToTheMoon);
console.log(spacecraftName.printDaysToLocation(mars));
console.log(spacecraftName.printDaysToLocation(moon));
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
