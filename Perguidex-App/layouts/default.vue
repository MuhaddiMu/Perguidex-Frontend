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
        <v-toolbar-title class="pt-1 d-none d-sm-flex" v-text="title" />

        <v-spacer></v-spacer>
        <v-slide-x-reverse-transition>
          <v-text-field
            v-if="ToggleSearch"
            class="mr-6"
            dense
            :background-color="SearchBarBGColor"
            :color="SearchBarColor"
            flat
            filled
            placeholder="Quick Search"
            prepend-inner-icon="mdi-magnify"
            hide-details
            single-line
            clearable
            clear-icon="mdi-close"
            @mousedown.stop="ChangeColor(true)"
            @blur.stop="ChangeColor(false)"
          ></v-text-field>
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
      ToggleDrawer: false,
      SearchBarBGColor: '',
      SearchBarColor: 'white',
      ToggleSearch: false,
      Items: [
        {
          Icon: 'mdi-apps',
          Title: 'Welcome',
          To: '/'
        }
      ],
      title: 'Perguidex'
    }
  },
  methods: {
    ChangeColor(Result) {
      if (Result === true) {
        this.SearchBarBGColor = 'white'
        this.SearchBarColor = 'black'
      } else {
        this.SearchBarBGColor = ''
        this.SearchBarColor = ''
      }
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
</style>
