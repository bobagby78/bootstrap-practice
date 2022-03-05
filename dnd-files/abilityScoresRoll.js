let d6Rolls = ()=> {
    let rawRolls = [];
    let abilScore = rawRolls;
    for(let i = 0; i < 4; i ++){
        rawRolls.push(Math.ceil(Math.random() * 6))
    }
    dropLowest = rawRolls.sort((a, b)=> a - b).shift(); 

    let sumRolls= rawRolls[0] + rawRolls[1] + rawRolls[2];

    console.log(rawRolls);
    return sumRolls;
}

let abilScores = ()=>{
    let abilityScores = [];
    for(let j = 0; j < 6; j++){
        abilityScores.push(d6Rolls());
    }
    return abilityScores;
}

console.log(abilScores());



