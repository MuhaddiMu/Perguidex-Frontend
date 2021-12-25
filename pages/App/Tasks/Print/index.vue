<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12">
        <Tasks />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Tasks from '@/components/AuthenticatedComponents/Activities/Tasks'
export default {
  layout: 'Print',

  components: {
    Tasks
  },
  head() {
    return {
      title: 'Tasks'
    }
  }
}
</script>
