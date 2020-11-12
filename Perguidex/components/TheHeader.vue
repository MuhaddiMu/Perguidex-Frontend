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
        <v-img class="mx-2" src="logo.svg" max-width="155" height="40"></v-img>
        <v-spacer />
        <v-btn
          nuxt
          to="Login"
          text
          class="font-weight-medium d-none d-sm-flex white--text"
        >
          <div>Login</div>
        </v-btn>

        <v-btn
          nuxt
          to="Signup"
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

<style scoped>
a {
  text-decoration: none;
}
</style>
