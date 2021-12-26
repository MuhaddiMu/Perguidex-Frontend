<template>
  <!-- eslint-disable -->
  <v-card
    v-shortkey="{ mac: ['meta', 'p'], windows: ['ctrl', 'p'] }"
    @shortkey.propagate="PrintTasks()"
    :key="componentKey"
    outlined
  >
  <!-- eslint-enable -->

    <v-card-title class="red lighten-1 white--text subtitle-2">
      <div @click="PrintTasks()" :class="['W20', 'text-left', noPrintClass]">
        <v-icon class="Cursor" color="white">mdi-printer</v-icon>
      </div>
      <div :class="[center_date, 'text-center', 'font-weight-bold']">
        Next 7 Days
      </div>
      <div
        @click="fetchAllTasks()"
        :class="['W20', 'text-right', noPrintClass]"
      >
        <v-icon class="Cursor" color="white"
          ><template v-if="showSyncLoader">mdi-refresh mdi-spin</template
          ><template v-else> mdi-refresh </template></v-icon
        >
      </div>
    </v-card-title>

    <template v-for="(Day, index) in 7">
      <v-list :key="index" flat>
        <v-subheader class="font-weight-bold grey--text text--darken-2">
          {{
            moment()
              .add(Day, 'days')
              .format('dddd D MMM')
          }}</v-subheader
        >
        <v-divider />
        <template
          v-for="(Task, TaskIndex) in Next7DayTasks[
            moment()
              .add(Day, 'days')
              .format('YYYY-MM-DD')
          ]"
        >
          <v-list-item-group :key="TaskIndex">
            <v-list-item :ripple="false">
              <template>
                <v-list-item-action>
                  <v-checkbox
                    @click="
                      markComplete(
                        moment()
                          .add(Day, 'days')
                          .format('YYYY-MM-DD'),
                        TaskIndex,
                        Task.id
                      )
                    "
                    v-model="Task.status"
                    color="red"
                    readonly
                  ></v-checkbox>
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
                        <v-list-item
                          @click="
                            EditTaskToggle(
                              moment()
                                .add(Day, 'days')
                                .format('YYYY-MM-DD'),
                              TaskIndex
                            )
                          "
                        >
                          <v-list-item-content>
                            <v-list-item-title
                              v-text="'Edit'"
                            ></v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item
                          @click="
                            DeleteTask(
                              moment()
                                .add(Day, 'days')
                                .format('YYYY-MM-DD'),
                              TaskIndex,
                              Task.id
                            )
                          "
                        >
                          <v-list-item-content>
                            <v-list-item-title
                              v-text="'Delete'"
                            ></v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </v-card>
                </v-menu>
              </template>
            </v-list-item>
            <v-container v-show="Task.edit">
              <v-form
                :ref="'EditTaskForm' + Day + TaskIndex"
                @submit.prevent="updateTask(Day, TaskIndex, Task.id, Task.task)"
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
                  @click="
                    EditTaskToggle(
                      moment()
                        .add(Day, 'days')
                        .format('YYYY-MM-DD'),
                      TaskIndex
                    )
                  "
                  class="ml-1 body-2 grey--text hover-text"
                  >Cancel</span
                >
              </v-form>
            </v-container>
            <v-divider></v-divider>
          </v-list-item-group>
        </template>
        <!-- ADD NEW TASK BUTTON -->
        <v-container :class="[noPrintClass]">
          <v-btn
            v-if="!isFormActive(Day)"
            @click="activateForm(Day)"
            class="mx-2"
            fab
            dark
            color="red"
          >
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
          <v-form
            ref="NewTaskForm"
            @submit.prevent="AddTask(Day)"
            v-show="isFormActive(Day)"
            lazy-validation
          >
            <v-text-field
              v-model="newTask[index]"
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
            <span
              @click="CancelTask(Day)"
              class="ml-1 body-2 grey--text hover-text"
              >Cancel</span
            >
          </v-form>
        </v-container>
      </v-list>
    </template>
    <div v-if="noPrintClass == 'no-print'" class="py-3 text-center ">
      Provided by Perguidex
    </div>
  </v-card>
</template>

<script>
import moment from 'moment'
import CreateTask from '@/graphql/tasks/createTask'
import Next7Days from '@/graphql/tasks/Next7Days'
import EditTask from '@/graphql/tasks/EditTask'
import DeleteTask from '@/graphql/tasks/DeleteTask'
import markTaskComplete from '@/graphql/tasks/markTaskComplete'

