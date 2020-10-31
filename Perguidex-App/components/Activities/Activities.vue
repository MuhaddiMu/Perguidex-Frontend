<template>
  <div>
    <div class="grey--text text--darken-3 font-weight-medium text-h5">
      Activity: {{ selectedActivity }}
      <v-menu
        transition="scale-transition"
        close-on-content-click
        origin="top"
        offset-y
        right
      >
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" color="grey">mdi-chevron-down</v-icon>
        </template>
        <v-card>
          <v-list dense outlined>
            <v-list-item-group>
              <v-list-item v-for="Type in Activities" :key="Type.type">
                <v-list-item-content @click="selectedActivity = Type.type">
                  <v-list-item-title v-text="Type.type"></v-list-item-title>
                </v-list-item-content>
              </v-list-item> </v-list-item-group
          ></v-list>
        </v-card>
      </v-menu>
    </div>
    <v-card v-if="selectedActivity == 'All Tasks'" outlined>
      <v-card-title
        class="justify-center red lighten-1 white--text subtitle-2 font-weight-bold"
      >
        All Tasks
      </v-card-title>
      <v-list flat>
        <v-list-item-group v-for="(i, index) in 10" :key="i">
          <v-list-item :ripple="false">
            <v-list-item-action>
              <v-checkbox input-value="true" readonly color="red"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ i }} </v-list-item-title>
            </v-list-item-content>

            <v-menu
              transition="scale-transition"
              close-on-content-click
              offset-y
              origin="top right"
              right
            >
              <template v-slot:activator="{ on }">
                <v-list-item-action>
                  <v-icon v-on="on" color="grey">mdi-dots-vertical</v-icon>
                </v-list-item-action>
              </template>
              <v-card>
                <v-list dense outlined>
                  <v-list-item-group>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="'Remove'"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item> </v-list-item-group
                ></v-list>
              </v-card>
            </v-menu>
          </v-list-item>
          <v-divider v-if="index != 10 - 1" />
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    Activities: [
      { type: 'All Tasks' },
      { type: 'Rated Days' },
      { type: 'Daywise' }
    ],
    selectedActivity: 'All Tasks'
  })
}
</script>

<style>
.hover-text {
  cursor: pointer;
}

.hover-text:hover {
  text-decoration: underline;
}
</style>
