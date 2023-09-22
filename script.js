// Sample data for Marvel characters and their costumes
const characters = [
    {
        name: "Spider-Man",
        costumeImage: "spiderman-costume.jpg",
    },
    {
        name: "Iron Man",
        costumeImage: "ironman-costume.jpg",
    },
    // Add more characters and their costume data here
];

// Function to dynamically generate character cards
function generateCharacterCards() {
    const characterList = document.querySelector(".character-list");

    characters.forEach(character => {
        const card = document.createElement("div");
        card.classList.add("character-card");

        const image = document.createElement("img");
        image.classList.add("character-image");
        image.src = character.costumeImage;
        image.alt = character.name + " Costume";

        const name = document.createElement("h2");
        name.textContent = character.name;

        card.appendChild(image);
        card.appendChild(name);
        characterList.appendChild(card);
    });
}

// Call the function to generate character cards when the page loads
window.addEventListener("load", generateCharacterCards);