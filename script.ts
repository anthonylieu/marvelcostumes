interface MarvelEvent {
    year: number;
    title: string;
    description: string;
}

const marvelEvents: MarvelEvent[] = [
    {
        year: 1939,
        title: "First Appearance of Marvel Comics",
        description: "Marvel Comics #1 featuring the Human Torch and Namor the Sub-Mariner."
    },
    {
        year: 1961,
        title: "The Fantastic Four",
        description: "Debut of the Fantastic Four, the beginning of the Marvel Universe."
    },
    {
        year: 1962,
        title: "The Incredible Hulk",
        description: "Hulk's first appearance in The Incredible Hulk #1."
    },
    // Add more Marvel events here
];

const timelineContainer = document.getElementById("timeline");

marvelEvents.forEach((event) => {
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("timeline-event");
    eventDiv.innerHTML = `
        <h2>${event.year}</h2>
        <h3>${event.title}</h3>
        <p>${event.description}</p>
    `;
    timelineContainer.appendChild(eventDiv);
});