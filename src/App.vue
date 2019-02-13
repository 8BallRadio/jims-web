<template>
  <div id="app">
    <HeaderJim></HeaderJim>
    <main class="main" role="main">
      <Hero></Hero>
      <Intro></Intro>
      <Info></Info>
    </main>
    <FooterJim></FooterJim>
  </div>
</template>

<script>
import HeaderJim from "./components/HeaderJim.vue";
import Hero from "./components/Hero.vue";
import Intro from "./components/Intro.vue";
import Info from "./components/Info.vue";
import FooterJim from "./components/FooterJim.vue";

export default {
  name: "app",
  components: {
    HeaderJim,
    Hero,
    Intro,
    Info,
    FooterJim
  }
};
</script>

<style lang="scss">
#app {
  color: $text-primary-color;
  font-family: "Courier New", Courier, monospace;
  font-size: 100%;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  -webkit-font-kerning: normal;
  font-kerning: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
}
</style>
