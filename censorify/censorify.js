var censoredWords = ["sad","bad","mad"];
var customCensoredWords = [];

function censor(inStr){
	for(idx in censoredWords){
		inStr = inStr.replace(censoredWords[idx],"****");
	}
	return inStr;
}

function addCensoreWord(word){
	customCensoredWords.push(word);
}

function getCensoreWord(){
	return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoreWord = addCensoreWord;
exports.getCensoreWord = getCensoreWord;