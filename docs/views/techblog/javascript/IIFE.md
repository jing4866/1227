---
head:
  - - meta
    - name: description
      content: 如何利用 IIFE 立即执行函数提升性能
  - - meta
    - name: keywords
      content: IIFE 立即调用函数表达式 自执行函数 匿名函数自执行 
---

# IIFE 是啥？

看这些缩写是不头疼？ 疼也没办法，IIFE 好重要的嘞！

来，看定义~

> IIFE（立即调用函数表达式 Immediately Invoked Function Expression）是一个在定义时就会立即执行的 JavaScript 函数。IIFE 这个名字是由 Ben Alman 在他的博客中提出的。

先看看长啥样：

```js

// 匿名函数自执行
(function () {
  // ...do something here...
})();

// 箭头函数自执行
(() => {
  // ...do something here...
})();

// 异步函数自执行
(async () => {
  // ...do something here...
})();

```

>它是一种设计模式，也被称为自执行匿名函数，主要包含两部分：

>第一部分是一个具有词法作用域的匿名函数，并且用圆括号运算符 () 运算符闭合起来。这样不但阻止了外界访问 IIFE 中的变量，而且不会污染全局作用域。

>第二部分创建了一个立即执行函数表达式 ()，通过它，JavaScript 引擎将立即执行该函数。

看完了官方定义和说明是不是还是有点蒙？

别蒙，其实我们早就见过 IIFE 这个东西了。

以下这段代码和需求是不是有点眼熟？

```js
// 通过循环创建两个按钮，分别添加点击事件
// 当按钮被点击的时候，输出按钮的索引
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // 2

```

上面的这段代码是在 ES6 出来之前我们常遇到的问题，当我们点击时，并不会如我们预期那样输出 0 和 1 ，而是不管点击哪个按钮都输出 2。 这是因为 var 定义的 i 是一个全局变量，当for循环执行完以后，i 已经变为 2 ， 当点击事件执行的时候，输出的就都是全局的 i = 2 这个结果了。

以前我们为了解决这个问题，所使用的模式就是 IIFE 。

```js

for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  // 在这里包装一个自定义函数，将 i 作为变量传入函数
  button.onclick = (function (copyOfI) {
    return () => {
      console.log(copyOfI);
    };
  })(i);
  document.body.appendChild(button);
}
// 全部代码执行完毕后 i 的结果
console.log(i); // 2

```

在这里偷偷的感谢一下 ES6 。

我们铺垫了这么多就是为了解释什么是 IIFE 吗？ 当然不止，今天主要是要记录一下如何用 IIFE 提升性能。

在还需要兼容 IE 低版本的时候，我们有的时候需要自己封装一些函数。

下面就是一个根据浏览器的差异添加事件的函数，这样一段函数乍一看没有任何问题，但是封装就意味着这段代码可能需要在多个地方重复调用。可是细想一下，当用户打开网页的那一瞬间，用户到底使用的是什么浏览器是不是就确定了？那在之后的用户交互过程中，我们其实并不需要每次都判断浏览器到底支持那种事件绑定方式。

也就是说以下的代码在网页启动的时候执行一次就够了。

```js

function addEvent(ele, eventName, handler){
    if(window.addEventListener){
        ele.addEventListener(eventName, handler)
    }else if(window.attachEvent){
        ele.attachEvent('on' + eventName, handler)
    }else{
        ele['on' + eventName] = handler
    }
}

```

那我们就可以使用 IIFE 模式来进行优化。

当程序启动以后，下面的代码立即自执行，将执行结果返回给 addEvent ，在之后需要的地方直接调用即可，这样就避免了每次调用时的重复判断行为。

```js

var addEvent = (function(){
    if(window.addEventListener){
        return function(ele, eventName, handler){
            ele.addEventListener(eventName, handler)
        }
    }else if(window.attachEvent){
        return function(ele, eventName, handler){
            ele.attachEvent('on' + eventName, handler)
        }
    }else{
        return function(ele, eventName, handler){
            ele['on' + eventName] = handler
        }
    }
})()

// 调用
addEvent()

```

其他可以优化的场景示例
    
    1.正则判断

```js

// 优化前
function removeSpace(str){
    // ... do something...
    return str.replace(/\s/g, '');
}

// 优化后
var removeSpace = (function(){
    var reg = /\s/g;
    return function (str){
        // ... do something...
        return  str.replace(reg, '');
    }
})()

```

    2.跨平台情况下的 HTTP 请求

```js

// 优化前
function request(opt){
    if( typeof(window) !== 'undefined' ){
        // 浏览器环境下
        // ...do something...
    }else{
       // 非浏览器环境
       // ...do something... 
    }
}

//优化后
var request = (function(){
    if( typeof(window) !== 'undefined' ){
        return function(opt){
            // 浏览器环境下
            // ...do something...
        }
    }else{
        return function(opt){
            // 非浏览器环境
            // ...do something... 
        }      
    }
})()

```

*****

*****

正题写完了，补充一个小知识点: 组件库封装的结构

```js

(function(){
    // ... do something...
    function Test(){
        // ... do something...
    };
    Test.prototype = {
        // ... do something...
    };
    window.Test = Test;
})();

// 调用
var test = new Test();

```