<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title>
          {{ Notifications[notificationDialog].Title }}
        </v-card-title>

        <v-card-text>
          {{ Notifications[notificationDialog].Subtitle }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false" color="primary" text>
            Keep up the great work
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
            <v-list-item
              @click="
                dialog = true
                notificationDialog = index
              "
              :key="Notification.Title"
              link
            >
              <v-list-item-avatar>
                <v-icon class="red lighten-1 white--text">mdi-bell</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title
                  v-text="Notification.Title"
                ></v-list-item-title>

                <v-list-item-subtitle class="font-weight-regular">
                  {{ Notification.Subtitle }}
                </v-list-item-subtitle>
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
    notificationDialog: 0,
    Menu: false,
    dialog: false,
    Notifications: [
      {
        Action: '16 min',
        Title: 'Welcome to Perguidex ✨',
        Subtitle:
          "We are so happy you're here. Perguidex is founded for people like you to reflect upon their lives and manage their life like never before. We are in the beta version and we will be releasing new features every week. If you find any issues with the app, we encourage you to mail us at ask@perguidex.io and become the early adopters of the Perguidex. ",
        View: false
      }
    ]
  })
}
</script>
