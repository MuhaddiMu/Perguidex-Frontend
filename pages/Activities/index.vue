<template>
  <v-container fluid>
    <v-row align="center" justify="space-between">
      <v-col cols="12" sm="12">
        <Activities />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Activities from '@/components/Activities/Activities'
export default {
  layout: 'Authed',
  components: {
    Activities
  },
  head() {
    return {
      title: 'All Activities'
    }
  }
}
</script>
