<template>
  <section class="spiderweb" id="spiderweb">
    <img
      src="../assets/spiderweb.png"
      alt="Spiderweb illustration"
      srcset="../assets/spiderwebtiny.png 100w, ../assets/spiderweb.png 500w, ../assets/spiderwebbig.png 2x"
    />
  </section>
</template>
<style lang="scss" scoped>
.spiderweb {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.spiderweb img {
  display: block;
  width: 80vmin;
}
</style>
