exports.BasicCard = function(front, back){
	this.front = front;
	this.back = back;
}

exports.ClozeCard = function(fullText, partial, cloze){


	this.fullText = fullText;
	this.partial = partial;
	this.cloze = cloze;

	
	var fullTextLowerCase = fullText.toLowerCase();
	var partialLowerCase = partial.toLowerCase();
	var clozeLowerCase = cloze.toLowerCase();

	// if(!fullTextLowerCase.includes(clozeLowerCase)){
	// 	console.log("cloze statement does not appear in the full text of the question");
	// 	return;
	// }

}
