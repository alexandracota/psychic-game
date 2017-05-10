
//Array of letters
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Set all game scores to zero.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var guesses = 10;
var lettersToGuess = null;

//When the user presses a key, it will run the following funtion.
document.onkeyup = function(event) {

	//Determine which key was pressed.
	var userGuess = event.key;

	//Here the computer chooses a random letter.
	var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

	console.log(computerGuess);





	// //Update guesses left to the player.
	// var updateGuessesLeft = function () {
	// 	var guessesLeft = document.getElementById("guesses-left");
	// 	document.innerHTML("Guesses left: " + guessesLeft);
	// }

	// //Update guesses
	// var updateLettersToGuess = function() {
	// 	this.lettersToGuess = this.compChoice(Math.floor(Math.random() * this.compChoice.length));
	// };





















