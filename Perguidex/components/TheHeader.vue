<template>
  <v-app-bar
    class="red lighten-1"
    elevate-on-scroll
    :clipped-left="clipped"
    fixed
    app
  >
    <v-container py-3 pa-0 d-flex>
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
      <v-btn nuxt to="Login" text class="d-none d-sm-flex white--text">
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
