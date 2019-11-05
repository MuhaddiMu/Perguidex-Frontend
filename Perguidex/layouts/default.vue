<template>
  <section>
    <v-app light>
      <v-app-bar
        class="red"
        elevate-on-scroll
        :clipped-left="clipped"
        fixed
        app
      >
        <v-container pa-0 d-flex>
          <v-toolbar-title v-text="title" />
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
