//declare variables with type
let spacecraftName: string = 'Determination';
let speedMPH: number = 17500;
let kmToMars: number = 225000000;
let kmToMoon: number = 384400;
let miPerKM: number = .621;

//print Days to mars
let milesToMars: number = kmToMars * miPerKM;
let hoursToMars: number = milesToMars / speedMPH;
let daysToMars: number = hoursToMars / 24;

console.log(daysToMars)
