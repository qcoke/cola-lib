# 学习JavaScript数据结构与算法-学习笔记

在使用之前，请使用一个简单的 HTTP 来运行此目录中的源代码，可以使用 Apache，Nginx。考虑到本例写的都是传统的 JS 。所以我们使用 NodeJS 来作为服务器。安装请使用
```
npm install http-server -g
```
使用的时候，进入到此目录，运行 ```http-server``` 整个环境就搭好了.

### chapter1（JavaScript简介）
- JavaScript 基础，此章节太简单。大约就是如何建立html，然后引入JavaScript等凑数的文章（略）
- 谈及了新的 JS 语法，新的变量、类型（Number，String，Boolean，undefined，null，Symbol 基础类型 Function，Object，RegExp，
- 介绍了 JS 语法，控制结构、函数、面向对象编程等（略）
- 调试工具、Babel.js 等
- 介绍新语法：箭头函数、数组解构、声明、展开、剩余参数等（略）
- 使用类进行 OOP 编程（略）
- ECMAScript7 的功能（略）
### chapter2（数组）
- 介绍了数组，如何创建、访问、迭代数组等
- 添加数组元素
```
push          推入最后一位
unshift       推入数组第一位
shift         删除数组第一个元素
splice        删除任意位置的元素
concat        连接两个数组
every         对数组中的每一项运行给定函数，如果函数的每一项都返回TRUE，就返回TRUE
filter        对数组中的每一项运行给定函数，返回该函数会返回 True 的项组成的数组
forEach       对数组中的每一项运行给定函数，这个方法没有返回值
join          将所有数组的元素连接成一个字符串
indexOf       返回第一个与给定参数相等的数组元素的索引，没有找到就返回 -1
lastIndexOf   返回数组中搜索到给定参数相等的元素的索引里的最大值
map           对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
reverse       倒转数据
slice         传入索引值，将数组里对应索引范围内的元素作为新数组返回
some          对数组中的每一项运行给定函数，如果任一项返回 true,则返回 true
sort          按照字母顺序对数组排序，支持传入指定的排序方法的函数组作为参数
toString      将数组作为字符串返回
valueOf       和 toString 类似，将数组作为字符串返回
```
ES6、7 新方法
```
@@iterator    返回一个包含数组键值对的迭代器对象，可以通过同步调用得到数组元素的键值对
copyWidthin   复制数组中一系列元素到同一数组指定的起始位置
entries       返回包含数组所有键值对的@@iterator
includes      如果数组中存在某个元素则返回 True，否则返回 False。ES7新增
find          根据回调函数给定的条件从数组中查找元素，如果找到则返回该元素
findIndex     根据回调函数给定的条件从数组中查找元素，如果找到则返回该元素索引
fill          用静态值填充数组
from          根据已有数组创建一个新数组
keys          返回包含数组所有索引的 @@iterator
of            根据传入的参数创建一个新数组
values        返回包含数组中所有值的 @@iterator
```