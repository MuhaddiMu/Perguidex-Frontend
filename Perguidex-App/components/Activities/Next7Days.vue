<template>
  <v-card outlined>
    <v-card-title class="red lighten-1 white--text subtitle-2">
      <div class="W20 text-left ">
        <v-icon class="Cursor" color="white">mdi-printer</v-icon>
      </div>
      <div class="center_date text-center font-weight-bold">
        Next 7 Days
      </div>
      <div class="W20 text-right">
        <v-icon class="Cursor" color="white">mdi-refresh</v-icon>
      </div>
    </v-card-title>

    <v-list flat>
      <v-subheader class="font-weight-bold grey--text text--darken-2">
        {{
          moment()
            .add(1, 'days')
            .format('dddd D MMM')
        }}</v-subheader
      >
      <v-divider />
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
      <!-- ADD NEW TASK BUTTON -->
      <v-container>
        <span
          v-if="!displayNewTaskForm"
          @click="displayNewTaskForm = !displayNewTaskForm"
        >
          <v-btn dark icon text color="red">
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
          <span class="body-2 grey--text text--darken-2 hover-text"
            >Add Task</span
          >
        </span>
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
    </v-list>

    <v-list flat>
      <v-subheader class="font-weight-bold grey--text text--darken-2">
        {{
          moment()
            .add(2, 'days')
            .format('dddd D MMM')
        }}</v-subheader
      >
      <v-divider />
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
      <!-- ADD NEW TASK BUTTON -->
      <v-container>
        <span
          v-if="!displayNewTaskForm"
          @click="displayNewTaskForm = !displayNewTaskForm"
        >
          <v-btn dark icon text color="red">
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
          <span class="body-2 grey--text text--darken-2 hover-text"
            >Add Task</span
          >
        </span>
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
    </v-list>

    <v-list flat>
      <v-subheader class="font-weight-bold grey--text text--darken-2">
        {{
          moment()
            .add(3, 'days')
            .format('dddd D MMM')
        }}</v-subheader
      >
      <v-divider />
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
      <!-- ADD NEW TASK BUTTON -->
      <v-container>
        <span
          v-if="!displayNewTaskForm"
          @click="displayNewTaskForm = !displayNewTaskForm"
        >
          <v-btn dark icon text color="red">
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
          <span class="body-2 grey--text text--darken-2 hover-text"
            >Add Task</span
          >
        </span>
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
    </v-list>

    <v-list flat>
      <v-subheader class="font-weight-bold grey--text text--darken-2">
        {{
          moment()
            .add(4, 'days')
            .format('dddd D MMM')
        }}</v-subheader
      >
      <v-divider />
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
      <!-- ADD NEW TASK BUTTON -->
      <v-container>
        <span
          v-if="!displayNewTaskForm"
          @click="displayNewTaskForm = !displayNewTaskForm"
        >
          <v-btn dark icon text color="red">
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
          <span class="body-2 grey--text text--darken-2 hover-text"
            >Add Task</span
          >
        </span>
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
    </v-list>

    <v-list flat>
      <v-subheader class="font-weight-bold grey--text text--darken-2">
        {{
          moment()
            .add(5, 'days')
            .format('dddd D MMM')
        }}</v-subheader
      >
      <v-divider />
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
      <!-- ADD NEW TASK BUTTON -->
      <v-container>
        <span
          v-if="!displayNewTaskForm"
          @click="displayNewTaskForm = !displayNewTaskForm"
        >
          <v-btn dark icon text color="red">
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
          <span class="body-2 grey--text text--darken-2 hover-text"
            >Add Task</span
          >
        </span>
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
    </v-list>

    <v-list flat>
      <v-subheader class="font-weight-bold grey--text text--darken-2">
        {{
          moment()
            .add(6, 'days')
            .format('dddd D MMM')
        }}</v-subheader
      >
      <v-divider />
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
      <!-- ADD NEW TASK BUTTON -->
      <v-container>
        <span
          v-if="!displayNewTaskForm"
          @click="displayNewTaskForm = !displayNewTaskForm"
        >
          <v-btn dark icon text color="red">
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
          <span class="body-2 grey--text text--darken-2 hover-text"
            >Add Task</span
          >
        </span>
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
    </v-list>

    <v-list flat>
      <v-subheader class="font-weight-bold grey--text text--darken-2">
        {{
          moment()
            .add(7, 'days')
            .format('dddd D MMM')
        }}</v-subheader
      >
      <v-divider />
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
      <v-divider />
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
      <!-- ADD NEW TASK BUTTON -->
      <v-container>
        <span
          v-if="!displayNewTaskForm"
          @click="displayNewTaskForm = !displayNewTaskForm"
        >
          <v-btn dark icon text color="red">
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
          <span class="body-2 grey--text text--darken-2 hover-text"
            >Add Task</span
          >
        </span>
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
    </v-list>
  </v-card>
</template>

<script>
import moment from 'moment'
export default {
  data: () => ({
    displayNewTaskForm: false,
    Valid: true,
    newTask: ''
  }),
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
