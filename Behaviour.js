"use strict"

// Get Elements 
const 	rock = document.getElementById("rock"),
		paper = document.getElementById("paper"),
		scissors = document.getElementById("scissors"), 
		mainDiv = document.getElementById("flex2"), 
		mainDiv2 = document.createElement("div");


// Choices 
let humanChoice, computerChoice, imageSource, compputerImageSrc, whoWin;

const computerValues = [
	rock.id,
	paper.id,
	scissors.id
];

const copmuterImageSources = [
	rock.src,
	paper.src,
	scissors.src
];

function rockPicture() {
	humanChoice = rock.id;
	imageSource = rock.src;
}


function paperPicture() {
	humanChoice = paper.id;
	imageSource = paper.src;
}

function scissorsPicture() {
	humanChoice = scissors.id;
	imageSource = scissors.src;
}


function computerThinking() {
	var randomChoice = Math.floor(Math.random() * 3);
	computerChoice = computerValues[randomChoice];
	compputerImageSrc = copmuterImageSources[randomChoice]
}

function winner() {
	if (humanChoice === computerChoice) whoWin = "Draw!";
	else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) whoWin = "You Lose!";
	else if ((humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors")) whoWin = "You Won!";
}

let userPoints = 0,
	computerPoints = 0,
	scoreResult = document.getElementById("score");
	
function scoreRes() {
	scoreResult.textContent = userPoints + " - " + computerPoints;
}

setInterval(scoreRes, 50);

const 	computerDiv = document.createElement("span"),
 		humanDiv = document.createElement("span"),
		textDiv = document.createElement("span");




function addImages() {
	mainDiv.appendChild(mainDiv2);

	mainDiv2.appendChild(humanDiv);
	mainDiv2.appendChild(textDiv);
	mainDiv2.appendChild(computerDiv);
		


	if (whoWin === "Draw!") textDiv.innerHTML = `<h1 style="color: yellow;">${whoWin}</h1>`;
    else if (whoWin === "You Lose!") {
        textDiv.innerHTML = `<h1 style="color: red;">${whoWin}</h1>`;
        computerPoints++;
    } else if (whoWin === "You Won!") {
        textDiv.innerHTML = `<h1 style="color: green;">${whoWin}</h1>`;
        userPoints++;
    }

	humanDiv.innerHTML = `
		<img src="${imageSource}"
		style = "text-align: center; display: inline; box-shadow: 0px 0px 0px rgba(37, 58, 233, 1);" />
	`;

	computerDiv.innerHTML = `
		<img src="${compputerImageSrc}"
		style = "text-align: center; display: inline; box-shadow: 0px 0px 0px rgba(37, 58, 233, 1);" />
	`;
}


function playAgain() {
	computerDiv.remove();
	textDiv.remove();
	humanDiv.remove();
	userPoints = 0;
	computerPoints = 0;
}