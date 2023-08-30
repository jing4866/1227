# 一些小技巧

1. 判断两个数字的符号是否相同
> 按位异或（^）运算符在两个操作数有且仅有一个对应的二进制位为 1 时，该位的结果值为 1。

```js

(3 ^ -5) >= 0   // Expected false 符号不同
(-3 ^ -5) >= 0  // Expected true  符号相同
(3 ^ 5) >= 0    // Expected true  符号相同
(-3 ^ 5) >= 0   // Expected false 符号不同

```

2. 写一个函数判断一个数 n 是否是 2 的整数幂
> 按位与（&）运算符在两个操作数对应的二进位都为 1 时，该位的结果值才为 1。

```js

// 如果 n & (n-1) 等于 0 ， 则 n 是 2 的整数幂
const isPowerOf2 = (n) => (n & (n - 1)) === 0;

isPowerOf2(4);  //  Expected true
isPowerOf2(15); //  Expected false
isPowerOf2(16); //  Expected true

```

3. 倒序排序的简写

```js

// 标准写法
for(let i = arr.length; i >= 0; i--){
    // ... do something ...
}

// 简写方式
for(let i = arr.length; i--;){
    // ... do something ...
}

```

4. 通过一个函数，快速得到一个星级评分

```js

const rate = (r) => '★★★★★☆☆☆☆☆'.slice(5 - r, 10 - r);

rate(0); // ☆☆☆☆☆
rate(1); // ★☆☆☆☆
rate(2); // ★★☆☆☆
rate(3); // ★★★☆☆
rate(4); // ★★★★☆
rate(5); // ★★★★★

```

5. 当程序出错时，跳转到指定地址，比如去技术网站问问为什么？

```js

try {
    // ... do something ...
} catch (e) {
    location.href = `https://www.stackoverflow.com/search?q=js+${e.message}`;
}

```

6. 让一个数字在 0 和 1 之间来回切换

```js

let toggle = 0 ;

toggle ^= 1; // Expected 1
toggle ^= 1; // Expected 0
toggle ^= 1; // Expected 1

```

7. 求一个浮点数的整数部分的集中方法

```js

~~3.14    // Expected 3
3.14 >> 0 // Expected 3
3.14 << 0 // Expected 3
3.14 | 0  // Expected 3

```

8. 得到一个数乘以 2 的 n 次幂

```js

1 << 2 // Expected 4
1 << 3 // Expected 8
1 << 4 // Expected 16

```

[更多关于运算符的参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)

9. 隐式判断一个 key 是否存在于对象中

```js

const obj = {
    name: '1227',
    age: 18
}

console.log( 'rich' in obj ); // Expected false
console.log( obj.hasOwnProperty('rich') ); // Expected false


// 注意 ： in 如果在对象中找不到，会继续去原型链上去查找，hasOwnProperty 是会排除原型 prototype 上的属性的。

``` 

10. 在开发中做数据类型判断的小技巧 —— 判断数组

```js

// 判断数据类型是否为数组,其他类推
const toStr = Object.prototype.toString;
const trueTip = '[object Array]';

// 调用
if( toStr.call([]) === trueTip ){
    console.log('Yes, it is a Array type.');
}else{
    console.log('No, it is not a Array type.');
}

```
