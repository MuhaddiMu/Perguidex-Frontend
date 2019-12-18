<template>
  <div>
    <v-navigation-drawer
      v-model="ToggleDrawer"
      bottom
      :clipped="true"
      fixed
      app
    >
      <v-list nav dense>
        <v-list-group
          v-for="Item in Items"
          :key="Item.Title"
          v-model="Item.Active"
          :prepend-icon="Item.Action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="Item.Title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="SubItem in Item.Items" :key="SubItem.Title" link>
            <v-list-item-content>
              <v-list-item-title>
                <v-icon small v-text="SubItem.Icon"></v-icon>
                {{ SubItem.Title }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
      <template v-slot:append>
        <v-divider></v-divider>
        <div class="text-center pa-2 grey--text text--darken-1 caption">
          Perguidex Beta
        </div>
      </template>
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
          <Search v-if="ToggleSearch" />
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
  </div>
</template>
<script>
import Search from '@/components/Search'
export default {
  components: {
    Search
  },
  data() {
    return {
      SearchBGColor: '',
      ToggleSearch: false,
      ToggleDrawer: false,
      Items: [
        {
          Action: 'mdi-run-fast',
          Title: 'Activities',
          Active: true,
          Items: [
            { Title: 'Tasks', Icon: 'mdi-playlist-check' },
            { Title: 'Next 7 Days', Icon: 'mdi-calendar-week' },
            { Title: 'All Activities', Icon: 'mdi-calendar-check' }
          ]
        },
        {
          Action: 'mdi-bell',
          Title: 'Attractions',
          Items: [{ Title: 'List Item', Icon: 'mdi-bell' }]
        },
        {
          Action: 'mdi-bell',
          Title: 'Education',
          Items: [{ Title: 'List Item', Icon: 'mdi-bell' }]
        },
        {
          Action: 'mdi-bell',
          Title: 'Family',
          Items: [{ Title: 'List Item', Icon: 'mdi-bell' }]
        },
        {
          Action: 'mdi-bell',
          Title: 'Health',
          Items: [{ Title: 'List Item', Icon: 'mdi-bell' }]
        },
        {
          Action: 'mdi-bell',
          Title: 'Office',
          Items: [{ Title: 'List Item', Icon: 'mdi-bell' }]
        },
        {
          Action: 'mdi-bell',
          Title: 'Promotions',
          Items: [{ Title: 'List Item', Icon: 'mdi-bell' }]
        }
      ]
    }
  },
  methods: {
    ChangeColors() {
      this.SearchBGColor = 'white'
    }
  }
}
</script>
<style scoped>
.v-toolbar__content {
  border-bottom: 1px solid #e53935;
}
</style>
