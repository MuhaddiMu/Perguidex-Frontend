<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-row align="center" justify="center" class="grey lighten-5">
        <v-card outlined class="mx-auto" width="900">
          <v-card-title class="red lighten-1 white--text subtitle-2">
            <div class="W20 text-left ">
              <v-icon class="Cursor" color="white">mdi-printer</v-icon>
            </div>
            <div class="center_date text-center font-weight-bold">
              Tasks<small class="font-weight-regular">
                – {{ moment().format('ddd D MMM') }}</small
              >
            </div>
            <div class="W20 text-right">
              <v-icon class="Cursor" color="white">mdi-refresh</v-icon>
            </div>
          </v-card-title>
          <v-list flat>
            <v-list-item-group>
              <v-list-item :ripple="false">
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox :input-value="active" color="red"></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>Sound</v-list-item-title>
                  </v-list-item-content>
                  <v-menu
                    transition="scale-transition"
                    close-on-content-click
                    offset-y
                    a
                    origin="top right"
                    right
                  >
                    <template v-slot:activator="{ on }">
                      <v-list-item-action>
                        <v-icon v-on="on" color="grey"
                          >mdi-dots-vertical</v-icon
                        >
                      </v-list-item-action>
                    </template>
                    <v-card width="75">
                      <v-list dense>
                        <v-list-item-group>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title
                                v-text="'Edit'"
                              ></v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title
                                v-text="'Delete'"
                              ></v-list-item-title>
                            </v-list-item-content>
                          </v-list-item> </v-list-item-group
                      ></v-list>
                    </v-card>
                  </v-menu>
                </template>
              </v-list-item>
              <v-divider></v-divider>
            </v-list-item-group>
          </v-list>
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
.center_date {
  width: 80%;
}
.W20 {
  width: 10%;
}
</style>
