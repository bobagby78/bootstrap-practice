var greeting = "Hello, ";
console.log(greeting);
function greet(name1, name2) {
    if (typeof name2 !== "undefined") {
        return greeting + name1 + " and " + name2;
    }
    else {
        return greeting + name1;
    }
}
console.log(greet("Jimmy", "Janie"));
console.log(greet("Bobby"));