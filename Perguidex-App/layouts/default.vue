<template>
  <v-app light>
    <TheHeader />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import TheHeader from '@/components/Header/TheHeader'
export default {
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
