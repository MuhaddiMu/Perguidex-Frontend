<template>
  <div class="text-center">
    <ShortcutKey
      v-if="showKeyboardShortcuts"
      :showProp="showKeyboardShortcuts"
    />
    <v-menu
      v-model="Menu"
      transition="scale-transition"
      close-on-content-click
      offset-y
      origin="top center"
      right
    >
      <template v-slot:activator="{ on }">
        <div>
          <v-btn v-on="on" color="white" fab text small icon
            ><v-icon>mdi-cog</v-icon></v-btn
          >
        </div>
      </template>

      <v-card>
        <v-list dense nav>
          <v-list-item nuxt link to="/app/settings">
            <v-list-item-icon><v-icon left>mdi-cogs</v-icon></v-list-item-icon>
            <v-list-item-title class="ml-n5 font-weight-regular"
              >Settings</v-list-item-title
            >
          </v-list-item>
          <v-divider class="pt-1"></v-divider>

          <v-list-item @click="SyncEverything()" nuxt link to="">
            <v-list-item-icon><v-icon left>mdi-sync</v-icon></v-list-item-icon>
            <v-list-item-title class="ml-n5 font-weight-regular"
              >Sync</v-list-item-title
            >
          </v-list-item>
          <!-- <v-list-item nuxt link to="">
            <v-list-item-icon
              ><v-icon left>mdi-history</v-icon></v-list-item-icon
            >
            <v-list-item-title class="ml-n5 font-weight-regular"
              >View Activity Log</v-list-item-title
            >
          </v-list-item> -->
          <v-list-item @click="Print()" nuxt link to="">
            <v-list-item-icon
              ><v-icon left>mdi-printer</v-icon></v-list-item-icon
            >
            <v-list-item-title class="ml-n5 font-weight-regular"
              >Print</v-list-item-title
            >
          </v-list-item>

          <v-divider class="pt-1"></v-divider>
          <v-list-item nuxt link to="/help">
            <v-list-item-icon
              ><v-icon left>mdi-help-circle-outline</v-icon></v-list-item-icon
            >
            <v-list-item-title class="ml-n5 font-weight-regular"
              >Support</v-list-item-title
            >
          </v-list-item>
          <v-list-item @click="fnShowKeyboardShortCuts()" nuxt link to="">
            <v-list-item-icon
              ><v-icon left>mdi-keyboard-outline</v-icon></v-list-item-icon
            >
            <v-list-item-title class="ml-n5 font-weight-regular"
              >Keyboard Shortcuts</v-list-item-title
            >
          </v-list-item>
          <!-- <v-list-item nuxt link to="">
            <v-list-item-icon
              ><v-icon left>mdi-lightbulb-on-outline</v-icon></v-list-item-icon
            >
            <v-list-item-title class="ml-n5 font-weight-regular"
              >What's New</v-list-item-title
            >
          </v-list-item> -->
          <v-divider class="pt-1"></v-divider>
          <v-list-item @click="LogOut()" nuxt link to="">
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
                  <!-- <nuxt-link class="grey--text text--darken-3 Link" to="/"
                    >View changelog</nuxt-link
                  > -->
                  <br />
                  Last successful sync: 6 seconds ago</small
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
import logout from '@/graphql/auth/logoutUser.gql'
import ShortcutKey from '@/components/AuthenticatedComponents/Utils/ShortcutKey.vue'
export default {
  components: {
    ShortcutKey
  },
  data: () => ({
    Menu: false,
    showKeyboardShortcuts: false
  }),

  methods: {
    // Logout Functionality
    async LogOut() {
      try {
        await this.$apollo
          .mutate({
            mutation: logout
          })
          .then(({ data }) => data && data.logout)
        await this.$apolloHelpers.onLogout()
        this.$router.push('/')
      } catch (error) {}
    },
    fnShowKeyboardShortCuts() {
      this.showKeyboardShortcuts = !this.showKeyboardShortcuts
    },
    SyncEverything() {
      this.$root.$emit('SyncTasks')
    },
    Print() {
      this.Menu = false
      this.$root.$emit('Print')
    }
  }
}
</script>
