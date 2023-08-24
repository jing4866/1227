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