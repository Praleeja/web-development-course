function saveAnimal() {

    const animalName =
        document.getElementById("animalName").value;

    const animalSpecies =
        document.getElementById("animalSpecies").value;

    if (!animalName.trim() || !animalSpecies.trim()) {
        alert("Please fill all fields");
        return;
    }

    const animal = {
        name: animalName,
        species: animalSpecies
    };

    localStorage.setItem(
        "ws05Animal",
        JSON.stringify(animal)
    );

    document.getElementById("result").textContent =
        "Animal saved!";
}

function loadAnimal() {

    const saved =
        localStorage.getItem("ws05Animal");

    if (!saved) {
        document.getElementById("result").textContent =
            "No saved animal found.";
        return;
    }

    const animal = JSON.parse(saved);

    document.getElementById("result").textContent =
        animal.name + " - " + animal.species;
}

function removeAnimal() {

    localStorage.removeItem("ws05Animal");

    document.getElementById("result").textContent =
        "Animal removed.";
}