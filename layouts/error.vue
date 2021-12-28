<template>
  <section>
    <v-app light>
      <v-main>
        <v-container pa-0 fluid>
          <section class="pa-10">
            <v-row>
              <v-col cols="12">
                <div class="text-center">
                  <h1
                    v-if="error.statusCode === 404"
                    class="text-h3 pb-5 text-center"
                  >
                    {{ pageNotFound }}
                  </h1>
                  <h1 v-else class="text-h3 pb-5 text-center">
                    {{ otherError }}
                  </h1>
                  <div class="four_zero_four_bg"></div>

                  <div class="contant_box_404">
                    <h1 class="text-h4">
                      Look like you're lost
                    </h1>

                    <p>The page you are looking for is not available</p>

                    <v-btn to="/" color="red" large dark depressed tile
                      >Home Page</v-btn
                    >
                  </div>
                </div>
              </v-col>
            </v-row>
          </section>
        </v-container>
      </v-main>
      <TheFooter />
    </v-app>
  </section>
</template>

<script>
import TheFooter from '@/components/TheFooter'

export default {
  layout: 'error',
  name: 'Error',
  components: {
    TheFooter
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
.four_zero_four_bg {
  background-image: url('~/assets/images/404.gif');
  height: 400px;
  background-position: center;
}

.contant_box_404 {
  margin-top: -50px;
}
</style>
