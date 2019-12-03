<template>
  <v-footer class="my-7 grey lighten-5">
    <v-container>
      <v-row
        class="my-5 text-center text-md-left text-sm-left"
        no-gutters
        align="start"
        justify="space-between"
      >
        <v-col cols="12" md="2" sm="4">
          <div class="title font-weight-bold mb-5">Product</div>
          <div class="my-2 grey--text text--darken-2">
            <nuxt-link to="Signup">Get Started</nuxt-link>
          </div>
        </v-col>
        <v-col cols="12" md="2" sm="4">
          <div class="title font-weight-bold mb-5">Support</div>
          <div class="my-2 grey--text text--darken-2">
            <a href="#">Help Center</a>
          </div>
          <div class="my-2 grey--text text--darken-2">
            <a href="#">FAQ</a>
          </div>
          <div class="my-2 grey--text text--darken-2">
            <a href="#">Translations</a>
          </div>
        </v-col>
        <v-col cols="12" md="2" sm="4">
          <div class="title font-weight-bold mb-5">About</div>
          <div class="my-2 grey--text text--darken-2">
            <a href="#">About Us</a>
          </div>
          <div class="my-2 grey--text text--darken-2">
            <a href="#">Contact Us</a>
          </div>
        </v-col>
        <v-col cols="12" md="2" sm="4">
          <div class="title font-weight-bold mb-5">Legal</div>
          <div class="my-2 grey--text text--darken-2">
            <a href="#">Terms</a>
          </div>
          <div class="my-2 grey--text text--darken-2">
            <a href="#">Privacy</a>
            <div class="my-2 grey--text text--darken-2">
              <a href="#">Security</a>
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
          <div>
            <v-select
              dense
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
      <v-divider class="mt-12"></v-divider>
      <div
        class="mt-4 mb-12
           grey--text text--darken-2"
      >
        &copy; 2019 Perguidex
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
}
</style>
