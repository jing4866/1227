---

# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Out of World"
  text: "远离世界，沉入文字!"
  # tagline: My great project tagline
  actions:
    - theme: brand
      text: 探索宇宙
      link: /views/blackhole/
    - theme: alt
      text: 沉迷世界
      link: /views/dazzling/

features:
  - title: 技术世界
    details: 将经历沉淀为经验，将经验幻化为文字，为你，为我。
    link: /views/techblog/
  - title: 花花世界
    details: 身寄虚空如过客，心将生灭是浮云。  —刘长卿《齐一和尚影堂》
    link: /views/dazzling/
  - title: 世界之外
    details: 未知总是如此令人着迷。
    link: /views/blackhole/

---

<script setup>
import CircleAnimation from './components/CircleAnimation.vue'
</script>

<CircleAnimation />