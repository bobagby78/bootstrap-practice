// let input = require('readline-sync');



// let dieRoll = (times, sides)=>{
//     times = input.question(("How many times are your going to roll? :  "))
//     sides = input.question("Which die would you like to roll? d___  ")
//     let rolls = [];
//     for(let i = 0; i < times; i ++){
//         rolls.push(Math.ceil(Math.random() * sides));
//     }

//         return rolls
// }

// console.log(dieRoll());

let setAbilityScore=()=>{
    let rolls = [];
    let sumRolls = 0;

    for(let i = 0; i < 4; i ++){
        let nextRoll = (Math.ceil(Math.random() * 6))
        if (nextRoll <= rolls[0]){
            rolls.unshift(nextRoll);
        }else rolls.push(nextRoll)

        
        }
        console.log(rolls);

        rolls.shift();

        console.log(rolls);

        
        for(let i = 0; i < rolls.length; i ++){
            sumRolls += rolls[i]
        
    }
    return sumRolls
}

console.log(setAbilityScore());
