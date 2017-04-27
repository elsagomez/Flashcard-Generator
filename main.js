var inquirer = require("inquirer");

var cards = require("./cards.js");

var clozeQuestions = require("./clozeCard.js").clozeQuestions;
var clozeQuiz = [];



for(var i = 0; i < clozeQuestions.length; i++){ //trabajar con un for in para jalar el array de objetos entero.
		var question = new cards.ClozeCard(clozeQuestions[i].fullText,clozeQuestions[i].partial,clozeQuestions[i].cloze);
		clozeQuiz.push(question);
	}



var currentQuestion = 0;
var correctAnswer = 0;
var wrongAnswer = 0;

function generateQuestion(){
	inquirer.prompt([
		{
			type: "input",
			message: clozeQuiz[currentQuestion].partial + "\nYour Answer: ",
			name: "userInput"
		}

		]).then(function(answers){

			if(answers.userInput.toLowerCase() === clozeQuiz[currentQuestion].cloze.toLowerCase()){
					console.log("That is correct! :)");
					correctAnswer ++;

			}
			else{
				console.log("Sorry, it is incorrect! The correct answer is: ");
				wrongAnswer++
			}

			console.log(clozeQuiz[currentQuestion].fullText);
			console.log("---------------------------------------\n");

			if (currentQuestion < clozeQuiz.length - 1){
				currentQuestion ++;
				generateQuestion();
			}
			else{
				console.log("Quiz is over!");
				console.log("Correct Answers: " + correctAnswer);
				console.log("Incorrect Answers: " + wrongAnswer);

				console.log("---------------------------------------\n");

				inquirer.prompt([
				{
					type: "confirm",
					message: "Wanna play again",
					name: "playAgain"
				}
				]).then(function(answers){
					if(answers.playAgain){
						currentQuestion = 0;
						correctAnswer = 0;
						wrongAnswer = 0;

						generateQuestion();
					}
					else{
						console.log("No worries, byebye");
					}
			})
		}
	})
}



generateQuestion();