<template>
  <v-layout class="red lighten-1" column justify-center align-center>
    <v-container>
      <v-layout py-3 row align-center justify-space-around="">
        <v-flex xs12 md4>
          <div class="white--text font-weight-medium display-3">
            It's All About Managing Yourself
          </div>
          <div class="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maiores
            quaerat totam ducimus. Rerum magni aspernatur impedit ea quis
            dolorum animi sit magnam itaque soluta tempora eius, laboriosam
            voluptas? Exercitationem?
          </div>
        </v-flex>
        <v-flex xs12 md4>
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
