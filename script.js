
//Array of letters
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Set all game scores to zero.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = 0;


var generateRandom = function() {
	
	return computerChoice[Math.floor(Math.random() * computerChoice.length)];

}

var letter = "";

//When the user presses a key, it will run the following funtion.
document.onkeyup = function(event) {

	if (guessesLeft === 10) {
		letter = generateRandom();

	}

	guessesLeft--;

	console.log(letter);

	//Determine which key was pressed.
	var userGuess = event.key;

	if (event.key === letter) {
		wins++;
	} else {
		guessesSoFar++;
	}


	if (guessesLeft === 0) {
		letter = generateRandom();
		losses++;
		guessesLeft = 10;
		guessesSoFar = 0;

	}


	





	//Here the computer chooses a random letter.
	

	//console.log(computerGuess);

	//for loop???
	// for (i = 0; i > guessesLeft.length; i--) {
		
	// 	//Add to guessesSoFar score.
	// 	guessesSoFar++;
		
		


	// //If user guesses the computer's letter...

	// if (userGuess === computerGuess) {


	// 	//Grab element by ID and rewrite the paragraph.
	// 	document.getElementById("wins");
	// 	document.innerHTML() = "Wins: " + wins;
			
	// 	}

	// //If user guesses the incorrect letter...
	// else {
	// 	losses++;
	// 	document.getElementById("losses");
	// 	document.innerHTML() = "Losses: " + losses;
		

	// console.log(userWin);
	// }

	// //if userGuess

};























