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
      <v-toolbar-title v-text="title" />
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
      Items: [
        {
          Icon: 'mdi-apps',
          Title: 'Welcome',
          To: '/'
        }
      ],
      title: 'Perguidex'
    }
  }
}
</script>
<style>
html {
  overflow-y: auto;
}
</style>
