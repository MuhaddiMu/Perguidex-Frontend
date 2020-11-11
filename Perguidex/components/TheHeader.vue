<template>
  <v-app-bar
    :clipped-left="clipped"
    class="red lighten-1"
    elevate-on-scroll
    fixed
    app
  >
    <v-container py-3 pa-0 d-flex>
      <v-img
        class="mx-2"
        src="logo.png"
        max-height="40"
        max-width="40"
        contain
      ></v-img>
      <v-btn
        depressed
        nuxt
        href="/"
        text
        class="font-weight-bold text-capitalize white--text"
      >
        <v-toolbar-title v-text="'Perguidex'" />
      </v-btn>
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
