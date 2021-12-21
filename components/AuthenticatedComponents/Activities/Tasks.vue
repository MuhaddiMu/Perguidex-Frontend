<template>
  <div :key="componentKey">
    <v-skeleton-loader
      v-if="!Tasks"
      v-bind="skeletonAttrs"
      type="card-heading, list-item-avatar, divider, list-item-avatar, divider, list-item-avatar, divider, list-item-avatar, divider, actions"
    ></v-skeleton-loader>
    <v-card v-else outlined width="800">
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
        <!-- <v-slide-y-transition class="py-0" group tag="v-list-item-group"> -->
        <template ref="loopRef" v-for="(Task, index) in Tasks">
          <v-list-item-group :key="index">
            <v-list-item :ripple="false">
              <template>
                <v-list-item-action>
                  <v-checkbox
                    @click="markComplete(index, Task.id)"
                    v-model="Task.status"
                    color="red"
                    readonly
                  ></v-checkbox>
                  <!-- Readonly, a quick hack to disable the auto selection of the checkbox -->
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ Task.task }}</v-list-item-title>
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
                        <v-list-item @click="EditTaskToggle(index)">
                          <v-list-item-content>
                            <v-list-item-title
                              v-text="'Edit'"
                            ></v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item @click="DeleteTask(index, Task.id)">
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
            <v-container v-show="Task.edit">
              <v-form
                ref="EditTaskForm"
                @submit.prevent="updateTask(index, Task.id, Task.task)"
                lazy-validation
              >
                <v-text-field
                  v-model="Task.task"
                  :rules="TaskRules"
                  outlined
                  label="Task"
                  dense
                  required
                ></v-text-field>
                <v-btn type="submit" tile text depressed dark class="red"
                  >Update</v-btn
                >
                <span
                  @click="EditTaskToggle(index, Task.id)"
                  class="ml-1 body-2 grey--text hover-text"
                  >Cancel</span
                >
              </v-form>
            </v-container>
            <v-divider></v-divider>
          </v-list-item-group>
        </template>
        <!-- </v-slide-y-transition> -->
        <!-- Hide divider on the last one -->
      </v-list>
      <!-- ADD NEW TASK BUTTON -->
      <v-container v-click-outside="cancelTask">
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
        <v-form
          ref="NewTaskForm"
          @submit.prevent="AddTask()"
          v-if="displayNewTaskForm"
          lazy-validation
        >
          <v-text-field
            v-model="newTask"
            :rules="TaskRules"
            outlined
            label="Task"
            autofocus
            dense
            required
          ></v-text-field>
          <v-btn type="submit" tile text depressed dark class="red"
            >Add Task</v-btn
          >
          <span @click="cancelTask()" class="ml-1 body-2 grey--text hover-text"
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
          <v-btn tile text depressed dark class="mt-n4 red text-left"
            >Save</v-btn
          >
        </div>
      </v-container>
      <!--  -->
    </v-card>
  </div>
</template>

<script>
import moment from 'moment'
import CreateTask from '@/graphql/tasks/createTask'
import Tasks from '@/graphql/tasks/Tasks'
import markTaskComplete from '@/graphql/tasks/markTaskComplete'
import DeleteTask from '@/graphql/tasks/DeleteTask'
import EditTask from '@/graphql/tasks/EditTask'
export default {
  apollo: {
    Tasks: {
      query: Tasks,
      prefetch: false
    }
  },
  data: () => ({
    displayNewTaskForm: false,
    Valid: true,
    TaskRules: [(v) => !!v || 'Task is required'],
    newTask: null,
    dayRating: null,
    dayRatingMessage: null,
    skeletonAttrs: {
      class: 'pa-3',
      boilerplate: false,
      elevation: 2
    },
    componentKey: 0
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
    },

    // Complete and remove the task
    async markComplete(taskIndex, taskID) {
      this.$delete(this.Tasks, taskIndex)

      try {
        await this.$apollo
          .mutate({
            mutation: markTaskComplete,
            variables: {
              id: taskID
            }
          })
          .then(({ data }) => data && data.markTaskComplete)
      } catch (error) {}
    },

    // Add Task Functionality
    async AddTask() {
      const TaskName = this.newTask
      if (this.$refs.NewTaskForm.validate()) {
        this.Tasks.push({ task: TaskName, onDate: moment() })
        try {
          await this.$apollo
            .mutate({
              mutation: CreateTask,
              variables: {
                task: TaskName
              }
            })
            .then(({ data }) => data && data.TaskName)
          this.$refs.NewTaskForm.reset()
        } catch (error) {}
      }
    },

    // Cancel button
    cancelTask() {
      this.displayNewTaskForm = false
      this.newTask = ''
    },

    // Delete Task
    async DeleteTask(taskIndex, taskID) {
      this.$delete(this.Tasks, taskIndex)
      try {
        await this.$apollo
          .mutate({
            mutation: DeleteTask,
            variables: {
              id: taskID
            }
          })
          .then(({ data }) => data && data.DeleteTask)
      } catch (error) {}
    },

    // Edit Task
    EditTaskToggle(taskIndex) {
      this.Tasks[taskIndex].edit = !this.Tasks[taskIndex].edit
      this.componentKey += 1
    },

    async updateTask(index, taskID, Task) {
      if (this.$refs.EditTaskForm[index].validate()) {
        try {
          await this.$apollo
            .mutate({
              mutation: EditTask,
              variables: {
                id: taskID,
                task: Task
              }
            })
            .then(({ data }) => data && data.EditTask)
          this.EditTaskToggle(index)
          this.$refs.EditTaskForm.reset()
        } catch (error) {}
      }
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
