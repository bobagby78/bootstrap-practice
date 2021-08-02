//declare variables with type
var spacecraftName = 'Determination';
var speedMPH = 17500;
var kmToMars = 225000000;
var kmToMoon = 384400;
var miPerKM = .621;
//print Days to mars
var milesToMars = kmToMars * miPerKM;
var hoursToMars = milesToMars / speedMPH;
var daysToMars = hoursToMars / 24;
console.log(daysToMars);
