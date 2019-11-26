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

          <v-btn rounded depressed class="white red--text">
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
        <v-container>
          <v-row no-gutters justify="space-between" align="start">
            <v-col cols="12" sm="2">
              <div class="title font-weight-bold mb-5">Product</div>
              <div class="my-2 grey--text text--darken-2">Get Started</div>
            </v-col>
            <v-col cols="12" sm="2">
              <div class="title font-weight-bold mb-5">Support</div>
              <div class="my-2 grey--text text--darken-2">Help Center</div>
              <div class="my-2 grey--text text--darken-2">FAQ</div>
              <div class="my-2 grey--text text--darken-2">Translations</div>
            </v-col>
            <v-col cols="12" sm="2">
              <div class="title font-weight-bold mb-5">About</div>
              <div class="my-2 grey--text text--darken-2">About Us</div>
              <div class="my-2 grey--text text--darken-2">Contact Us</div>
            </v-col>
            <v-col cols="12" sm="2">
              <div class="title font-weight-bold mb-5">Legal</div>
              <div class="my-2 grey--text text--darken-2">Terms</div>
              <div class="my-2 grey--text text--darken-2">
                Privacy
                <div class="my-2 grey--text text--darken-2">Security</div>
              </div>
            </v-col>
            <v-col cols="12" sm="2">
              <div>
                <v-select
                  value="English"
                  :items="Lang"
                  label="Select Language"
                  outlined
                ></v-select>
              </div>
              <div class="mb-5 text-center">
                <v-btn icon fab class="grey lighten-2">
                  <v-icon class="black--text">mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon fab class="grey lighten-2">
                  <v-icon class="black--text">mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon fab class="grey lighten-2">
                  <v-icon class="black--text">mdi-instagram</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <!-- <div>&copy; {{ new Date().getFullYear() }}</div> -->
        </v-container>
      </v-footer>
    </v-app>
  </section>
</template>

<script>
export default {
  data() {
    return {
      Lang: ['English'],
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
