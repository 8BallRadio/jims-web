<template>
  <header class="header header--fixed" role="banner">
    <h1 class="header__text">JIM'S WEB</h1>
    <button class="btn btn__how-to" @click="handleClick">HOW TO APPLY</button>
  </header>
</template>
<script>
export default {
  name: "HeaderJim",
  methods: {
    handleClick: function() {
      this.$root.$emit("clickedHowTo");
    }
  }
};
</script>

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
  margin-top: 16px;
  float: left;
}

.btn {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: "Courier New", Courier, monospace;
}

.btn__how-to {
  float: right;
  font-size: 0.875rem;
  margin-top: 20px;
  padding-right: 0;

  &:hover,
  &:active {
    color: $secondary-color;
  }

  @media (min-width: 479px) {
    font-size: 1rem;
  }
}
</style>
