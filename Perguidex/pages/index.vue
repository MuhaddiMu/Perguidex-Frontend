<template>
  <v-layout class="red lighten-1" column justify-center align-center>
    <v-container grid-list-xl>
      <v-layout py-3 row justify-space-around>
        <v-flex align-self-center xs12 md6>
          <div class="white--text font-weight-medium display-3">
            It's All About Managing Yourself
          </div>
          <div class="white--text py-3">
            Life can feel ovefwhelming, but it doesn't have to. Perguidex lets
            you keep track of everything in one place, so you can get it all
            done and enjoy more peace of mind along the way.
          </div>
          <v-btn class="mt-5 red--text" large rounded>
            Get Started — It's Free
          </v-btn>
          <div class="mb-5 white--text caption">
            Wondering how it works? Watch a video
          </div>
        </v-flex>
        <v-flex xs12 md6>
          <img draggable="false" alt="Goals" width="100%" src="Goals.svg" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
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
