<template>
  <section>
    <v-layout
      class="red lighten-1 HeightMax"
      column
      justify-center
      align-center
    >
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
            <div class="white--text py-3">
              Life can feel overwhelming, but it doesn’t have to. Perguidex lets
              you keep track of everything in one place, so you can get it all
              done and enjoy more peace of mind along the way.
            </div>
            <v-btn class="white mt-5 red--text font-weight-bold" x-large>
              Get Started — It’s Free
            </v-btn>
            <div class="mb-5 white--text caption">
              Wondering how it works? Watch a video
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
            <img draggable="false" alt="Goals" width="100%" src="Goals.svg" />
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <FeaturesIndex />
  </section>
</template>

<script>
import FeaturesIndex from '@/components/FeaturesIndex'
export default {
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
<style>
.RoundCorner {
  border-radius: 10px !important;
}
.Shadow {
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}
@media (min-width: 641px) {
  .HeightMax {
    height: 80vh;
  }
}
@media (min-width: 961px) {
  .HeightMax {
    height: 80vh;
  }
}
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
</style>
