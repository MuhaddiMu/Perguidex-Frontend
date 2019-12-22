<template>
  <v-row>
    <v-col cols="6">
      <v-row align="center" justify="center" class="grey lighten-5">
        <v-card class="mx-auto" width="900">
          <v-card-title class="red lighten-1 white--text subtitle-2">
            <div class="W33 text-left ">
              <v-icon color="white">mdi-printer</v-icon>
            </div>
            <div class="W33 text-center font-weight-bold">
              Tasks<small class="font-weight-regular">
                – {{ moment().format('ddd D MMM') }}</small
              >
            </div>
            <div class="W33 text-right">
              <v-icon color="white">mdi-sync</v-icon>
            </div>
          </v-card-title>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import moment from 'moment'
export default {
  methods: {
    moment() {
      return moment()
    }
  }
}
</script>

<style>
.W33 {
  width: 33.33333%;
}
</style>
