# 那些变态的面试题

所谓的变态，更多的是在考察我们对 JavaScript 的理解是否到位。

1. 第一题，先看题，思考一下自己的答案吧！

```js
var a = 10;
if( function b(){} ){
    a += typeof(b)
}
console.log(a); // Expected '10undefined' 
```

> 提示： 这道题的重点是在考察隐式转换和预编译

2. 请给出下列代码的输出结果

```js

var obj = {
    "2": "a",
    "3": "b",
    "length": 2,
    "push": Array.prototype.push
};
obj.push("c");
obj.push("d");

console.log(obj); // Expected {2: 'c', 3: 'd', length: 4, push: ƒ}

// 说明: 简写一下关键语句供理解原理
// Array.prototype.push = function(target){
//     obj[obj.length] = target;
//     obj.length++;
// }

```
