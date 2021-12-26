<template>
  <div>
    <div class="grey--text text--darken-3 font-weight-regular text-h5">
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
      <v-container>
        <v-autocomplete
          v-model="SearchModel"
          :loading="SearchLoading"
          :items="SearchItems"
          :search-input.sync="Search"
          color="grey"
          cache-items
          hide-no-data
          hide-selected
          hide-details
          dense
          filled
          flat
          prepend-inner-icon="mdi-magnify"
          label="Quick Search"
        ></v-autocomplete>
      </v-container>
      <template v-if="GetAllTasks">
        <v-list
          v-for="(Task, index) in GetAllTasks"
          :key="index"
          flat
          dense
          subheader
        >
          <v-list-item :ripple="false">
            <v-list-item-action>
              <v-checkbox
                v-model="Task.status"
                readonly
                color="red"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ Task.task }} </v-list-item-title>
              <v-list-item-subtitle
                >{{ moment(Task.onDate).format('D MMM Y') }}
              </v-list-item-subtitle>
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
                    <v-list-item @click="DeleteTask(index, Task.id)">
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
          <v-divider v-if="index != Object.keys(GetAllTasks).length - 1" />
        </v-list>
      </template>
      <v-row class="my-3" align="center" justify="space-around">
        <v-btn
          v-if="hasMorePagesTasks"
          :loading="LoadMoreTasks"
          :disabled="LoadMoreTasks"
          @click="LoadMore()"
          tile
          text
          depressed
          dark
          class="red mt-1"
        >
          Load more
        </v-btn>
      </v-row>
    </v-card>
    <v-card v-if="selectedActivity == 'Rated Days'" outlined>
      <v-card-title
        class="justify-center red lighten-1 white--text subtitle-2 font-weight-bold"
      >
        Rated Days
      </v-card-title>
      <v-container>
        <v-autocomplete
          v-model="SearchModel"
          :loading="SearchLoading"
          :items="SearchItems"
          :search-input.sync="Search"
          color="grey"
          cache-items
          hide-no-data
          hide-selected
          hide-details
          dense
          filled
          flat
          prepend-inner-icon="mdi-magnify"
          label="Quick Search"
        ></v-autocomplete>
      </v-container>
      <v-list
        v-for="(Review, index) in GetAllReviews"
        :key="index"
        subheader
        flat
        dense
      >
        <v-list-item :ripple="false">
          <v-list-item-avatar>
            <v-icon class="grey lighten-1" dark>
              {{ getRatingEmoji(parseFloat(Review.rate)) }}
            </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ Review.reason }} </v-list-item-title>
            <v-list-item-subtitle
              ><v-rating
                :value="parseFloat(Review.rate)"
                color="yellow darken-2"
                background-color="grey"
                readonly
                half-increments
                length="5"
                small
              ></v-rating>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              {{ moment(Review.created_at).format('D MMM Y') }}
            </v-list-item-subtitle>
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
                  <v-list-item @click="DeleteReview(index, Review.id)">
                    <v-list-item-content>
                      <v-list-item-title v-text="'Remove'"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item> </v-list-item-group
              ></v-list>
            </v-card>
          </v-menu>
        </v-list-item>
        <v-divider v-if="index != Object.keys(GetAllReviews).length - 1" />
      </v-list>
      <v-row class="my-3" align="center" justify="space-around">
        <v-btn
          v-if="hasMoreRevs"
          :loading="loadMoreRevs"
          :disabled="loadMoreRevs"
          @click="LoadMoreRevs()"
          tile
          text
          depressed
          dark
          class="red mt-1"
        >
          Load more
        </v-btn>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import moment from 'moment'
import GetAllTasks from '@/graphql/tasks/GetAllTasks'
import DeleteTask from '@/graphql/tasks/DeleteTask'
import DeleteReview from '@/graphql/dayReviews/DeleteReview'
import GetAllReviews from '@/graphql/dayReviews/getAllReviews'

export default {
  data: () => ({
    Activities: [{ type: 'All Tasks' }, { type: 'Rated Days' }],
    selectedActivity: 'All Tasks',
    ratingEmoji: null,
    SearchModel: null,
    Search: null,
    SearchLoading: false,
    SearchItems: [],
    currentPageTasks: 1,
    LoadMoreTasks: false,
    hasMorePagesTasks: true,
    currentPageRevs: 1,
    hasMoreRevs: true,
    loadMoreRevs: false
  }),

  watch: {
    Search(val) {
      val && val !== this.SearchModel && this.querySelections(val)
    }
  },
  apollo: {
    GetAllTasks: {
      query: GetAllTasks,
      prefetch: false,
      variables: { page: 1 }
    },
    GetAllReviews: {
      query: GetAllReviews,
      prefetch: false,
      variables: { page: 1 }
    }
  },
  methods: {
    moment() {
      return moment()
    },
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
    },
    querySelections(v) {
      this.SearchLoading = true
      const States = ['Alaska', 'New York', 'Arizona', 'California', 'Colorado']
      setTimeout(() => {
        this.SearchItems = States.filter((e) => {
          return (e || '').toLowerCase().includes((v || '').toLowerCase()) > -1
        })
        this.SearchLoading = false
      }, 500)
    },

    // Load More tasks
    async LoadMore() {
      try {
        this.LoadMoreTasks = true
        this.currentPageTasks += 1
        const res = await this.$apollo
          .query({
            query: GetAllTasks,
            variables: { page: this.currentPageTasks }
          })

          .then(({ data }) => data && data.GetAllTasks)
        this.GetAllTasks.push(...res)
        this.LoadMoreTasks = false
        if (res.length < 20 || res.length === 0) {
          this.hasMorePagesTasks = false
        }
      } catch (error) {}
    },
    // Delete Task
    async DeleteTask(taskIndex, taskID) {
      this.$delete(this.GetAllTasks, taskIndex)
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

    // Load More Reviews
    async LoadMoreRevs() {
      try {
        this.loadMoreRevs = true
        this.currentPageRevs += 1
        const res = await this.$apollo
          .query({
            query: GetAllReviews,
            variables: { page: this.currentPageRevs }
          })

          .then(({ data }) => data && data.GetAllReviews)
        this.GetAllReviews.push(...res)
        this.loadMoreRevs = false
        if (res.length < 20 || res.length === 0) {
          this.hasMoreRevs = false
        }
      } catch (error) {}
    },

    // Delete Review
    async DeleteReview(revIndex, revID) {
      this.$delete(this.GetAllReviews, revIndex)
      console.log(revID)
      try {
        await this.$apollo
          .mutate({
            mutation: DeleteReview,
            variables: {
              id: revID
            }
          })
          .then(({ data }) => data && data.DeleteReview)
      } catch (error) {}
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
