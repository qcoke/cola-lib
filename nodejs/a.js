//console.log([1, 2, 3].map(x => x * x));

// class Calc {
// 	constructor() {
// 		console.log("Calc constructor");
// 	}
// 	add(a, b) {
// 		return a + b;
// 	}
// }

// var c = new Calc();
// console.log(c.add(4, 5));


function f() {
	console.log('I am outside!');
}
(function() {
	if (true) {
		// 重复声明一次函数f
		function f() {
			console.log('I am inside!');
		}
	}
	f();
}());