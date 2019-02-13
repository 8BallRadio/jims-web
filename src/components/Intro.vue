<template>
  <section>
    <img
      class="jim-photo"
      :class="photoHover"
      src="../assets/jim.png"
      alt="Jim sitting on a chair with his bare foot on top of an ottoman"
      sizes
      srcset
    >
    <img
      class="logo"
      src="../assets/logo.png"
      alt="Jim's Web Logo"
      srcset="../assets/logotiny.png 479w, ../assets/logo.png 767w, ../assets/logobig.png 2x"
    >
    <div
      id="mentorship-title"
      class="mentorship-title"
      @mouseenter="showPhoto"
      @mouseleave="showPhoto"
    >
      <h2>MENTORSHIP PROGRAM</h2>
      <h2>IN MEMORY OF</h2>
      <h2 class="jim-name">JIM WALROD</h2>
    </div>
    <p>8-Ball Community has created the Jim’s Web mentorship program to keep this spirit alive. The program will connect established arts professionals with emerging creatives to help them realize creative projects around a theme, in fields including fashion design, fine art, architecture/interiors, product design, publishing, and photography. The inaugural theme for Jim’s Web is “community”, in honor of Jim’s ability to bring people together. Six mentorships -one in each discipline- will be awarded annually. Awardees will receive a grant of $3,000 and access to their mentor’s studio or office space to realize their project over a six month period. The projects will be showcased in a group exhibition at the end of the program.</p>
    <p>We are currently seeking mentors to contribute their expertise to one mentee over a six month period. Mentors will need to provide their mentee access to their studio or office twice a month throughout the six month mentorship period (between February and August 2019) and advise the mentee on their proposed project.</p>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isHover: false,
      photoHover: ""
    };
  },
  methods: {
    showPhoto: function() {
      this.isHover = !this.isHover;
    }
  },
  watch: {
    isHover: function() {
      this.photoHover = this.isHover ? "show" : "hide";
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  width: 70vw;
  margin-top: 16px;

  @media (min-width: 479px) {
    width: 45vmin;
  }

  @media (min-width: 767px) {
    width: 40vmin;
    margin-top: 32px;
  }
}
.mentorship-title {
  margin-bottom: 64px;
}

.mentorship-title:hover .jim-name {
  color: $photo-color;
  cursor: default;
}

.jim-photo {
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: -1;
  opacity: 0;

  @media (min-width: 479px) {
    width: 40vw;
  }
  @media (min-width: 767px) {
    width: 55vw;
    max-width: 700px;
  }
}
</style>
