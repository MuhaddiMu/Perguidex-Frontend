// Log in, Sign up and Forgot page Layout
<template>
  <section>
    <v-app light>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row align="center" justify="center">
              <nuxt />
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </section>
</template>

<script>
export default {
  middleware: 'redirectIfAuthenticated'
}
</script>
