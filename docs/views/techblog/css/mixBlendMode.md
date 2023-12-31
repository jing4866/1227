# CSS 之 blend-mode  


<div class="mix-blend-box">
    <p class="mix-blend-inner">十二廿柒</p>
</div>

<script setup></script>

<style>
.mix-blend-box{
    position: relative;
    border: 100px solid #000000;
    border-top-color: #ffffff;
    border-left-color: #ffffff;
}
.mix-blend-box .mix-blend-inner{
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 60px;
    font-weight: bold;
    color: #ffffff;
    margin-left: -120px;
    margin-top: -14px;
    mix-blend-mode: difference;
    animation: word-moves 3s linear infinite;
}
@keyframes word-moves {
    0% {
        transform: translate(0, 0);
    }
    25% {
        transform: translate(100px, -50px);
    }
    50% {
        transform: translate(0, 0);
    }
    75% {
        transform: translate(-100px, 50px);
    }
    100% {
        transform: translate(-0, 0);
    }
}
</style>

> blend-mode 是一种 CSS 数据类型，用于描述当元素重叠时，颜色应当如何呈现。  
> 它被用于 background-blend-mode 和 mix-blend-mode 属性。

1. **background-blend-mode**: CSS 属性定义该元素的背景图片，以及背景色如何混合。
    
    + 下面的例子展示了两张图片是如何进行混合的  
    
    :::warning
    这里要注意的是，background-blend-mode设置的是同一个元素自身同时拥有多个背景图片或是多个背景颜色的时候，如何进行融合。
    :::

```html

<div class="box"></div>

```

```css

.box{
    width: 100%;
    height: 300px;
    background-image: url(./群像.png), url(./天空.png);
    background-repeat: no-repeat;
    background-size: 100% 160px, 100% 100%;
    background-position: 50% bottom, center;
    background-blend-mode: normal;
    /* filter: contrast(1.5); */
}

```

<script setup>
import BlendMode from '../../../components/BlendMode.vue'
</script>

<BlendMode type="background"></BlendMode>

**************************


**************************

2. **mix-blend-mode**: CSS 属性描述了元素的内容应该与元素的直系父元素的内容和元素的背景如何混合。

:::warning

这里要注意的是，mix-blend-node对同级元素相互叠加起作用，并不继承计算父级的颜色。

:::

<BlendMode type="mix"></BlendMode>