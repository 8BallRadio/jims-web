<template>
  <header class="header" :class="positionFixed" role="banner">
    <h1 class="header__text">JIM'S WEB</h1>
  </header>
</template>
<script>
export default {
  data() {
    return {
      positionFixed: ""
    };
  },
  methods: {
    handleScroll: function(evt) {
      const header = document.querySelector(".header");
      const windowHeight = window.innerHeight;
      let position = this.getPosition(header);

      if (Math.abs(position.y) >= windowHeight / 2) {
        if (!header.classList.contains("header--fixed")) {
          this.positionFixed = "header--fixed";
        }
      } else {
        if (header.classList.contains("header--fixed")) {
          this.positionFixed = "";
        }
      }
    },
    getPosition: function(el) {
      let xPos = 0;
      let yPos = 0;

      while (el) {
        if (el.tagName == "BODY") {
          // deal with browser quirks with body/window/document and page scroll
          let xScroll = el.scrollLeft || document.documentElement.scrollLeft;
          let yScroll = el.scrollTop || document.documentElement.scrollTop;

          xPos += el.offsetLeft - xScroll + el.clientLeft;
          yPos += el.offsetTop - yScroll + el.clientTop;
        } else {
          // for all other non-BODY elements
          xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
          yPos += el.offsetTop - el.scrollTop + el.clientTop;
        }

        el = el.offsetParent;
      }
      return {
        x: xPos,
        y: yPos
      };
    }
  },
  created: function() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
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
  -webkit-animation: slide-in-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.header__text {
  color: $secondary-color;
  margin-bottom: 8px;
}
</style>
