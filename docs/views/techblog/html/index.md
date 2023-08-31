# HTML  

> **HTML** （HyperText Markup Language，超文本标记语言）是一种描述语言，用来定义网页结构。
    

<div class="html-box">
    <strong>H</strong>
    <strong>T</strong>
    <strong>M</strong>
    <strong>L</strong>
</div>

<script></script>

<style>
.html-box{
    display: flex;
    justify-content: space-evenly;
    font-size: 100px;
    text-align: center;
    padding:20px 0;
    margin-top: 50px;
    -webkit-text-stroke: 1px #ffffff;
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
    text-shadow: 6px 3px 3px red,
                 9px 6px 10px orange,
                 12px 9px 15px yellow,
                 15px 12px 20px green,
                 18px 15px 10px cyan,
                 21px 18px 15px blue,
                 24px 21px 20px purple;
    filter: contrast(50);
}
.html-box:hover{
    animation: hoverAni 1s ease-in-out 1 backwards;
    cursor: default;
}
@keyframes hoverAni {
    0% {
        text-shadow: 0px 0px 0px red,
                     0px 0px 0px orange,
                     0px 0px 0px yellow,
                     0px 0px 0px green,
                     0px 0px 0px cyan,
                     0px 0px 0px blue,
                     0px 0px 0px purple;      
    }
    100% {
        text-shadow: 6px 3px 3px red,
                    9px 6px 10px orange,
                    12px 9px 15px yellow,
                    15px 12px 20px green,
                    18px 15px 10px cyan,
                    21px 18px 15px blue,
                    24px 21px 20px purple;        
    }
}
</style>