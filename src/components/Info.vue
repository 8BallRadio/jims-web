<template>
  <section class="info">
    <article class="about">
      <h3>ABOUT JIM’S WEB</h3>
      <p>
        Jim’s Web is a mentorship program that connects emerging creatives with
        creative professionals who can advise them on a project.
      </p>
      <p>
        Six mentorships will be awarded each year, one in each of the following
        disciplines:
      </p>
      <ul>
        <li>Architecture / Interiors</li>
        <li>Fashion Design</li>
        <li>Fine Art</li>
        <li>Product Design</li>
        <li>Photography</li>
        <li>Publishing</li>
      </ul>
      <p>
        Each awardee will receive a grant of $3,000 and access to to their
        mentor’s studio space over the course of the six month term. The
        completed projects will be showcased in a group exhibition.
      </p>
      <h3>MENTORS</h3>
      <p>Dong-Ping Wong</p>
      <a href="http://food-newyork.com/" rel="nofollow" target="_blank"
        >http://food-newyork.com/</a
      >
      <p>Landon Metz</p>
      <a
        href="https://www.skny.com/artists/landon-metz"
        rel="nofollow"
        target="_blank"
        >https://www.skny.com/artists/landon-metz</a
      >
      <p>Jeremy Liebman</p>
      <a href="http://jeremyliebman.com/" rel="nofollow" target="_blank"
        >http://jeremyliebman.com/</a
      >
    </article>
    <article class="eligibility">
      <h3>ELIGIBILITY REQUIREMENTS</h3>
      <p>No age requirement.</p>
      <p>
        Participants must be able and available to complete their project
        between February and August 2019. Mentorship projects must be completed
        by September 1st.
      </p>
    </article>
    <article class="application">
      <h3>APPLICATION PROCESS</h3>
      <p>
        Candidates interested in participating as a mentee must complete the
        JIM’S WEB APPLICATION FORM by DATE.
      </p>
      <p>
        In addition to completing the form, applicants must submit up to 6
        samples of past work (with explanations if needed) as a single PDF.
      </p>
      <p>
        Applications will be reviewed by a group of XXXXX. A final decision will
        be made by DATE, and all mentorships must begin by March 1, 2019.
      </p>
    </article>
    <article id="how-to" class="how-to">
      <h3>HOW TO APPLY</h3>
      <p>What category would you like to apply for?</p>
      <p>Send a brief introduction about yourself. (200 word limit)</p>
      <p>
        Send a description of a project you'd like to pursue that is
        accomplishable within the six months period. (500 word limit)
      </p>
      <p>
        Relate the project to this year's theme of community and your
        interpretation of it.
      </p>
      <a class="apply-link" href="#" rel="nofollow" target="_blank"
        >Apply here</a
      >
    </article>
  </section>
</template>
<script>
export default {
  name: "Info",
  mounted() {
    this.$root.$on("clickedHowTo", () => {
      document.getElementById("how-to").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.how-to h3 {
  color: $secondary-color;
  border-bottom-color: $secondary-color;
}

.apply-link {
  color: #d4e5ed;
  background-color: #bf2312;
  padding: 3px 6px;
  font-family: "Futura", sans-serif;
  text-transform: uppercase;
}
@media (min-width: 767px) {
  @supports (display: grid) {
    .info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 32px;
    }

    .about {
      grid-row: 1 / 4;
    }

    .how-to {
      grid-column: span 2;
    }

    .apply-link {
      font-size: 18px;
    }
  }
}
</style>
