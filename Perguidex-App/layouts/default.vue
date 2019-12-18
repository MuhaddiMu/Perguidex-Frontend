<template>
  <v-app light>
    <v-navigation-drawer
      v-model="ToggleDrawer"
      bottom
      :clipped="true"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(Item, i) in Items"
          :key="i"
          :to="Item.To"
          router
          exact
        >
          <v-list-item-action>
            <v-icon> {{ Item.Icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="Item.Title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      flat
      dense
      :clipped-left="true"
      fixed
      app
      class="red lighten-1 white--text"
    >
      <v-app-bar-nav-icon
        class="white--text"
        @click.stop="ToggleDrawer = !ToggleDrawer"
      />
      <v-container class="px-12" d-flex>
        <v-toolbar-title class="pt-1 d-none d-sm-flex" v-text="'Perguidex'" />

        <v-spacer></v-spacer>
        <v-slide-x-reverse-transition>
          <v-autocomplete
            v-if="ToggleSearch"
            v-model="SearchModel"
            dark
            class="mr-6 w-40"
            :loading="SearchLoading"
            :items="SearchItems"
            :search-input.sync="Search"
            cache-items
            autofocus
            prepend-inner-icon="mdi-magnify"
            dense
            flat
            hide-details
            single-line
            hide-selected
            hide-no-data
            label="Quick Search"
            solo-inverted
            color="black"
          ></v-autocomplete>
        </v-slide-x-reverse-transition>
        <v-btn
          color="white"
          fab
          text
          small
          icon
          @click.stop="ToggleSearch = !ToggleSearch"
          ><v-icon>mdi-magnify</v-icon></v-btn
        >
        <v-btn color="white" fab text small icon
          ><v-icon>mdi-bell</v-icon></v-btn
        >
        <v-btn color="white" fab text small icon
          ><v-icon>mdi-settings</v-icon></v-btn
        >
      </v-container>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      SearchModel: null,
      Search: null,
      SearchLoading: false,
      SearchItems: [],
      SearchBGColor: '',
      ToggleSearch: false,
      ToggleDrawer: false,
      Items: [
        {
          Icon: 'mdi-apps',
          Title: 'Welcome',
          To: '/'
        }
      ]
    }
  },
  watch: {
    Search(val) {
      val && val !== this.SearchModel && this.querySelections(val)
    }
  },
  methods: {
    ChangeColors() {
      this.SearchBGColor = 'white'
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
    }
  }
}
</script>
<style>
html {
  overflow-y: auto;
}
.v-toolbar__content {
  border-bottom: 1px solid #e53935;
}
.w-40 {
  width: 40px;
}
</style>
