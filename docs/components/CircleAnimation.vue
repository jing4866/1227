<template>
    <div class="circle circle-box">
        <div class="circle circle-outer"></div>
        <div class="circle circle-inner"></div>
    </div>
</template>
<script>
export default {
    name: "CircleAnimation"
}
</script>
<style scoped>
.circle{
    width: 800px;
    height: 800px;
}
.circle-box{
    position: fixed;
    bottom: 0%;
    right: 0%;
    z-index: -1;
    overflow: hidden;
}
.circle-outer{
    position: absolute;
    bottom: -50%;
    right: -48%;
    border: 3px solid #bd34fe;
    mix-blend-mode: multiply;
    animation: circle-running-outer 6s linear -5s infinite;
}
.circle-inner{
    position: absolute;
    bottom: -48%;
    right: -50%;
    border: 3px solid #41d1ff;
    mix-blend-mode: multiply;
    animation: circle-running-inner 7s linear -4s infinite;   
}

@keyframes circle-running-outer {
    0%{
        border-radius: 51% 49% 48% 52% / 50% 46% 54% 50% ;
        transform: rotate(0deg);
    }
    35%{
        border-radius: 62% 38% 58% 42% / 58% 58% 42% 42% ;
        transform: rotate(120deg);
    }
    70%{
        border-radius: 37% 63% 37% 63% / 67% 39% 61% 33% ;
        transform: rotate(240deg);
    }
    100%{
        border-radius: 53% 47% 47% 53% / 44% 58% 42% 56% ;
        transform: rotate(360deg);
    }
}
@keyframes circle-running-inner {
    0%{
        border-radius: 52% 48% 80% 20% / 44% 22% 78% 56% ;
        transform: rotate(0deg);
    }
    35%{
        border-radius: 78% 22% 44% 56% / 24% 22% 78% 76% ;
        transform: rotate(120deg);
    }
    70%{
        border-radius: 38% 62% 85% 15% / 73% 65% 35% 27% ;
        transform: rotate(240deg);
    }
    100%{
        border-radius: 52% 48% 80% 20% / 44% 22% 78% 56% ;
        transform: rotate(360deg);
    }
}
</style>