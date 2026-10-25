
console.log("Hello World!");

// Exercise 2 - Variables
const name = "Juho";
let age = 25;
const favouriteAnimal = "Red Panda";

console.log(name);
console.log(age);
console.log(favouriteAnimal);

console.log(
    "Hello! My name is " + name +
    " and my favourite animal is the " +
    favouriteAnimal + "."
);

// Exercise 3 - User Input
const userName = prompt("What is your name?");

console.log("Hello " + userName + "! Welcome to JavaScript.");

// Exercise 4 - Conditionals
const userAge = Number(prompt("How old are you?"));

if (userAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}

// Exercise 5 - Functions
function greetUser(name) {
    console.log("Hello " + name + "!");
}

greetUser("John");
greetUser("Juho");
greetUser("Anna");

// Exercise 6 - Button
const button = document.getElementById("myButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "JavaScript works! Welcome to my page.";
    alert("JavaScript works!");
});
