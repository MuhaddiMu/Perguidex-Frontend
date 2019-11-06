<template>
  <section>
    <v-layout class="red lighten-1" column justify-center align-center>
      <v-container mb-12 grid-list-xl>
        <v-layout mb-12 row justify-space-around>
          <v-flex align-self-center xs12 md6>
            <div class="white--text font-weight-medium display-3">
              It's All About Managing Yourself
            </div>
            <div class="white--text py-3">
              Life can feel ovefwhelming, but it doesn't have to. Perguidex lets
              you keep track of everything in one place, so you can get it all
              done and enjoy more peace of mind along the way.
            </div>
            <v-btn class="mt-5 red--text" x-large rounded>
              Get Started — It's Free
            </v-btn>
            <div class="mb-5 white--text caption pl-5">
              Wondering how it works? Watch a video
            </div>
          </v-flex>
          <v-flex xs12 md6>
            <img draggable="false" alt="Goals" width="100%" src="Goals.svg" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
    <v-layout column justify-center align-center>
      <v-container fluid grid-list-xl>
        <v-card
          :elevation="12"
          class="RoundCorner mx-auto"
          max-width="100%"
          style="margin-top: -64px;"
        >
          <v-toolbar flat>
            <v-toolbar-title class="grey--text">Title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon> <v-icon>mdi-magnify</v-icon> </v-btn>

            <v-btn icon>
              <v-icon>mdi-apps</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>

          <v-divider></v-divider>

          <v-card-text style="height: 200px;"></v-card-text>
        </v-card>
      </v-container>
    </v-layout>
  </section>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: '%s | Track Productivity, Be The Best ',
      title: 'Perguidex'
    }
  }
}
</script>
<style>
.RoundCorner {
  border-radius: 10px !important;
}
</style>
