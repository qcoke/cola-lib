/*
#results li.pass{color:green;}
#results li.fail{color:red;}
*/

function assert(value, desc) {
	var li = document.createElement("li");
	li.className = value ? "pass" : "fail";
	li.appendChild(document.createTextNode(desc));
	document.getElementById('results').appendChild(li);
}