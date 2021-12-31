<template>
  <v-card outlined>
    <v-row
      ><v-col cols="3">
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                <span class="d-none d-md-flex">Account Settings</span>
                <v-icon class="d-md-none">mdi mdi-cog</v-icon>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item v-for="setting in settings" :key="setting.title" link>
              <v-list-item-icon>
                <v-icon>{{ setting.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ setting.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer></v-col
      >
      <v-col cols="9">
        <v-card-title>Profile</v-card-title>
        <v-card-text>
          <TheSettingsProfile />
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import TheSettingsProfile from '@/components/AuthenticatedComponents/Settings/TheSettingsProfile.vue'
export default {
  components: {
    TheSettingsProfile
  },
  data() {
    return {
      settings: [{ title: 'Profile', show: false, icon: 'mdi-account' }]
    }
  }
}
</script>
