
//Array of letters
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Set all game scores to zero.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = 0;


//When the user presses a key, it will run the following funtion.
document.onkeyup = function(event) {

	//Determine which key was pressed.
	var userGuess = event.key;

	//Here the computer chooses a random letter.
	var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

	console.log(computerGuess);

	//for loop???
	for (i = 0; i > guessesLeft.length; i--) {
		
		//Add to guessesSoFar score.
		guessesSoFar++;
		
		//Subtract from guessesLeft score.
		guessesLeft--;


	//If user guesses the computer's letter...

	if (userGuess === computerGuess) {
		wins++;

		//Grab element by ID and rewrite the paragraph.
		document.getElementById("wins");
		document.innerHTML() = "Wins: " + this.wins;
			
		}

	//If user guesses the incorrect letter...
	else {
		losses++;
		document.getElementById("losses");
		document.innerHTML() = "Losses: " + this.losses;
		

	console.log(userWin);
	}

	//if userGuess

};
};






















