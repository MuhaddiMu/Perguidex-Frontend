<template>
  <section>
    <v-app light>
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
            rounded
            nuxt
            href="/"
            text
            class="font-weight-bold text-capitalize white--text"
          >
            <v-toolbar-title v-text="title" />
          </v-btn>
          <v-spacer />
          <v-btn rounded text class="d-none d-sm-flex white--text">
            <div>Login</div>
          </v-btn>

          <v-btn rounded depressed class="red--text">
            <div>Get Started — It's Free</div>
          </v-btn>
        </v-container>
      </v-app-bar>

      <v-content>
        <v-container pa-0 fluid>
          <nuxt />
        </v-container>
      </v-content>

      <v-footer class="my-5">
        <v-container
          ><div>&copy; {{ new Date().getFullYear() }}</div></v-container
        >
      </v-footer>
    </v-app>
  </section>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        }
      ],
      title: 'Perguidex'
    }
  }
}
</script>
