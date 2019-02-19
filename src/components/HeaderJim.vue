<template>
  <header class="header header--fixed" role="banner">
    <h1 class="header__text">JIM'S WEB</h1>
  </header>
</template>
<style lang="scss" scoped>
.header {
  border-bottom: 2px dashed $secondary-color;
  background-color: $page-background;
}

.header--fixed {
  position: fixed;
  width: 80vw;
  -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s
    both;
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
  z-index: 2;
}

.header__text {
  color: $secondary-color;
  margin-bottom: 8px;
}
</style>
