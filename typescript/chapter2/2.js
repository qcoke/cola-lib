// 测试 MAP 方法和 reduce 方法
var numbers = [1, 2, 3, 4, 5, 6, 7, 8]

function isEvent(num) {
  if(num % 2 === 0) {
    return num;
  }
}
var myMap = numbers.map(isEvent);
console.log(myMap);

let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value); //1
console.log(iterator.next().value); //2
console.log(iterator.next().value); //3
console.log(iterator.next().value); //4
console.log(iterator.next().value); //5
console.log(iterator.next().value); //6
console.log(iterator.next().value); //7
console.log(iterator.next().value); //8
console.log(iterator.next().value); //undefined