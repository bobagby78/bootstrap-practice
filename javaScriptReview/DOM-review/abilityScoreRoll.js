let abilityScoreRoll=()=>{

    let finalRolls = [] ;
    for(let j = 0; j < 6; j ++){                                    //do the following 6 times...

            let rolls = [];                                         //set up variables to catch the important values
            let sumRolls = 0;

            for(let i = 0; i < 4; i ++){                            //do the following 4 times
                let nextRoll = (Math.ceil(Math.random() * 6))       //roll a d6
                if (nextRoll <= rolls[0]){                          //if the nextRoll is < the previous roll...
                    rolls.unshift(nextRoll);                        //put nextRoll in front.
                }else rolls.push(nextRoll)                          //otherwise put it in the back
        
                }
        
                rolls.shift();                                      //get rid of the first position roll (the lowest roll)
        
                for(let i = 0; i < rolls.length; i ++){             //loop over the array of roll values
                    sumRolls += rolls[i]                            //add them together in the variable sumRolls
                
            }
            finalRolls.push(sumRolls);                          //take the sumRolls added values and drop them in an array
        }
        return finalRolls                                           // setAbilityScores output is the array of rolling 4d6, dropping the lowest d6 and summing the remaining values
    }

    console.log(abilityScoreRoll());