<template>
  <v-container fluid>
    <v-row align="center" justify="space-between">
      <v-col cols="12" sm="12">
        <Settings />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Settings from '~/components/AuthenticatedComponents/Settings/Settings.vue'
export default {
  layout: 'Authed',
  components: {
    Settings
  },
  head() {
    return {
      title: 'Settings'
    }
  }
}
</script>
