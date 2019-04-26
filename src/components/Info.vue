<template>
  <section class="info">
    <article class="about">
      <h3>ABOUT JIM’S WEB</h3>
      <p>
        Jim’s Web is a mentorship program that connects emerging creatives with
        creative professionals who can advise them on a project.
      </p>
      <p>
      Mentors will contribute their expertise to one mentee over a four month period. Mentors will provide access to their studio or office twice a month throughout the
      mentorship period (between June and September 2019) and advise the mentee on their proposed project.
    </p>
      <p>
        Six mentorships will be awarded each year, one in each of the following
        disciplines:
      </p>
      <ul>
        <li>Architecture / Interiors</li>
        <li>Fashion Design</li>
        <li>Fine Arts</li>
        <li>Product Design</li>
        <li>Photography</li>
        <li>Publishing</li>
      </ul>
      <p>
        Each awardee will receive a grant of $3,000 and access to their
        mentor’s studio space over the course of the four month term. The
        completed projects will be showcased in a group exhibition.
      </p>
    </article>
    <article class="eligibility">
      <h3>ELIGIBILITY REQUIREMENTS</h3>
      <p>No age requirement.</p>
      <p>
        Participants must be able to complete their project
        between June 15th and Sept 15th.
      </p>
    </article>
    <article id="how-to" class="application">
      <h3>APPLICATION PROCESS</h3>
      <p>
        In addition to completing the form, applicants must submit up to 6
        samples of past work (with explanations if needed) as a single PDF.
      </p>
      <p>Candidates interested in participating as a mentee must complete the JIM’S WEB APPLICATION FORM by May 25th.</p>
      <p>Final decisions will be made by June 5th, and all mentorships will begin by June 15th, 2019.</p>
    </article>
    <article class="mentors">
      <h3>MENTORS</h3>
      <div>
        <p>Architecture: <a href="http://food-newyork.com/" rel="nofollow" target="_blank">Dong-Ping Wong</a></p>
        <p>Fashion Design: Cynthia Leung</p>
        <p>Fine Arts: <a
          href="https://www.skny.com/artists/landon-metz"
          rel="nofollow"
          target="_blank"
        >Landon Metz</a></p>
      </div>
      <div>
      <p>Photography: <a href="http://jeremyliebman.com/" rel="nofollow" target="_blank">Jeremy Liebman</a></p>
        <p>Product Design: <a href="http://ransmeier.com/" rel="nofollow" target="_blank">Leon Ransmeier</a> and Tiffany Lambert</p>
        <p>Publishing: <a href="http://vimeo.com/82135130" rel="nofollow" target="_blank">Kim Hastreiter</a></p>
      </div>
    </article>
    <article class="apply-btn">
      <a class="apply-link" href="https://forms.gle/8YSHPGJcMUANkjgp9" rel="nofollow" target="_blank">Apply here</a>
    </article>
    <article>
      <h3>ABOUT 8-BALL COMMUNITY</h3>
      <p>
        8-Ball is an independent non-profit organization that — through free, open- access platforms and events — nurtures and supports a community of artists.
      </p>
      <p>We provide virtual and physical meeting sites for people of all scenes, generations and backgrounds.</p>
      <p>Our mission is to generate collaborative and educational exchange through public access television and radio station, an imprint, a self publishing fair, a public library, an internship program, a residency and series of workshops in art-related trades.</p>
      <p>8-Ball Community operates free of elitism and is governed by its participants.</p>
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
.apply-btn {
  margin-top: 3rem;
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
      grid-row: 1 / 3;
    }

    .mentors {
      grid-row: 3;
      grid-column: span 2;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .mentors h3 {
      grid-column: span 2;
    }

    .how-to {
      grid-column: span 2;
    }

    .apply-link {
      font-size: 25px;
    }
  }
}
</style>
