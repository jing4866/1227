# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.


## Test

test

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).


*******

Markdown 语法参考


# 井号的个数表示标题的等级

## 二级标题
### 三级标题

*斜体文本*

**粗体文本**

***倾斜加粗体文本***

~~删除文字~~

各种分隔线
***
* * *
*****
- - -
------

下划线
<u>测试文本</u>


无序列表
*可以换成+或者-
* 1
* 2
* 3

有序列表
在数字后面加上.即可
1. 123
2. 456
3. 789

区块
> 测试文本，一般用于引用，>后面需要紧跟一个空格