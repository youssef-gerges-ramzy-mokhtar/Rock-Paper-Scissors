// Get Elements 

var rock = document.getElementById("rock"),
	paper = document.getElementById("paper"),
	scissors = document.getElementById("scissors"), 
	mainDiv = document.getElementById("flex2"), 
	mainDiv2 = document.createElement("div");


// Choices 

var humanChoice, computerChoice, imageSource, compputerImageSrc, whoWin;

var computerValues = [
	rock.id,
	paper.id,
	scissors.id
];

var copmuterImageSources = [
	rock.src,
	paper.src,
	scissors.src
];





function rockPicture() {

		"use strict";

		humanChoice = rock.id;

		imageSource = rock.src;


	}


	function paperPicture() {

		"use strict";

		humanChoice = paper.id;

		imageSource = paper.src;

	}


	function scissorsPicture() {

		"use strict";

		humanChoice = scissors.id;

		imageSource = scissors.src;

	}


	function computerThinking() {

		"use strict";

		var randomChoice = Math.floor(Math.random() * 3);

		computerChoice = computerValues[randomChoice];

		compputerImageSrc = copmuterImageSources[randomChoice]


	}


	function winner() {

		"use strict";

		if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")) {

	         whoWin = "Draw!";

	    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
	        
	        whoWin = "You Lose!";
	        
	    } else if ((humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors")) {
	        
	        whoWin = "You Won!";
	        
	    }

	}


/*
	function removeImages() {

		"use strict";

		rock.remove();
		paper.remove();
		scissors.remove();

	}
*/


var userPoints = 0,
	computerPoints = 0,
	scoreResult = document.getElementById("score");
	
function scoreRes() {

	"use strict";


    var scoreValues = scoreResult.innerHTML = userPoints + " - " + computerPoints;

}

setInterval(scoreRes, 50);



var computerDiv = document.createElement("span"),
 	humanDiv = document.createElement("span"),
	textDiv = document.createElement("span");




	function addImages() {

		"use strict";
		

		mainDiv.appendChild(mainDiv2);

		mainDiv2.appendChild(humanDiv);
		mainDiv2.appendChild(textDiv);
		mainDiv2.appendChild(computerDiv);
		

		humanDiv.innerHTML = "<img src='" + imageSource + "' style= ' text-align: center; display: inline; box-shadow: 0px 0px 0px rgba(37, 58, 233, 1); ' />";

		if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")) {

	         textDiv.innerHTML = "<h1 style=' color: yellow; ' >" + whoWin + "</h1>";

	    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
	        
	        textDiv.innerHTML = "<h1 style=' color: red; ' >" + whoWin + "</h1>";
	        computerPoints++;
	        
	    } else if ((humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors")) {
	        
	        textDiv.innerHTML = "<h1 style='  color: green; ' >" + whoWin + "</h1>";
	        userPoints++;
	        
	    }
		

		computerDiv.innerHTML = "<img src='" + compputerImageSrc + "' style=' text-align: center; display: inline; box-shadow: 0px 0px 0px rgba(37, 58, 233, 1); ' />";





	}


	function playAgain() {

		"use strict";

		computerDiv.remove();
		textDiv.remove();
		humanDiv.remove();
		userPoints = 0;
		computerPoints = 0;		

	}


	

