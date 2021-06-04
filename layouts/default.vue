// Landing Pages
<template>
  <section>
    <v-app light>
      <TheHeader />
      <v-main>
        <v-container pa-0 fluid>
          <nuxt />
        </v-container>
      </v-main>
      <TheFooter />
      <ScrollToTop />
    </v-app>
  </section>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import ScrollToTop from '@/components/ScrollToTop'

export default {
  components: {
    TheHeader,
    TheFooter,
    ScrollToTop
  }
}
</script>
