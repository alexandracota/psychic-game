
//Array of letters
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Set all game scores to zero.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = 0;

//This is the function that will generate a random letter to be guessed.
var generateRandom = function() {
	
	return computerChoice[Math.floor(Math.random() * computerChoice.length)];

}
//Computer's random letter will be populated here.
var letter = "";

//When the user presses a key, it will run the following function.
document.onkeyup = function(event) {

	//As long as there are 10 guesses, generate a random letter.
	if (guessesLeft === 10) {

		//store the user guesses in the variable letter
		letter = generateRandom();

	}
	//And subtract one from the Guesses Left score.
	guessesLeft--;

	console.log(letter);

	//Every key pressed counts as a User Guess.
	var userGuess = event.key;

	//If the user guess is exactly equal to the computer's random choice...
	if (event.key === letter) {
		
		//Add one to the wins score.
		wins++;
		
		//generate another random letter.
		letter = generateRandom();
		
		//Reset guesses left to 10.
		guessesLeft = 10;
		
		//Reset guesses so far to 0.
		guessesSoFar = 0;

		console.log(event.key);
	
	//If the guess is incorrect
	} else {

		//Add one to the Guesses so far.
		guessesSoFar++;
	}

	//If Guesses left ever equals zero,
	if (guessesLeft === 0) {
		
		//The computer will generate a random letter.
		letter = generateRandom();
		//Add one to the Losses score.
		losses++;
		//Set guesses equal to 0
		guessesLeft = 10;
		//set guesses so far equal to 0.
		guessesSoFar = 0;

	}

	console.log(guessesLeft);
	console.log(guessesSoFar);

//push scores to document.
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("guesses-left").innerHTML = "Guesses left: " + guessesLeft;
document.getElementById("guesses-so-far").innerHTML = "Guesses so far: " + guessesSoFar;
};

























