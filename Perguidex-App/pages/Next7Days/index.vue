<template>
  <v-container fluid>
    <v-row align="center" justify="space-between">
      <v-col cols="12" sm="6">
        <Tasks />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Tasks from '@/components/Activities/Tasks'
export default {
  components: {
    Tasks
  },
  head() {
    return {
      title: 'Next 7 Days'
    }
  }
}
</script>
