<template>
  <v-row align="center" justify="center" class="my-5">
    <v-col class="text-center" cols="12">
      <h1 class="grey--text text--darken-3 display-2 font-weight-bold mb-4">
        {{ title }}
      </h1>
      <h4 v-if="date" class="grey--text text--darken-1 subheading">
        Posted on {{ date }}
      </h4>
    </v-col>
    <v-card elevation="20" max-width="900" class="grey lighten-5">
      <v-img v-if="featuredImage" :src="featuredImage" height="400"></v-img>
      <v-card-text v-html="body" class="pa-5 body-1 grey--text text--darken-3">
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
export default {
  props: {
    featuredImage: {
      type: String,
      default: null
    },
    body: {
      required: true,
      type: String
    },
    date: {
      required: false,
      default: null,
      type: String
    },
    title: {
      required: true,
      type: String
    }
  }
}
</script>
