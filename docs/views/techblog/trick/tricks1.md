# 运算符的一些小技巧

1. === 运算符

```js

// 常规代码
if( sex==='male' ){
    user.isMale = true
}else{
    user.isMale = false
}

// 简洁代码
user.isMale = sex==='male'

```

2.  || 运算符 

```js

// 常规代码
if( exp ){
    n = exp
}else{
    n = 1
}

// 简洁代码
n = exp || 1;

```

3. && 运算符 

```js

// 常规代码
if( exp ){
    console.log( exp )
}

// 简洁代码
n = exp && console.log( exp );

```

4. 三目运算

```js

// 常规代码
if( exp ){
    n = 1
}else{
    n = 2
}

// 简洁代码
n = exp ? 1 : 2;

```
