const heading = document.querySelector("#taskOneHeading");
const animalText = document.querySelector("#animalText");

document.querySelector("#changeHeadingButton").addEventListener("click", () => {
    heading.textContent = "Updated heading!";
});

document.querySelector("#changeStyleButton").addEventListener("click", () => {
    heading.classList.toggle("highlight");
});

document.querySelector("#changeTextButton").addEventListener("click", () => {
    animalText.textContent = "Pandas are known for eating bamboo.";
});