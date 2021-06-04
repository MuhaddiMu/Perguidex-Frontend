<template>
  <v-container fluid>
    <v-row align="center" justify="space-between">
      <v-col cols="12" sm="12">
        <Next7Days />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Next7Days from '@/components/AuthenticatedComponents/Activities/Next7Days'
export default {
  layout: 'Authed',
  components: {
    Next7Days
  },
  head() {
    return {
      title: 'Next 7 Days'
    }
  }
}
</script>
