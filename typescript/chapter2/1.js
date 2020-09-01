/* function fibonacci(n) {
  var a = [0, 1, 1];
  if (n < 0) throw new Error('输入的数字不能小于 0')
  if (n >= 3) {
    for (var i = 3; i <= n; i++) {
      a[i] = a[i - 1] + a[i - 2];
      console.log(a[i]);
    }
  }
  return a[n];
}
fibonacci(30) */

// 测试两个数组是否一致
var nbas = [
  {
    name: 'Jordan',
    number: 23,
    sex: 'man'
  },{
    name: 'Kobe',
    number: 24,
    sex: 'man'
  }
]

console.log(nbas.every(item => item.number === '23'))