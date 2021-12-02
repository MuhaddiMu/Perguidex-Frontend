<template>
  <div>
    <v-navigation-drawer
      v-model="ToggleDrawer"
      :clipped="true"
      bottom
      fixed
      app
    >
      <v-list nav dense>
        <v-list-item-group :v-model="true">
          <v-list-item
            v-for="SubItem in Items"
            :key="SubItem.Title"
            :to="SubItem.Route"
            link
            nuxt
          >
            <v-list-item-icon>
              <v-icon v-text="SubItem.Icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="SubItem.Title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <v-divider></v-divider>
        <div class="text-center pa-2 grey--text caption">Perguidex Beta</div>
      </template>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="true"
      flat
      dense
      fixed
      app
      class="red lighten-1 white--text"
    >
      <v-app-bar-nav-icon
        @click.stop="ToggleDrawer = !ToggleDrawer"
        class="white--text"
      />
      <v-container class="px-12" d-flex>
        <v-toolbar-title v-text="'Perguidex'" class="pt-1 d-none d-sm-flex" />

        <v-spacer></v-spacer>
        <v-slide-x-reverse-transition>
          <Search v-if="ToggleSearch" class="d-none d-sm-flex" />
        </v-slide-x-reverse-transition>
        <v-btn
          @click.stop="ToggleSearch = !ToggleSearch"
          class="d-none d-sm-flex"
          color="white"
          fab
          text
          small
          icon
          ><v-icon>mdi-magnify</v-icon></v-btn
        >
        <Notifications />
        <SettingsMenu />
      </v-container>
    </v-app-bar>
  </div>
</template>
<script>
import Search from '@/components/AuthenticatedComponents/Header/Search'
import Notifications from '@/components/AuthenticatedComponents/Header/Notifications'
import SettingsMenu from '@/components/AuthenticatedComponents/Header/SettingsMenu'
export default {
  components: {
    Search,
    SettingsMenu,
    Notifications
  },
  data() {
    return {
      SearchBGColor: '',
      ToggleSearch: false,
      ToggleDrawer: false,
      Items: [
        { Title: 'Tasks', Icon: 'mdi-playlist-check', Route: 'tasks' },
        {
          Title: 'Next 7 Days',
          Icon: 'mdi-calendar-week',
          Route: 'next7days'
        },
        {
          Title: 'All Activities',
          Icon: 'mdi-calendar-check',
          Route: 'activities'
        }
      ],
      items: [
        {
          icon: 'mdi-inbox',
          text: 'Inbox'
        },
        {
          icon: 'mdi-star',
          text: 'Star'
        },
        {
          icon: 'mdi-send',
          text: 'Send'
        },
        {
          icon: 'mdi-email-open',
          text: 'Drafts'
        }
      ],
      model: 1
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
