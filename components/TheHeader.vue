<template>
  <v-app-bar
    :clipped-left="clipped"
    class="red lighten-1"
    elevate-on-scroll
    fixed
    app
  >
    <v-container class="mx-auto py-0">
      <v-row align="center">
        <nuxt-link to="/">
          <v-img
            class="mx-2"
            src="logo.svg"
            max-height="50"
            max-width="50"
          ></v-img>
        </nuxt-link>
        <nuxt-link to="/">
          <v-toolbar-title class="white--text font-weight-bold ml-n1">
            perguidex
          </v-toolbar-title>
        </nuxt-link>
        <v-spacer />
        <v-btn
          nuxt
          to="login"
          text
          class="font-weight-regular d-none d-sm-flex white--text"
        >
          <div>Login</div>
        </v-btn>

        <v-btn
          nuxt
          to="signup"
          depressed
          class="white red--text font-weight-bold"
        >
          <div>Get Started</div>
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      clipped: false,
      fixed: false
    }
  }
}
</script>

<style scoped></style>
