<template>
  <section class="info">
    <article class="about">
      <h3>ABOUT JIM’S WEB</h3>
      <p>
        Jim’s Web is a mentorship program that connects emerging creatives with
        creative professionals who can advise them on a project. The program is
        run by 8-Ball Community, a not-for-profit organization that generates
        collaborative and educational creative exchange through free,
        open-access platforms and events.
      </p>
      <p>
        Jim’s Web came together from the decision of Jim’s dear friends Laila
        Gohar, Omar Sosa and Jeremy Liebman and Jim’s sister Kathleen Walrod to
        collaborate with 8-Ball Community, an organization Jim loved and
        supported. The intention was to honor their brother and friend’s knack
        for forming webs between artists of all fields through Jim’s own social
        network, creating unlikely friendships and collaborators along the way.
      </p>
      <p>
        Mentors will contribute their expertise to one mentee over a four month
        period. Mentors will provide access to their studio or office throughout
        the mentorship period and advise the mentee on their proposed project.
      </p>
      <p>
        Six mentorships will be awarded each year.
      </p>
      <p>
        Each awardee will receive a grant of $3,000 to help them produce their
        proposed project. The completed projects will be showcased in a group
        exhibition at the end of the program. You can see images of our 2019
        shows here.
      </p>
    </article>
    <article class="eligibility">
      <h3>ELIGIBILITY REQUIREMENTS</h3>
      <p>No age requirement.</p>
      <p>
        Participants must be able to complete their project over 4 months
        period.
      </p>
    </article>
    <article id="how-to" class="application">
      <h3>APPLICATION PROCESS</h3>
      <p>
        In addition to completing the form, applicants must submit up to 5
        samples of past work (with explanations if needed) as a single PDF.
      </p>
      <p>
        2020 application will be opening soon.
      </p>
    </article>
    <article class="mentors">
      <h3>2019 MENTORS</h3>
      <div>
        <p>
          Architecture:
          <a href="http://food-newyork.com/" rel="nofollow" target="_blank"
            >Dong-Ping Wong</a
          >
        </p>
        <p>Fashion Design: Cynthia Leung</p>
        <p>
          Fine Arts:
          <a
            href="https://www.skny.com/artists/landon-metz"
            rel="nofollow"
            target="_blank"
            >Landon Metz</a
          >
        </p>
      </div>
      <div>
        <p>
          Photography:
          <a href="http://jeremyliebman.com/" rel="nofollow" target="_blank"
            >Jeremy Liebman</a
          >
        </p>
        <p>
          Product Design:
          <a href="http://ransmeier.com/" rel="nofollow" target="_blank"
            >Leon Ransmeier</a
          >
          and
          <a
            href="http://www.tiffany-lambert.com/"
            rel="nofollow"
            target="_blank"
            >Tiffany Lambert</a
          >
        </p>
        <p>
          Publishing:
          <a href="http://vimeo.com/82135130" rel="nofollow" target="_blank"
            >Kim Hastreiter</a
          >
        </p>
      </div>
    </article>
    <article class="awardees">
      <h3>2019 AWARDEES</h3>
      <div>
        <p>
          Architecture: Tova Kleiner
        </p>
        <p>
          Fashion: Nicole McLaughlin
        </p>
        <p>
          Fine Art: K. Wentrcek &amp; A. Zebulon
        </p>
      </div>
      <div>
        <p>
          Photography: Kimari Hazward
        </p>
        <p>
          Product Design: Daniel Castillo
        </p>
        <p>
          Publishing: Claire Hungerford
        </p>
      </div>
    </article>
    <!-- <article class="apply-btn">
      <a
        class="apply-link"
        href="https://forms.gle/8YSHPGJcMUANkjgp9"
        rel="nofollow"
        target="_blank"
        >Apply here</a
      >
    </article> -->
    <article class="about-community">
      <h3>ABOUT 8-BALL COMMUNITY</h3>
      <p>
        8-Ball is an independent non-profit organization that — through free,
        open- access platforms and events — nurtures and supports a community of
        artists.
      </p>
      <p>
        We provide virtual and physical meeting sites for people of all scenes,
        generations and backgrounds.
      </p>
      <p>
        Our mission is to generate collaborative and educational exchange
        through public access television and radio station, an imprint, a self
        publishing fair, a public library, an internship program, a residency
        and series of workshops in art-related trades.
      </p>
      <p>
        8-Ball Community operates free of elitism and is governed by its
        participants.
      </p>
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
  margin: 3rem 0;
}

.apply-link {
  background-color: #bf2312;
  color: #d4e5ed;
  font-family: "Futura", sans-serif;
  padding: 3px 6px;
  text-transform: uppercase;
}

.info {
  display: block;
}
@media (min-width: 770px) {
  @supports (display: grid) {
    .info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 32px;
    }

    .about {
      grid-row: 1 / 4;
    }

    .eligibility {
      grid-column: 2;
      grid-row: 1;
    }

    .application {
      grid-column: 2;
      margin-top: 32px;
    }

    .mentors {
      display: grid;
      grid-row: 4;
      grid-column: span 2;
      grid-template-columns: 1fr 1fr;
    }

    .mentors h3,
    .awardees h3 {
      grid-column: span 2;
    }

    .awardees {
      display: grid;
      grid-column: span 2;
      grid-template-columns: 1fr 1fr;
    }

    .how-to {
      grid-column: span 2;
    }

    .apply-link {
      font-size: 25px;
    }

    .about-community {
      grid-column: span 2;
    }
  }
}
</style>
