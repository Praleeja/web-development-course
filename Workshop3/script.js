
console.log("JavaScript connected!");

// Exercise 1: Click Event
const button = document.getElementById("myButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "You clicked the button!";
});

// Exercise 2: Keyboard Event
const nameInput = document.getElementById("nameInput");
const nameOutput = document.getElementById("nameOutput");

nameInput.addEventListener("keyup", function () {
    nameOutput.textContent = "Hello " + nameInput.value + "!";
});

// Exercise 3: Form Submission
const form = document.getElementById("myForm");
const userInput = document.getElementById("userInput");
const formOutput = document.getElementById("formOutput");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    formOutput.textContent = "You entered: " + userInput.value;

    console.log("Form submitted:", userInput.value);
});
