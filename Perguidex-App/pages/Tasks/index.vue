<template>
  <v-container fluid>
    <v-row justify="space-between">
      <v-col cols="12" sm="8">
        <Tasks />
      </v-col>
      <v-col cols="12" sm="4">
        <Quotes />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Tasks from '@/components/Activities/Tasks'
import Quotes from '@/components/Activities/Quotes'
export default {
  components: {
    Tasks,
    Quotes
  },
  head() {
    return {
      title: 'Tasks'
    }
  }
}
</script>
