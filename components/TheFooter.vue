<template>
  <v-footer class="mt-7 grey lighten-5">
    <v-container>
      <v-row
        class="my-5 text-center text-md-left text-sm-left"
        no-gutters
        align="start"
        justify="space-between"
      >
        <v-col cols="12" md="2" sm="4">
          <div class="title font-weight-bold mb-5">Product</div>
          <div class="my-2 grey--text text--darken-2 font-weight-regular">
            <nuxt-link to="/signup">Get Started</nuxt-link>
          </div>
        </v-col>
        <v-col cols="12" md="2" sm="4">
          <div class="title font-weight-bold mb-5">Support</div>
          <div class="my-2 grey--text text--darken-2 font-weight-regular">
            <nuxt-link to="help">Help Center</nuxt-link>
          </div>
          <!-- <div class="my-2 grey--text text--darken-2 font-weight-regular">
            <a href="#">FAQs</a>
          </div> -->
          <div class="my-2 grey--text text--darken-2 font-weight-regular">
            <a href="#">Translations</a>
          </div>
        </v-col>
        <v-col cols="12" md="2" sm="4">
          <div class="title font-weight-bold mb-5">About</div>
          <div class="my-2 grey--text text--darken-2 font-weight-regular">
            <nuxt-link to="/about">About Us</nuxt-link>
          </div>
          <div class="my-2 grey--text text--darken-2 font-weight-regular">
            <nuxt-link to="/help">Contact Us</nuxt-link>
          </div>
        </v-col>
        <v-col cols="12" md="2" sm="4">
          <div class="title font-weight-bold mb-5">Legal</div>
          <div class="my-2 grey--text text--darken-2 font-weight-regular">
            <nuxt-link to="terms">Terms</nuxt-link>
          </div>
          <div class="my-2 grey--text text--darken-2 font-weight-regular">
            <nuxt-link to="/privacy">Privacy</nuxt-link>
            <div class="my-2 grey--text text--darken-2 font-weight-regular">
              <nuxt-link to="/security">Security</nuxt-link>
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="2"
          sm="12"
          xs="12"
          class="order-first order-sm-first order-xl-last order-md-last"
        >
          <div class="font-weight-regular">
            <v-select
              :items="Lang"
              dense
              value="English"
              label="Select Language"
              outlined
            ></v-select>
          </div>
          <div class="mb-5 text-center">
            <v-btn
              href="https://facebook.com/perguidex"
              icon
              fab
              class="grey lighten-2"
            >
              <v-icon class="black--text">mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon fab class="grey lighten-2">
              <v-icon href="https://twitter.com/perguidex/" class="black--text"
                >mdi-twitter</v-icon
              >
            </v-btn>
            <v-btn
              href="https://instagram.com/perguidex/"
              icon
              fab
              class="grey lighten-2"
            >
              <v-icon class="black--text">mdi-instagram</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-divider class="mt-12"></v-divider>
      <div class="mt-4 mb-12 grey--text text--darken-2 font-weight-regular">
        &copy; <span>{{ new Date().getFullYear() }}</span> Perguidex
      </div>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  data() {
    return {
      Lang: ['English']
    }
  }
}
</script>

<style scoped>
a {
  color: #616161 !important;
}
a:hover,
a:focus,
a:active {
  color: #424242 !important;
  text-decoration: underline;
}
</style>
