<template>
    <div class="css-planet">
        <!-- 彩虹 -->
        <div class="w-rainbow"></div>
        <!-- 大海 和 雨滴 -->
        <div class="css-world">
            <div class="w-container">
                <div class="rain-container">
                    <div class="w-rain" v-for="i in 10">
                        <div class="rain-item"></div>
                        <div class="rain-item"></div>
                        <div class="rain-item"></div>
                        <div class="rain-item"></div>
                    </div>
                </div>
                <div class="w-sea">
                    <div class="sea-item" v-for="i in 10"></div>
                </div>
            </div>
        </div>
        <!-- 文字 -->
        <div class="w-word">不可能的世界</div>
        <!-- 太阳 / 月亮 -->
        <div class="w-sun w-moon">
        </div>
    </div>
</template>

<script>
export default {
    name: "CssWorld"
}
</script>

<style lang="scss">
.css-planet{
    position: relative;
    width: 100%;
    min-width: 680px;
    height: 400px;
    background-color: #000000;
    border-radius: 10px;
    overflow: hidden;
    .w-rainbow{
        position: absolute;
        width: 20px;
        height: 700px;
        top: 0px;
        left: 10px;
        transition: all .5s;
        border-radius: 10px;
        background: linear-gradient(90deg, red, orange, yellow, green, cyan, blue, purple, red);
        background-size: 150%;
        transform: rotate(60deg) translate(-200px,-50px);
        transform-origin: center;
        animation: rainbowAnimation 14s linear infinite;
        filter: blur(5px);
        z-index: 90;
    }
    .w-word{
        position: absolute;
        top: 300px;
        left: 60%;
        font-size: 30px;
        color: #ffffff;
        text-shadow: 2px 2px 0px #ddd, 4px 4px 0 #bbb;
        transform: skew(-5deg) rotate(-5deg);
        z-index: 99;
    }
}
.css-world {
    position: relative;
    width: 100%;
    height: 400px;
    border: 1px solid #fff;
    background-color: #000000;
    border-radius: 10px;
    box-shadow: 8px 8px 8px rgba(255, 255, 255, 0.3), -8px -8px 8px rgba(255, 255, 255, 0.7);
    filter: contrast(50);
    overflow: hidden;
    .rain-container{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        .w-rain{
            position: absolute;
            height: 110%;
        }
        @for $i from 1 through 10 {
            .w-rain:nth-child( #{$i} ){
                left: $i * 9%;
                top: random() * 20%;
                .rain-item:nth-child( 1 ){
                    animation: raining 1.6s ease 0s infinite;
                }
                .rain-item:nth-child( 2 ){
                    animation: raining 1.6s ease 0.4s infinite;
                }
                .rain-item:nth-child( 3 ){
                    animation: raining 1.6s ease 0.8s infinite;
                }
                .rain-item:nth-child( 4 ){
                    animation: raining 1.6s ease 1.2s infinite;
                }
            }
        }
        .rain-item{
            position: absolute;
            left: 50%;
            top: -20px;
            width: 28px;
            height: 29px;
            background-color: #fff;
            filter: blur(12px);
            border-radius: 50%;
            z-index: 9;
            animation: raining 1.8s ease random()+s infinite;
        }
    }
    .w-sea{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        background: blue;
        z-index: 19;
        .sea-item{
            width: 80px;
            height: 80px;
            background: blue;
            animation: rotate_sea 3s linear infinite;
            transform-origin: center;
            filter: blur(12px);
        }
    }
}
@keyframes raining {
    0%{
        top: -50px;
        transform: scaleY(1);
        background-color: #ffffff;
    }
    50%{
        background-color: #ffffff;
    }
    100%{
        top: 100%;
        transform: scaleY(1.4);
        background-color: blue;
    }
}

@keyframes rotate_sea {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}

.w-sun{
    position: absolute;
    bottom: 70px;
    left: -50px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    animation: sun-move 10s ease-in-out infinite;
    z-index: 90;
}
@keyframes sun-move {
    0%{
        background-color: #ff3300;
        transform: translate(-50px, 0);
        box-shadow: 0 0 10px 0 rgba(255, 123, 0, 0.831);
    }
    50%{
        background-color: red;
        transform: translate(220px, -250px);
        box-shadow: 0 0 20px 0 rgba(255, 123, 0, 0.831);
    }
    75%{
        background-color: rgba(255, 255, 0, 0);
    }
    100%{
        transform: translate(700px, 50px);
        box-shadow: 50px 0 0 0 rgba(251, 255, 0, 0.831); 
    }
}

@keyframes rainbowAnimation {
    from {
        background-position: 0, 0;
    }
    to{
        background-position: 1000%, 100%;
    }
}
</style>