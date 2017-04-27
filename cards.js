// var clozeQuestions = require("./clozeCard.js").clozeQuestions;


exports.BasicCard = function(front, back){
	this.front = front;
	this.back = back;
}

exports.ClozeCard = function(fullText, partial, cloze){


	this.fullText = fullText;
	this.partial = partial;
	this.cloze = cloze;

	// if(!fullText.toLowerCase().includes(cloze.toLowerCase())){
	// 	console.log("Cloze statement does not appear in the full text of the question");
	// }




	// if(!fullTextLowerCase.includes(clozeLowerCase)){
	// 	console.log("cloze statement does not appear in the full text of the question");
	// 	return;
	// }

}
