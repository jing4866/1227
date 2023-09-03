# 如何写一个优雅的 Logo

每个网站必不可少的部分，一定有 Logo 。 Logo是一个企业的标识符，通过图像的形式可以让用户更好的记住和理解企业的主体和品牌文化。

那我们平时是如何写 Logo 的呢？

我相信大多数人一定是下面这样：

```html

<div id="logo">
    <a><img src="./logo.png" alt="某某有限责任公司"></a>
</div>

```

别问我为什么知道，因为我就是这么干的，哈哈哈哈！

但是这样就存在一个问题，当 logo 图片丢失又或者是网络状态不佳的时候，我们的 Logo 大概率就会显示成下面的样子了：

![Alt text](image.png)

也许你会说，没问题呀，你看我写 alt 属性了，公司名称可以显示的。

是的，我们也确实看到过很多的网站会有这种情况，很多人也默许了这种处理方式。包括我们常用的百度浏览器，我相信，还有更多的网站存在这种情况。

![Alt text](image-1.png)

可是，我们程序员是要改变这个世界的呀~

一个碎裂的图片，就像我破碎的心。

让我们一起写一个优雅的 Logo 吧，就算网络不佳，就算图片丢失，我们都是完美的！

```html

<div id="logo">
    <a>某某有限责任公司</a>
</div>

```

```css

#logo{
    width: 120px;
    height: 60px;
    font-size: 30px;
    line-height: 2em;
    text-align: center;
    padding-top: 60px; /* 主要样式 */ 
    background: url(./logo.png) 0 0 no-repeat; /* 主要样式 */ 
    overflow: hidden; /* 主要样式 */ 
}

```

上边的样式属性中，主要内容已经注释出来了。

如果是 logo 图片丢失，这个区域仅为一片空白，并不影响整体美观；如果是网络不佳的情况导致 CSS 样式表被浏览器抛弃，可以像下面一样将企业名称进行展示。

<script setup></script>

<div id="logo">
    <a>某某有限责任公司</a>
</div>


<!-- <style>
#logo{
    width: 120px;
    height: 60px;
    font-size: 30px;
    line-height: 2em;
    padding-top: 60px;
    text-align: center;
    background: url(./logo.png) 0 0 no-repeat;
    overflow: hidden; 
}
#logo a{
    text-decoration: none;
}
</style> -->

也许你会说，这样也并没有多好看啊...

可是，总比一张破碎的图片留在那里要优雅吧！