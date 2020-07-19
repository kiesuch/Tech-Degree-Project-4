/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 
 class Phrase{

	// Constructor declared inital variables for the created object.

	constructor(phrase){
		this.phrase = phrase.toLowerCase();
	}

	// This function will accept an argument and create a html list element.
	// The list element will have it's class name set based on if the content of the index position is a letter or space.
	// The element will then be appeneded to the unordered list.
	// This loops for the length of the argument passed.

	addPhraseToDisplay(phrase){
		const phraseDiv = document.getElementById("phrase");
		const phraseList = phraseDiv.querySelector("ul");
		let currentPhrase = game.activePhrase;

		for (let i = 0; i < currentPhrase.phrase.length; i++){
			let phraseListItem = document.createElement("li");
			if (currentPhrase.phrase[i] === " "){
				phraseListItem.className = "hide space";
			} else {
				phraseListItem.className = "hide letter";
				phraseListItem.textContent = currentPhrase.phrase[i];
			}
			phraseList.appendChild(phraseListItem);
		}
	}

	// This function will accept an argument and check it against the active phrase.
	// If the letter is in the active phrase, it will return true.
	// If the letter is not in the active phrase, it will return false.

	checkLetter(letter){
		let present = 0;

		for (let i = 0; i < game.activePhrase.phrase.length; i++){
			if (letter === game.activePhrase.phrase[i]){
				present++
			}
		}

		if (present == 0){
			return false;
		} else {
			return true;
		}
	}

	// This function will accpet an argument that will be used to check which letter will show in the active phrase.

	showMatchedLetter(letter){
		const phraseDiv = document.getElementById("phrase");
		const phraseList = phraseDiv.querySelector("ul");
		const phraseListItems = phraseList.querySelectorAll("li");

		for (let i = 0; i < game.activePhrase.phrase.length; i++){
			if (letter === phraseListItems[i].textContent){
				phraseListItems[i].className = "show letter";
			}
		}
	}
 }