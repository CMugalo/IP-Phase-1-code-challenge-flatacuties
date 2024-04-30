// Your code here

document.addEventListener("DOMContentLoaded", () => {
  const characterBar = document.getElementById("character-bar");
  const detailedInfo = document.getElementById("detailed-info");
  const gifName = document.getElementById("name");
  const gifOnDom = document.getElementById("image");
  const gifVotes = document.getElementById("vote-count");
  const votingForm = document.getElementById("votes-form");
  let currentCharacter;

  // Fetch request for the characters

  fetch("http://localhost:3000/characters")
    .then((res) => res.json())
    .then(getAllCharacters);

  function getAllCharacters(characters) {
    characters.forEach(renderOneCharacter);
  }

  // Adding elements to the DOM
  function renderOneCharacter(character) {
    const card = document.createElement("span");
    card.textContent = character.name;
    characterBar.append(card);

    // Adding click event listener
    card.addEventListener("click", () => {
      currentCharacter = character;
      displayInfo(character);
    });
  }

  // Adding submit event listener & displaying votes keyed in
  votingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    currentCharacter.votes += parseInt(e.target.votes.value);
    displayInfo(currentCharacter);
    votingForm.reset()
  });

  function displayInfo(character) {
    gifName.textContent = character.name;
    gifOnDom.src = character.image;
    gifVotes.textContent = character.votes;
  }
});
