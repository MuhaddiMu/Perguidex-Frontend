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
      <v-list v-for="(i, index) in 10" :key="i" subheader flat dense>
        <v-list-item :ripple="false">
          <v-list-item-action>
            <v-checkbox input-value="true" readonly color="red"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ i }} </v-list-item-title>
            <v-list-item-subtitle>Jan 28, 2014 </v-list-item-subtitle>
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
                      <v-list-item-title v-text="'Remove'"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item> </v-list-item-group
              ></v-list>
            </v-card>
          </v-menu>
        </v-list-item>
        <v-divider v-if="index != 10 - 1" />
      </v-list>
    </v-card>
    <v-card v-if="selectedActivity == 'Rated Days'" outlined>
      <v-card-title
        class="justify-center red lighten-1 white--text subtitle-2 font-weight-bold"
      >
        Rated Days
      </v-card-title>
      <v-list v-for="(i, index) in 10" :key="i" subheader flat dense>
        <v-list-item :ripple="false">
          <v-list-item-avatar>
            <v-icon class="grey lighten-1" dark>
              {{ getRatingEmoji(1) }}
            </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              dolore distinctio dignissimos ipsum, recusandae expedita saepe
              maxime autem aspernatur nostrum provident, repudiandae libero
              quisquam corporis optio ad illo voluptas repellat!
            </v-list-item-title>
            <v-list-item-subtitle
              ><v-rating
                color="yellow darken-2"
                background-color="grey"
                readonly
                half-increments
                length="5"
                value="2.5"
                small
              ></v-rating>
            </v-list-item-subtitle>
            <v-list-item-subtitle>Jan 28, 2014 </v-list-item-subtitle>
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
                      <v-list-item-title v-text="'Remove'"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item> </v-list-item-group
              ></v-list>
            </v-card>
          </v-menu>
        </v-list-item>
        <v-divider v-if="index != 10 - 1" />
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    Activities: [{ type: 'All Tasks' }, { type: 'Rated Days' }],
    selectedActivity: 'All Tasks',
    ratingEmoji: null
  }),
  methods: {
    getRatingEmoji(e) {
      if (e <= 1) {
        return 'mdi-emoticon-dead'
      } else if (e <= 2) {
        return 'mdi-emoticon-sad'
      } else if (e <= 3) {
        return 'mdi-emoticon-neutral'
      } else if (e <= 4) {
        return 'mdi-emoticon-happy'
      } else if (e <= 5) {
        return 'mdi-emoticon-excited'
      } else {
        return null
      }
    }
  }
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
