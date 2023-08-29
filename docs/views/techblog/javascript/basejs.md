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