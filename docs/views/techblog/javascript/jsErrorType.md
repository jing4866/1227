# JavaScript 的各种报错信息

1. **SyntaxError** - 语法错误: 当错误的使用已经预定义的语法时会抛出此错误。  

> Uncaught SyntaxError: ...

```js

const name =    // Uncaught SyntaxError: Unexpected end of input
const name = ;  // Uncaught SyntaxError: Unexpected token ';'

```

2. **ReferenceError** - 引用错误: 当找不到变量的引用、在变量作用域范围之外使用变量、使用未声明的变量时、在暂时性死区期间使用变量时都会抛出此错误。 

> Uncaught ReferenceError: ...

```js

console.log(a); // Uncaught ReferenceError: a is not defined

```

3. **TypeError** - 类型错误: 当值不是预期数据类型、调用无效方法时都会抛出此错误。  

> Uncaught TypeError: ... 

```js

const obj = Object.create(null);
document.write(obj); // Uncaught TypeError: Cannot convert object to primitive value 

const n = null;
n.toString();  // Uncaught TypeError: Cannot read properties of null (reading 'toString')

```

4. **RangeError** - 范围错误: 将变量设置在其限定的范围之外、将值传递给超出范围的方法、调用一个不会结束的递归函数时就会抛出此错误。

> Uncaught RangeError: ...

```js

const array = new Array(99999999999999999);
// Uncaught RangeError: Invalid array length

const num = 3.1415926;
num.toFixed(-1);
// Uncaught RangeError: toFixed() digits argument must be between 0 and 100

```

5. **URIError** - URI错误: 对象用来表示以一种错误的方式使用全局 URI 处理函数而产生的错误。

> Uncaught URIError: URI malformed at xxx

```js

const uri = decodeURI("%");
// Uncaught URIError: URI malformed at decodeURI 

const d_uri = decodeURIComponent("%");
// VM247:1 Uncaught URIError: URI malformed at decodeURIComponent

```

6. **EvalError** - Eval错误: 代表了一个关于 eval() 全局函数的错误。此异常不再会被 JavaScript 抛出，但是 EvalError 对象仍然存在，以保持兼容性。

> Uncaught EvalError: ...

```js

throw new EvalError("Hello", "someFile.js", 10);
// Uncaught EvalError: Hello

```

7. **InternalError** - Internal错误: 对象表示出现在 JavaScript 引擎内部的错误，通常描述某种数量过多的情况。例如：
    + "too many switch cases"（过多 case 子句）；
    + "too many parentheses in regular expression"（正则表达式中括号过多）；
    + "array initializer too large"（数组初始化器过大）；
    + "too much recursion"（递归过深）。

::: warning
非标准: 该特性是非标准的，请尽量不要在生产环境中使用它！
:::

> InternalError: too much recursion

```js

function loop(x) {
  if (x >= 1000000000000) return;
  // ...do something...
  loop(x + 1);
}
loop(0);
// InternalError: too much recursion

```

8. **Error** - 自定义错误: 通常你会使用 throw 关键字来抛出你创建的 Error 对象。可以使用 try...catch 结构来处理异常。

> 

```js

try {
  throw new Error("自定义错误提示信息！");
} catch (e) {
  console.error(e.name + ":" + e.message);
}
// Error:自定义错误提示信息！

```