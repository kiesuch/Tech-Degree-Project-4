/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
 
// Declare variables
 
const beginButton = document.getElementById("btn__reset");
const game = new Game();

// This function will call the startGame function in the game.js script

beginButton.addEventListener("click", () =>{
	game.startGame();
});

// This function will call the handleInteracton function in the game.js script

document.getElementById("qwerty").addEventListener("click", e =>{
	if (e.target.tagName === "BUTTON"){
		game.handleInteraction(e.target)
	}
});