export default {
  data: () => ({
    displayNewTaskForm1: false,
    displayNewTaskForm2: false,
    displayNewTaskForm3: false,
    displayNewTaskForm4: false,
    displayNewTaskForm5: false,
    displayNewTaskForm6: false,
    displayNewTaskForm7: false,
    Valid: true,
    newTask: [],
    showSyncLoader: false,
    Next7DayTasks: [],
    TaskRules: [(v) => !!v || 'Task is required'],
    componentKey: 0,
    noPrintClass: '',
    center_date: 'center_date'
  }),

  created() {
    this.fetchAllTasks()
  },
  mounted() {
    if (this.$route.path.toLowerCase() === '/app/next7days/print') {
      this.noPrintClass = 'no-print'
      this.center_date = 'center_date-no-print'
      this.printDoc()
    }
  },
  methods: {
    moment() {
      return moment()
    },

    async fetchAllTasks() {
      try {
        this.showSyncLoader = true
        const self = this
        const Next7DaysReq = await this.$apollo
          .query({ query: Next7Days })
          .then(({ data }) => data && data.Next7Days)

        const Next7DayTasks = {}

        Next7DaysReq.forEach((element) => {
          const onDate = element.onDate.substring(0, 10)

          if (!Next7DayTasks.hasOwnProperty(onDate)) {
            Next7DayTasks[onDate] = []
          }
          Next7DayTasks[onDate].push(element)
        })

        self.Next7DayTasks = Next7DayTasks

        self.showSyncLoader = false

        self.componentKey += 1
      } catch (error) {}
    },

    async AddTask(Day) {
      if (this.$refs.NewTaskForm[Day - 1].validate()) {
        const TaskName = this.newTask[Day - 1]
        const self = this
        const Form = 'displayNewTaskForm' + Day
        const Date = moment()
          .add(Day, 'days')
          .format('YYYY-MM-DD')

        if (!self.Next7DayTasks.hasOwnProperty(Date)) {
          this.Next7DayTasks[Date] = []
        }
        self.Next7DayTasks[Date].push({
          task: TaskName,
          onDate: moment()
        })
        try {
          const res = await this.$apollo
            .mutate({
              mutation: CreateTask,
              variables: {
                task: TaskName,
                onDate: moment()
                  .add(Day, 'days')
                  .format()
              }
            })
            .then(({ data }) => data && data.CreateTask)
          this.$refs.NewTaskForm[Day - 1].reset()

          // eslint-disable-next-line standard/computed-property-even-spacing
          this.Next7DayTasks[Date][
            Object.keys(this.Next7DayTasks[Date]).length - 1
          ] = res

          self[Form] = false
        } catch (error) {}
      }
    },

    CancelTask(Day) {
      const self = this
      const Form = 'displayNewTaskForm' + Day

      self[Form] = false
    },

    isFormActive(Day) {
      const self = this
      const Form = 'displayNewTaskForm' + Day

      return self[Form]
    },

    activateForm(Day) {
      const self = this
      const Form = 'displayNewTaskForm' + Day
      self[Form] = true
    },

    EditTaskToggle(Day, TaskIndex) {
      // eslint-disable-next-line standard/computed-property-even-spacing
      this.Next7DayTasks[Day][TaskIndex].edit = !this.Next7DayTasks[Day][
        TaskIndex
      ].edit
      this.componentKey += 1
    },

    async updateTask(Day, TaskIndex, TaskID, Task) {
      const TaskRef = 'EditTaskForm' + Day + TaskIndex
      const self = this
      if (this.$refs[TaskRef][0].validate()) {
        try {
          await this.$apollo
            .mutate({
              mutation: EditTask,
              variables: {
                id: TaskID,
                task: Task
              }
            })
            .then(({ data }) => data && data.EditTask)

          self.EditTaskToggle(
            moment()
              .add(Day, 'days')
              .format('YYYY-MM-DD'),
            TaskIndex
          )
        } catch (error) {}
      }
    },

    async DeleteTask(Day, TaskIndex, TaskID) {
      this.$delete(this.Next7DayTasks[Day], TaskIndex)
      try {
        await this.$apollo
          .mutate({
            mutation: DeleteTask,
            variables: {
              id: TaskID
            }
          })
          .then(({ data }) => data && data.DeleteTask)
      } catch (error) {}
    },

    async markComplete(Day, TaskIndex, TaskID) {
      this.$delete(this.Next7DayTasks[Day], TaskIndex)

      try {
        await this.$apollo
          .mutate({
            mutation: markTaskComplete,
            variables: {
              id: TaskID
            }
          })
          .then(({ data }) => data && data.markTaskComplete)
      } catch (error) {}
    },

    PrintTasks() {
      window.open(this.$route.path + '/print')
    },
    printDoc() {
      setTimeout(() => {
        window.print()
      }, 1000)
    }
  }
}
</script>

<style>
.center_date {
  width: 80%;
}

.center_date-no-print {
  width: 100%;
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

.no-print {
  display: none;
}
@page {
  size: auto; /* auto is the initial value */
  margin: 0; /* this affects the margin in the printer settings */
}
</style>
