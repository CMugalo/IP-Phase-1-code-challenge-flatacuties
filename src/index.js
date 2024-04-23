// Your code here
document.addEventListener("DOMContentLoaded", () => {
    // Fetch request for the character resources
  
    function getAllCharacters() {
      fetch("http://localhost:3000/characters")
        .then((res) => res.json())
        .then((characters) =>
          characters.forEach((character) => renderOneCharacter(character))
        );
    }
  
    /////////////////////////////////////////////////
  
    // Building elements and DOM Render Functions
  
    function renderOneCharacter(character) {
      // Add character names to DOM
      const card = document.createElement("span");
      card.textContent = character.name;
      document.querySelector("#character-bar").appendChild(card);
  
      /////////////////////////////////////////////////
  
      // Adding click event listener
      card.addEventListener("click", (e) => {
        e.preventDefault;
        const gifOnDom = document.querySelector("#image");
        gifOnDom.src = character.image;
        const gifName = document.querySelector("#name");
        gifName.textContent = character.name;
        const gifVotes = document.querySelector("#vote-count");
        gifVotes.textContent = character.votes;
      });
    }
  
    /////////////////////////////////////////////////
  
    // Adding submit event listener & displaying votes keyed in (No persistence)
  
    const votingForm = document.querySelector("#votes-form");
    votingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      totalVotes(e.target.votes.value);
      votingForm.reset();
    });
  
    function totalVotes(animalVotes) {
      if (isNaN(animalVotes)) {
        return alert("Votes must be a number!");
      } else {
        console.log(animalVotes);
        const displayVotes = document.querySelector("#vote-count");
        displayVotes.textContent = animalVotes;
      }
    }
  
    function initialize() {
      getAllCharacters();
    }
    initialize();
  });