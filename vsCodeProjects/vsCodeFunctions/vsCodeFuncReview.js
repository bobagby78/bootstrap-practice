/*
arrow function syntax

functionName = (optParams) => {
    block of code to be executed
}

 */

// let names = ["Jon", "Mary", "Jesús", "Richard"]

// function getName1(name){
//     return name;
// }

// //here comes the arrow function...
// let getName2 = (name)=> {return (name);}

// for (let i = 0; i < names.length; i++) {
//     console.log("Hello, " + getName1(names[i]));
// }

// console.log("\n");
// console.log("\n");

// for (let i = 0; i < names.length; i++) {
//    console.log("Hello, " + getName2(names[i]));
// }


//word reverser 1
// let wordReverser = (word) =>{
//     let reversedWord='';
//     for(let i = 0; i < word.length; i++){
//         reversedWord = word[i] + reversedWord;
//     }
//     return reversedWord
// }


// let wordReverser2 = (word) =>{
//     let wordArray =  word.split('');
//     let reversedWordArray = wordArray.reverse();
//     let reversedWord2 = reversedWordArray.join('');
//     return reversedWord2
// }

// console.log(wordReverser("robert"));
// console.log(wordReverser2("jimmy"));

let makeLine = (size, characters = '#')=>{
    hashLine = '';
    for (let i = 0; i < size; i++){
        hashLine += ' ' + characters
    }
    return hashLine;
}

console.log (makeLine(5, '@'));


let makeSquare = (size, characters = '#')=>{
    hashSquare = ''
    for(let j = 0; j < size; j++){
        hashSquare += '\n' + makeLine(size, characters);
    }
    return hashSquare
}

console.log(makeSquare(6, 'X'));

let makeRectangle = (width, height, characters = '#') =>{
    hashRect = ''
    for (let j = 0; j < height; j ++){
        hashRect += '\n' +  makeLine(width, characters);
    }
    return hashRect;
}

console.log(makeRectangle(20, 5, 'W'));

let makeDownStairs = (height, characters = '#') =>{
    staircase = '';
    for (let i = 0; i <= height; i ++){
        staircase += '\n' + makeLine(i, characters);
    }
    return staircase;
}

console.log(makeDownStairs(5, '$'));

let makeSpaceLine = (spaces, chars, blanks = ' ', fills= '#') =>{
    let blank = '';
    let fill = ''; 
    for (let i = 0; i < spaces; i ++){
        blank += blanks ;
    }
    for (let j = 0; j < chars; j ++){
        fill += fills ;
    }
    return '\n' + blank + fill + blank;
}

console.log(makeSpaceLine(3, 5, '@', '$'));

let makeIsoTri = (height, blanks, fills) =>{
    isoTri= ''
    for (let i = 0; i < height ; i ++){
        isoTri += makeSpaceLine(height - (i - 1),  i + (i + 1), blanks, fills )
    }
    return '\n' + isoTri
}

console.log(makeIsoTri(5, '=', '+'));

let makeDiamond = (height)=>{
    diamondTop= '';
    diamondBottom= '';
    //for the top:
    for (let i = 0; i < height ; i ++){
        diamondTop += makeSpaceLine(height - (i - 1),  i + (i + 1))
    }
     return '\n' + diamondTop 
     
     //for the bottom
  
}

console.log(makeDiamond(9));
