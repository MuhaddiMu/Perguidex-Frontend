<template>
  <section>
    <v-row class="red lighten-1 HeightMax" justify="center" align="center">
      <v-container mb-12 grid-list-xl>
        <v-row
          justify="space-around"
          class="text-center text-md-left text-sm-left"
        >
          <v-col
            align-self="center"
            cols="12"
            md="6"
            sm="12"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
          >
            <div class="white--text font-weight-bold display-3">
              It’s All About Managing Yourself
            </div>
            <div class="white--text py-3 font-weight-regular">
              Life can feel overwhelming, but it doesn’t have to. Perguidex lets
              you keep track of everything in one place, so you can get it all
              done and enjoy more peace of mind along the way.
            </div>
            <v-btn
              nuxt
              to="signup"
              class="white mt-5 red--text font-weight-bold"
              x-large
            >
              Get Started — It’s Free
            </v-btn>
            <div class="mb-5 white--text caption font-weight-regular">
              Wondering how it works? <a href="#">Watch a video</a>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            sm="12"
            class="d-none d-sm-flex"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
          >
            <img
              draggable="false"
              alt="Goals"
              width="100%"
              src="~/assets/images/Goals.svg"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <FeaturesIndex />
  </section>
</template>

<script>
import FeaturesIndex from '@/components/FeaturesIndex'
export default {
  layout: 'Homepage',
  components: {
    FeaturesIndex
  },
  head() {
    return {
      titleTemplate:
        '%s | Your Personal Digital Mentor – Manage Everything at One Place',
      title: 'Perguidex'
    }
  }
}
</script>
<style scoped>
@media (min-width: 1025px) {
  .HeightMax {
    height: 80vh;
  }
}
@media (min-width: 1281px) {
  .HeightMax {
    height: 80vh;
  }
}
a {
  color: #fff !important;
  text-decoration: none;
}
</style>
