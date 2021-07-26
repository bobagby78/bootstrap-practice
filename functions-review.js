/*
arrow function syntax

functionName = (optParams) => {
    block of code to be executed
}

 */

let names = ["Jon", "Mary", "Jesús", "Richard"]

function getName1(name){
    return name;
}

//here comes the arrow function...
let getName2 = (name)=> {return (name);}

for (let i = 0; i < names.length; i++) {
    console.log("Hello, " + getName1(names[i]));
}

console.log("\n");
console.log("\n");

for (let i = 0; i < names.length; i++) {
   console.log("Hello, " + getName2(names[i]));
}

