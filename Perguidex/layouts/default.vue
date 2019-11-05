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
          <v-btn text>
            <v-toolbar-title class="font-weight-bold white--text" v-text="title"
          /></v-btn>
          <v-spacer />
          Login & SignUp
        </v-container>
      </v-app-bar>

      <v-content>
        <v-container pa-0 fluid>
          <nuxt />
        </v-container>
      </v-content>

      <v-footer :fixed="fixed" app>
        <span>&copy; 2019</span>
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
