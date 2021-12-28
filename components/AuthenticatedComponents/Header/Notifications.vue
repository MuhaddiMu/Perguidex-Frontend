<template>
  <div class="text-center">
    <v-menu
      v-model="Menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      origin="top center"
      left
    >
      <template v-slot:activator="{ on }">
        <div>
          <v-btn v-on="on" color="white" fab text small icon
            ><v-icon>mdi-bell</v-icon></v-btn
          >
        </div>
      </template>

      <v-card>
        <v-list two-line max-width="450" dense nav subheader>
          <v-subheader class="text-uppercase"
            ><span class="Link">Notifications</span><v-spacer></v-spacer
            ><span class="Link">Mark all as read</span></v-subheader
          >
          <template v-for="(Notification, index) in Notifications">
            <v-list-item :key="Notification.Title" link>
              <v-list-item-avatar>
                <v-icon class="red lighten-1 white--text">mdi-bell</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title
                  v-text="Notification.Title"
                ></v-list-item-title>

                <v-list-item-subtitle
                  v-text="Notification.Subtitle"
                  class="font-weight-regular"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text
                  v-text="Notification.Action"
                ></v-list-item-action-text>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon
                      v-if="Notification.View"
                      v-on="on"
                      @click="Notification.View = !Notification.View"
                      small
                      color="grey lighten-1"
                      >mdi-check-all</v-icon
                    >
                    <v-icon
                      v-else
                      v-on="on"
                      @click="Notification.View = !Notification.View"
                      small
                      color="grey lighten-1"
                      >mdi-check</v-icon
                    >
                  </template>
                  <span v-if="Notification.View">Mark as Unread</span>
                  <span v-else>Mark as Read</span>
                </v-tooltip>
              </v-list-item-action>
            </v-list-item>

            <v-divider
              v-if="index + 1 < Notifications.length"
              :key="index"
              class="pt-1"
            ></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
export default {
  data: () => ({
    Menu: false,
    Notifications: [
      {
        Action: '15 min',
        Title: 'Welcome to Perguidex',
        Subtitle: "I'll be in your neighborhood doing errands this weekend.",
        View: false
      }
    ]
  })
}
</script>
