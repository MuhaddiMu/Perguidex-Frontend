<template>
  <div class="text-center">
    <v-menu v-model="Menu" close-on-content-click offset-y nudge-width="200">
      <template v-slot:activator="{ on }">
        <div>
          <v-btn color="white" fab text small icon v-on="on"
            ><v-icon>mdi-settings</v-icon></v-btn
          >
        </div>
      </template>

      <v-card>
        <v-divider class="pt-1"></v-divider>

        <v-list dense nav>
          <v-list-item nuxt link to="">
            <v-list-item-icon><v-icon left>mdi-sync</v-icon></v-list-item-icon>
            <v-list-item-title class="ml-n5 font-weight-regular"
              >Sync</v-list-item-title
            >
          </v-list-item>
          <v-list-item nuxt link to="">
            <v-list-item-icon
              ><v-icon left>mdi-history</v-icon></v-list-item-icon
            >
            <v-list-item-title class="ml-n5 font-weight-regular"
              >View Activity Log</v-list-item-title
            >
          </v-list-item>
          <v-list-item nuxt link to="">
            <v-list-item-icon
              ><v-icon left>mdi-printer</v-icon></v-list-item-icon
            >
            <v-list-item-title class="ml-n5 font-weight-regular"
              >Print</v-list-item-title
            >
          </v-list-item>

          <v-divider class="pt-1"></v-divider>
          <v-list-item nuxt link to="">
            <v-list-item-icon
              ><v-icon left>mdi-help-circle-outline</v-icon></v-list-item-icon
            >
            <v-list-item-title class="ml-n5 font-weight-regular"
              >Support</v-list-item-title
            >
          </v-list-item>
          <v-list-item nuxt link to="">
            <v-list-item-icon
              ><v-icon left>mdi-keyboard-outline</v-icon></v-list-item-icon
            >
            <v-list-item-title class="ml-n5 font-weight-regular"
              >Keyboard Shortcuts</v-list-item-title
            >
          </v-list-item>
          <v-list-item nuxt link to="">
            <v-list-item-icon
              ><v-icon left>mdi-lightbulb-on-outline</v-icon></v-list-item-icon
            >
            <v-list-item-title class="ml-n5 font-weight-regular"
              >What's New</v-list-item-title
            >
          </v-list-item>
          <v-divider class="pt-1"></v-divider>
          <v-list-item nuxt link to="">
            <v-list-item-icon
              ><v-icon left>mdi-logout</v-icon></v-list-item-icon
            >
            <v-list-item-title class="ml-n5 font-weight-regular"
              >Log Out</v-list-item-title
            >
          </v-list-item>
          <v-divider class="pt-1"></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle
                class="font-weight-regular grey--text text--darken-1"
              >
                <small>
                  Version 1.
                  <nuxt-link class="grey--text text--darken-3 Link" to="/"
                    >View changelog</nuxt-link
                  ><br />
                  Last successful sync: 25 minutes ago</small
                >
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
export default {
  data: () => ({
    Menu: false
  })
}
</script>
