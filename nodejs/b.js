// var map = new Map();
// map.set("first", "hello");
// map.set("second", "world");

// for (let [key, value] of map) {
// 	console.log("===>" + key + "," + value);
// }

function getPoint() {
	let x = 1;
	let y = 10;
	return {
		x,
		y
	};
}

console.dir(getPoint());