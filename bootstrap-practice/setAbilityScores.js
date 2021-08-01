let setAbilityScore=()=>{
    let rolls = [];
    let sumRolls = 0;
    let abilityScores=[];


    for (let j = 0; j < 6; j ++){
        for(let i = 0; i < 4; i ++){
            let nextRoll = (Math.ceil(Math.random() * 6))
            if (nextRoll <= rolls[0]){
                rolls.unshift(nextRoll);
            }else rolls.push(nextRoll)

            
            }
        

            rolls.shift();

            console.log(rolls);

            
            for(let i = 0; i < rolls.length; i ++){
                sumRolls += rolls[i]
            
        }
        abilityScores.push(sumRolls);
    }
        return abilityScores
}

console.log(setAbilityScore());