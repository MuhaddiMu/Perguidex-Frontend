<template>
  <div class="text-center">
    <v-menu
      v-model="Menu"
      transition="scale-transition"
      offset-y
      :close-on-content-click="false"
      origin="top center"
      left
    >
      <template v-slot:activator="{ on }">
        <div>
          <v-btn color="white" fab text small icon v-on="on"
            ><v-icon>mdi-bell</v-icon></v-btn
          >
        </div>
      </template>

      <v-card>
        <v-list two-line width="450" dense nav subheader>
          <v-subheader class="text-uppercase"
            >Notifications <v-spacer></v-spacer>Mark all as read</v-subheader
          >
          <v-list-item-group>
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
                    class="font-weight-regular"
                    v-text="Notification.Subtitle"
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
                        small
                        color="grey lighten-1"
                        v-on="on"
                        @click="Notification.View = !Notification.View"
                        >mdi-check-all</v-icon
                      >
                      <v-icon
                        v-else
                        small
                        color="grey lighten-1"
                        v-on="on"
                        @click="Notification.View = !Notification.View"
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
          </v-list-item-group>
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
        Title: 'Call notification',
        Subtitle: "I'll be in your neighborhood doing errands this weekend.",
        View: false
      },
      {
        Action: '2 hr',
        Title: 'Another productive notification',
        Subtitle: "Wish I could come, but I'm out of town this weekend.",
        View: true
      }
    ]
  })
}
</script>
