# 如何判断一个对象是否为空

> 我们常用的那些判断对象为空的方法真的有用吗？

1. 首先明确空对象的定义：对象内没有任何的键值对。

```js

const object = {};

```

2. 常规判断空对象的方法

    2.1 既然定义里说空对象没有任何的键值对，那我们首先可以考虑使用方法 - Object.keys() 来查看对象是否有键返回：
    > Object.keys() 静态方法返回一个由给定对象自身的可枚举的字符串键属性名组成的数组。 —— W3C
    ```js

    // 定义一个空对象
    const object = {};

    // 通过 Object.keys() 获取对象 object 的键，返回值是一个包含对象所有'键'的数组。
    const object_keys = Object.keys(object);

    // 输出返回值数组的长度，如何数组长度为 0 ，则表示对象为空
    console.log( object_keys.length ); // Expected 0

    ```

    2.2 可以将空对象转为字符串和 "{}" 进行对比：
    > JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串。 —— W3C 
    ```js

    // 定义一个空对象
    const object = {};

    // 通过 JSON.stringify() 将 object 转为字符串
    const object_string = JSON.stringify(object);

    // 将返回值 object_string 和 "{}" 进行 === 比较
    console.log( object_string === "{}" ); // Expected true

    ```

    2.3 对象还有一个方法可以获取自有属性，就是 Object.getOwnPropertyNames() ：
    > Object.getOwnPropertyNames() 静态方法返回一个数组，其包含给定对象中所有自有属性（包括不可枚举属性，但不包括使用 symbol 值作为名称的属性）。  —— W3C 
    ```js

   // 定义一个空对象
    const object = {};

    // 返回一个数组,包含自身的所有属性
    const object_owns = Object.getOwnPropertyNames(object);

    // 输出返回值数组的长度，如何数组长度为 0 ，则表示对象为空
    console.log( object_owns.length ); // Expected 0

    ```

    当然，我们还有很多方法可以判断一个对象是否为空，以上只是列举了几种常用的方法。

    相信你一定也注意到了这样一句话：

    ~~Object.getOwnPropertyNames() 静态方法返回一个数组，其包含给定对象中所有自有属性（包括不可枚举属性,~~ 
    **但不包括使用 symbol 值作为名称的属性**）

    我们明明通过多种方法都判断出了一个对象是否为空，为什么 W3C 单独对 Symbol 做出了说明呢？

    如果我们将 Symbol 作为属性名称又会怎么样呢？

3. [Symbol 参考文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

4. 将 Symbol 设置为对象属性名称，再验证我们常用的判断空对象的方法是否依然奏效。

    ```js

    // 定义一个 Symbol
    const symbol_key = Symbol('This is a Symbol key.');

    // 将 symbol_key 作为 object 的键，这里要注意写法，不能直接写 symbol_key
    const object = {
        [symbol_key]: 'This is the value of symbol key.'
    }

    // 分别调用我们上边提到的验证方法
    console.log( Object.keys(object).length ); // Expected 0

    console.log( JSON.stringify(object) ); // Expected '{}'

    console.log( Object.getOwnPropertyNames(object).length ); // Expected 0

    ```

    通过验证我们发现，虽然我们定义了一个 Symbol 作为 object 的键，但是我们常用的几种方法并没有判断出它的存在。


5. 常用方法不灵了，那怎么办呢？别怕，我们这就来想办法啦。

    5.1 Object.getOwnPropertyNames() 明确说了自己不包含 Symbol 属性名称，那是不是说明也有包含 Symbol 属性名称的方法呢？没错，那就是 Object.getOwnPropertySymbols() 这个方法。

    > Object.getOwnPropertySymbols() 静态方法返回一个包含给定对象所有自有 Symbol 属性的数组。

    通过下面的代码就能判断对象是否包含 Symbol 属性名称了。

    ```js

    // 定义一个 Symbol
    const symbol_key = Symbol('This is a Symbol key.');

    // 将 symbol_key 作为 object 的键
    const object = {
        [symbol_key]: 'This is the value of symbol key.'
    }

    const object_symbol = Object.getOwnPropertySymbols(object);

    console.log( object_symbol.length ); // Expected 1

    ```
    
    上面有判断普通属性的 getOwnPropertyNames 方法，再加上可以判断 Symbol 属性的 getOwnPropertySymbols 方法，这样我们就将对象的属性检查全了。

    ```js

    // 定义一个 Symbol
    const symbol_key = Symbol('This is a Symbol key.');

    // 将 symbol_key 作为 object 的键
    const object = {
        [symbol_key]: 'This is the value of symbol key.'
    }

    const object_symbol = Object.getOwnPropertySymbols(object);
    const object_key = Object.getOwnPropertyNames(object);

    const is_object_empty = object_symbol.concat(object_key);

    console.log( is_object_empty.length ); // Expected 1

    ```

    上面的方法通过Object对象的两个静态方法，分别判断对象是否有普通属性和 Symbol 属性，这样虽然可以解决问题，但是有没有更简单的方法呢？

    5.2 其实在JavaScript里还有一个方法：Reflect.ownKeys()

    > 静态方法 Reflect.ownKeys() 返回一个由目标对象自身的属性键组成的数组。

    ```js

    // 定义一个 Symbol
    const symbol_key = Symbol('This is a Symbol key.');

    // 将 symbol_key 作为 object 的键
    const object_sym = {
        [symbol_key]: 'This is the value of symbol key.'
    }
    // 再定义一个空对象
    const object_key = {}

    // 分别获取两个对象的 Reflect.ownKeys() 返回结果
    const object_syms = Reflect.ownKeys(object_sym);
    const object_keys = Reflect.ownKeys(object_key);

    // 分别输出两个返回结果的长度 
    console.log( object_syms.length ); // Expected 1
    console.log( object_keys.length ); // Expected 0

    ```

    至此，我们就可以用最简单的方式来判断一个对象是否为空了。


