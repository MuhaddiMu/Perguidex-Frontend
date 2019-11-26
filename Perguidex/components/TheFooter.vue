<template>
  <v-footer class="my-7 grey lighten-5">
    <v-container>
      <v-row class="my-5" no-gutters justify="space-between" align="start">
        <v-col cols="12" sm="2" xs="6">
          <div class="title font-weight-bold mb-5">Product</div>
          <div class="my-2 grey--text text--darken-2">Get Started</div>
        </v-col>
        <v-col cols="12" sm="2" xs="6">
          <div class="title font-weight-bold mb-5">Support</div>
          <div class="my-2 grey--text text--darken-2">Help Center</div>
          <div class="my-2 grey--text text--darken-2">FAQ</div>
          <div class="my-2 grey--text text--darken-2">Translations</div>
        </v-col>
        <v-col cols="12" sm="2" xs="6">
          <div class="title font-weight-bold mb-5">About</div>
          <div class="my-2 grey--text text--darken-2">About Us</div>
          <div class="my-2 grey--text text--darken-2">Contact Us</div>
        </v-col>
        <v-col cols="12" sm="2" xs="6">
          <div class="title font-weight-bold mb-5">Legal</div>
          <div class="my-2 grey--text text--darken-2">Terms</div>
          <div class="my-2 grey--text text--darken-2">
            Privacy
            <div class="my-2 grey--text text--darken-2">Security</div>
          </div>
        </v-col>
        <v-col cols="12" sm="2" xs="6">
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
