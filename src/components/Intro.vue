<template>
  <section>
    <img
      class="jim-photo"
      :class="photoHover"
      src="../assets/jim.png"
      alt="Jim sitting on a chair with his bare foot on top of an ottoman"
      srcset="../assets/jimtiny.png 479w, ../assets/jim.png 767w, ../assets/jimbig.png 2x"
    />
    <div
      id="mentorship-title"
      class="mentorship-title"
      @mouseenter="showPhoto"
      @mouseleave="showPhoto"
    >
      <img
        class="logo"
        src="../assets/logo.png"
        alt="Jim's Web Logo"
        srcset="../assets/logotiny.png 479w, ../assets/logo.png 767w, ../assets/logobig.png 2x"
      />
      <h2>MENTORSHIP PROGRAM</h2>
      <h2>IN MEMORY OF</h2>
      <h2 class="jim-name">JIM WALROD</h2>
    </div>
    <p>
      Jim Walrod (1961-2017) was an interior designer, curator, writer, and
      fixture of downtown New York. Growing up in New Jersey, he would gaze
      across the river and dream of a life in New York City; after high school
      he moved to the city to fulfil that dream. Despite his lack of a formal
      education, he went on to have a wildly successful career and was known for
      his original style, eclectic taste, and encyclopedic knowledge of
      contemporary design. He was a generous friend to many and was at his
      happiest when connecting people with one another—spinning a web of
      meaningful relationships.
    </p>
    <p>
      We are currently seeking mentors to contribute their expertise to one
      mentee over a six month period. Mentors will need to provide their mentee
      access to their studio or office twice a month throughout the six month
      mentorship period (between February and August 2019) and advise the mentee
      on their proposed project.
    </p>
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
    showPhoto: function(evt) {
      evt.preventDefault();
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
  width: 50vmin;
  margin-top: 16px;

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
