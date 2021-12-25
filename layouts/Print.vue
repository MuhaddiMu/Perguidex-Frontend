// Authenticated Print Views
<template>
  <v-app light>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  middleware: 'authenticated'
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
