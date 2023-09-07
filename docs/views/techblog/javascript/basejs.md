# 前端基础面试题

基础的面试题可不能错哦~


1. JavaScript 的数据类型都有哪些？

> 原始类型： Number, String, Boolean, Symbol, BigInt, Undefined, Null.  
> 对象类型： Object


2. 原型的作用是什么？

> 之所以存在原型，是因为 JS 语言需要实现面向对象，而原型是实现面向对象的手段之一。一个能支持面向对象的语言必须做到一点：能判断一个实例的类型。在 JS 中，通过原型就可以知道某个对象从属于哪个类型，换句话说，原型的存在避免了类型的丢失。


3. GET 和 POST 的区别？

> 协议层面：语义的差别，GET 表示客户端需要获取内容，POST 表示客户端需要发送内容。       
> 应用层面：GET 请求体为空。(注意：请求体为空不代表没有请求体，是两个意思。)     
> 浏览器层面：1.数据量限制；2.历史记录；3.刷新不同；4...  


4. [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 解决了什么问题？  

> Promise 的出现最重要的是为了统一 JS 中的异步实现方案。  
> 异步是 JS 中的常见场景，统一实现方案，不仅可以有效降低心智负担，更重要的是可以让不同的异步场景相互联动。
> Promise 也无法消除回调地狱，它只不过通过链式调用的方式让回调变得可控。  


5. 什么是 VUE 的响应式？

> Vue 数据响应式设计的初衷是为了实现数据和函数的联动，当数据变化后，用到该数据的联动函数会自动重新运行。  
> 具体在 Vue 的开发中，数据和组件的 render 函数关联在一起，从而实现了数据变化自动运行 render，在感官上就看到了组件的重新渲染。   
> 除了 Vue 自动关联的 render 函数，其他还有很多使用到了 Vue 响应式的场景，比如 computed、watch 等等，不能仅把 Vue 的响应式想象成和 render 的关联。

6. 原型链的最顶端是什么？

```js

Object.prototype

```


7. 函数的返回值是什么？

> 如果明确给了返回值，那么就是 return 后的内容  
> 如果没明确给返回值，那么普通函数默认 return undefined ; 构造函数默认 return this ;


8. 是所有的对象都继承于 Object 吗？

> 不是， Object.create(null) 就没有原型。

9. 请指出下面代码不能正常输出的原因

```js

const obj = {
    name: 'Joe',
    age: 18,
    job: 'worker'
}

for(var key in obj){
    console.log(obj.key);
}

// 原因： 浏览器引擎的操作 -> obj.key -> obj['key']

```

10. 判断以下代码的输出结果

```js

function Person(){};

const person = new Person();

console.log( p instanceof Person ); // Expected true

console.log( p instanceof Object ); // Expected true

console.log( [] instanceof Array ); // Expected true

console.log( [] instanceof Object ); // Expected true

console.log( {} instanceof Object ); // Expected true

```

11. 判断以下代码的输出结果

```js

const val = [] || {};

console.log( val );  // Expected []

```

12. 判断是一个变量是否为空数组的方法有哪些？

```js

const arr = [];

console.log( arr.constructor );  // Expected f Array()

console.log( arr instanceof Array ); // Expected true

// 实际开发中推荐
console.log( Object.prototype.toString.call(a) === '[object Array]' ); // Expected true

```

13. 判断以下代码的执行结果

```js

function fn(){
    bar.apply(null, arguments);
}

function bar(){
    console.log(arguments);
}

fn(1, 2, 3, 4, 5);

// Expected [1, 2, 3, 4, 5]

```

14. JS 的 typeof 可能返回的值有哪些？

> number / string / boolean / object / undefined / function

:::warning

typeof(null) 也返回 object 

:::

15. 判断以下代码的输出结果

```js

function fn (x, y, z){
    arguments[2] = 10;
    console.log( z );

    z = 1;
    console.log( z ); 
}

fn(1, 2, 3);

// Expected 10
// Expected 1

```

16.判断以下代码的输出结果

```js

var fn = (
    function a(){
        return 'abc';
    },
    function b(){
        return 1
    }
);

console.log( typeof(fn) );  // Expected 'function'

```

16.判断以下代码的输出结果

```js

var fn = (
    function a(){
        return 'abc';
    },
    function b(){
        return 1
    }
)();

console.log( typeof(fn) );  // Expected 'number'

```

17. 判断以下代码的输出结果

```js

console.log( NaN == NaN ); // Expected false   NaN不等于任何东西，包括自身

console.log( NaN === NaN ); // Expected false

console.log( undefined == 0 ); // Expected false

console.log( null == 0 ); // Expected false

console.log( undefined == null ); // Expected true

console.log( undefined === null ); // Expected false

console.log( isNaN('100') ); // Expected false  isNaN 是有隐式类型转换的： Number('100') -> isNaN(100)

console.log( parseInt('100a') == 100 ); // Expected true  parseInt 是显示类型转换

```

:::warning

说明： undefined == null 为什么是true ？

因为：   
  1. undefined > 0 为 false， undefined < 0 为 false， undefined == 0 为 false  
  2. null > 0 为 false， null < 0 为 false， null == 0 为 false  

所以： undefined == null 为 true  

但是： 二者类型不同，所以 '===' 的时候为 false

:::

17. 关于 {} 的题
  + {} 和 {} 二者是否相等 ( === )

```js 

let obj_1 = {}
let obj_2 = {}

console.log( obj_1 === obj_2 ); // Expected false

```

  + 为什么不相等

> 对象的引用地址不相同

  + 如何让它们相等

```js

let obj_1 = {}
let obj_2 = obj_1
console.log( obj1 === obj_2 );  // Expected true

```

18. 判断以下代码的输出结果

```js

let a = 1;

function fn(){
    var a = 2;
    this.a = 3;
    console.log(a); 
};

fn();
new fn();
console.log(a);

// Expected 2
// Expected 2
// Expected 3

```

19. 判断以下代码的输出结果

```js

var a = 0 ;

function fn(){
    a = 1;
    console.log(a);
    console.log(this.a);
    var a;
    console.log(a);
}

fn();
new fn();

// fn Expected： 1
// fn Expected： 0
// fn Expected： 1

// new fn Expected： 1
// new fn Expected： undefined
// new fn Expected： 1

```

20. 请交换以下两个变量的值，不增加新的变量。(ES6 的解构赋值就不在这里写了)

```js

var a = 1;
var b = 2;

// 解答
a = a + b;
b = a - b;
a = a - b;

```

21. 判断以下代码的输出结果

```js

var arr1 = [,];
console.log(arr1.length); // Expected 1
console.log(arr1[0]);  // Expected undefined 

var arr2 = [10];
var arr3 = new Array(10);
console.log(arr2.length == arr3.length); // Expected false

var arr4 = [10.5];
var arr5 = new Array(10.5);
console.log(arr4[0] == arr5[0]); // Uncaught RangeError: Invalid array length

```

22. 请将下面的数组按随机顺序返回

```js

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.sort(() => Math.random() - 0.5);


```

23. 请输出以下代码的结果

```js

var obj = {};

obj[0] = 1;
obj['0'] = 2;

console.log(obj[0], obj['0']); // Expected 2

```

24. 请输出以下代码的结果

```js

var arr = [1, 2, 3, 4];

arr['a'] = 5;

console.log( arr[0] );   // Expected 1
console.log( arr['0'] ); // Expected 1
console.log( arr[4] );   // Expected undefined
console.log( arr['a'] ); // Expected 5

```

25. 请输出以下代码的结果

```js 

var a = 1 && 2;

var b = 0 && 2;

console.log(a); // Expected 2

console.log(b); // Expected 0

```