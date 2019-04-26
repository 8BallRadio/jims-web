<template>
  <section class="spiderweb" id="spiderweb">
    <picture class="spiderweb-img">
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
    <div class="arrow-container">
      <span class="arrow"></span>
    </div>
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

.spiderweb-img {
  margin-right: 30px;
  
  @media (min-width: 767px) {
    margin-right: 73px;
  }
}

.arrow-container {
  display: inline-block;
  margin-top: 32px;
  -webkit-animation: bounce-top 2s ease-in both;
  animation: bounce-top 2s ease-in both;
}

.arrow {
  transform: rotate(135deg);
  display: inline-block;
  width: 25px;
  height: 25px;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  @media (min-width: 479px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 767px) {
    width: 35px;
    height: 35px;
  }
}
</style>
