<template>
  <v-container fluid>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <Tasks />
      </v-flex>
    </v-layout>
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
      title: 'Dashboard'
    }
  }
}
</script>
