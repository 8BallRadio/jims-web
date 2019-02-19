<template>
  <section class="spiderweb" id="spiderweb">
    <picture>
      <source
        media="(min-width: 767px)"
        srcset="../assets/spiderweb.png, ../assets/spiderweb-2x.png 2x"
      />
      <source
        media="(min-width: 479px)"
        srcset="../assets/spiderwebtiny.png, ../assets/spiderwebtiny-2x.png 2x"
      />
      <img
        src="../assets/spiderweb-fb.png"
        alt="Spiderweb illustration, created with black spots"
        srcset="../assets/spiderweb-fb-2x.png 2x"
      />
    </picture>
    <div class="arrow">&#709;</div>
  </section>
</template>
<style lang="scss" scoped>
.spiderweb {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}

.spiderweb img {
  display: block;
  width: 80vmin;
}

.arrow {
  font-size: 60px;
  font-weight: bold;
  margin-top: 64px;
  -webkit-animation: bounce-top 2s ease-in both;
  animation: bounce-top 2s ease-in both;
}
</style>
