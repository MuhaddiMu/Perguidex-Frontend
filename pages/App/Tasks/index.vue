<template>
  <v-container fluid>
    <v-row justify="space-between">
      <v-col cols="12" sm="6">
        <Tasks />
      </v-col>
      <v-col cols="12" sm="5">
        <Quotes />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Tasks from '@/components/AuthenticatedComponents/Activities/Tasks'
import Quotes from '@/components/AuthenticatedComponents/Activities/Quotes'
export default {
  layout: 'Authed',

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
