<template>
  <v-card outlined width="800">
    <v-card-title class="red lighten-1 white--text subtitle-2">
      <div class="W20 text-left">
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
                        <v-list-item-title v-text="'Edit'"></v-list-item-title>
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
      </v-list-item-group>
      <v-divider></v-divider>
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
                        <v-list-item-title v-text="'Edit'"></v-list-item-title>
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
      </v-list-item-group>
      <v-divider></v-divider>
      <v-list-item-group>
        <v-list-item :ripple="false">
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox
                :input-value="active"
                color="red lighten-1"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
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
                        <v-list-item-title v-text="'Edit'"></v-list-item-title>
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
      </v-list-item-group>
    </v-list>
    <!-- ADD NEW TASK BUTTON -->
    <v-container>
      <v-btn
        v-if="!displayNewTaskForm"
        @click="displayNewTaskForm = !displayNewTaskForm"
        class="mx-2"
        fab
        dark
        color="red"
      >
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
      <v-form ref="NewTaskForm" v-if="displayNewTaskForm" lazy-validation>
        <v-text-field
          v-model="newTask"
          outlined
          label="Task"
          dense
        ></v-text-field>
        <v-btn tile text depressed dark class="red">Add Task</v-btn>
        <span
          @click="displayNewTaskForm = false"
          class="ml-1 body-2 grey--text hover-text"
          >Cancel</span
        >
      </v-form>
    </v-container>
    <!--  -->
    <!-- RATE YOUR DAY -->
    <v-container>
      <div class="text-h5 grey--text text--darken-3 text-center">
        Rate your day {{ dayRating && '(' + dayRating + ')' }}
      </div>
      <v-rating
        v-model="dayRating"
        class="text-center"
        color="yellow darken-2"
        background-color="grey"
        half-increments
        hover
        large
      ></v-rating>
      <div v-if="dayRating > 0">
        <v-textarea
          v-model="dayRatingMessage"
          :counter="250"
          :label="'Why you felt your day was ' + dayRating + '?'"
          :prepend-inner-icon="dayRatingPrependIcon"
          rows="3"
          autofocus
          no-resize
          dense
          outlined
        ></v-textarea>
        <v-btn tile text depressed dark class="mt-n4 red text-left">Save</v-btn>
      </div>
    </v-container>
    <!--  -->
  </v-card>
</template>

<script>
import moment from 'moment'
export default {
  data: () => ({
    displayNewTaskForm: false,
    Valid: true,
    newTask: '',
    dayRating: null,
    dayRatingMessage: null
  }),
  computed: {
    dayRatingPrependIcon() {
      if (this.dayRating <= 1) {
        return 'mdi-emoticon-dead'
      } else if (this.dayRating <= 2) {
        return 'mdi-emoticon-sad'
      } else if (this.dayRating <= 3) {
        return 'mdi-emoticon-neutral'
      } else if (this.dayRating <= 4) {
        return 'mdi-emoticon-happy'
      } else if (this.dayRating <= 5) {
        return 'mdi-emoticon-excited'
      } else {
        return null
      }
    }
  },
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

.hover-text {
  cursor: pointer;
}

.hover-text:hover {
  text-decoration: underline;
}
</style>
