/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 
class Game{

	// Constructor declared inital variables for the created object.

	constructor(){
		this.missed = 0;
		this.phrases = this.createPhrases();
		this.activePhrase = null;
	}

	// This function will create the phrases and return the array for the constructor.

	createPhrases(){
		const phrases = [
			new Phrase("Carpe Diem"),
			new Phrase("You have won"),
			new Phrase("Let us start the game"),
			new Phrase("Time waits for no one"),
			new Phrase("Have a nice day")
		]
		return phrases
	}

	// The start game method will, when called, set the active phrase as one of the random phrases in the phrases array.
	// The overlay will then be hidden to show the game underneath.

	startGame(){
		this.activePhrase = this.getRandomPhrase()
		this.activePhrase.addPhraseToDisplay()
		let overlay = document.getElementById("overlay");
		overlay.style.display = "none";
	}

	// This function will get a random number
	// The random number will be used for the array index position of the phrases array.
	// It will then return phrase stored in that index position.

	getRandomPhrase(){
		let randomNumber = Math.floor(Math.random() * this.phrases.length);
		return this.phrases[randomNumber];
	}

	// The handleInteraction function will take the key press and store the text content in a variable.
	// The button that was pressed will be disabled and the color will change based off whether the letter was in the phrase or not.
	// If the letter was present, the checkForWin function will be called to see if the game was won.
	// if the letter was not present, the removeLife function will be called.

	handleInteraction(target){
		const letter = target.textContent;
		target.disabled = true;
		let letterPresent = true;

		letterPresent = game.activePhrase.checkLetter(letter);

		if (letterPresent){
			target.className = "chosen";
			game.activePhrase.showMatchedLetter(letter);
			if (this.checkForWin()){
				this.gameOver(true)
			}
		} else {
			target.className = "wrong";
			this.removeLife();
		}
	}

	// This function will check to see if there are any element with the class name used for hidden letters.
	// If there are no elements then the return value will be true.

	checkForWin(){
		return document.getElementsByClassName("hide letter").length === 0;
	}

	// If the player guesses a letter that is not present in the phrase, one of the heart images will be replaced by a lost heart images.
	// After the player guesses 5 wrong letters, the gameOver function will be called.

	removeLife(){
		this.missed++
		const lives = document.querySelectorAll(".tries img")
		if (this.missed === 1){
			lives[0].src = "images/lostHeart.png";
		} else if (this.missed === 2){
			lives[1].src = "images/lostHeart.png";
		} else if (this.missed === 3){
			lives[2].src = "images/lostHeart.png";
		} else if (this.missed === 4){
			lives[3].src = "images/lostHeart.png";
		} else if (this.missed === 5){
			lives[4].src = "images/lostHeart.png";
			this.gameOver();
		}
	}

	// End the game after either all the letters have been guessed or all lives have been lost.
	// Depending on the value of the gameWon element, either a green or orange screen will be displayed with a game over message.
	// The resetGame function will be called.

	// NOTE: I customized the win message to display the active phrase in case the player didn't get to see the whole phrase.

	gameOver(gameWon){
		const overlay = document.getElementById("overlay");
		const gameOverMessage = document.getElementById("game-over-message")
		overlay.style.display = "block";

		if(gameWon){
			overlay.style.backgroundColor = "green";
			gameOverMessage.textContent = "You correctly guessed the phrase: \""+ this.activePhrase.phrase +"\"!";
		} else{
			overlay.style.backgroundColor = "orange";
			gameOverMessage.textContent = "Sorry, better luck next time!";
		}

		this.resetGame();
	}

	// The reset game function will remove every instance of the list items in the unordered list.
	// All of the keys on the keyboard will be have their classes reset to their starting value.
	// The images of the lives as well as the missed variable will be reset to their starting values.

	resetGame(){

		document.querySelector("#phrase ul").innerHTML = "";

		const keys = document.querySelectorAll(".keyrow button")
		keys.forEach((key) =>{
			key.disabled = false;
			key.className =  "key";
		})

		const lives = document.querySelectorAll(".tries img")
		for (let i = 0; i < lives.length; i++){
			lives[i].src = "images/liveHeart.png";
		}

		this.missed = 0;
    }	
}
 
 