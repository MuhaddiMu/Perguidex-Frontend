// Authenticated Views
<template>
  <v-app light>
    <TheHeader />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import TheHeader from '@/components/AuthenticatedComponents/Header/TheHeader'
export default {
  middleware: 'authenticated',
  components: {
    TheHeader
  }
}
</script>

<style>
html {
  overflow-y: auto;
}
.v-toolbar__content {
  border-bottom: 1px solid #e53935;
}
.w-40 {
  width: 40px;
}
</style>
