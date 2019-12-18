<template>
  <div>
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
          Icon: 'mdi-apps',
          Title: 'Welcome',
          To: '/'
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
