<template>
  <v-row no-gutters column justify-center align-center>
    <v-container fluid grid-list-xl>
      <v-card
        class="Shadow RoundCorner mx-auto"
        max-width="100%"
        style="margin-top: -64px;"
      >
        <v-card-text class="svg-background">
          <v-row column wrap align-center>
            <v-col class="text-center" my-6 cols="12" sm="12" xl="12">
              <div class="grey--text text--darken-4 display-2">
                Your Best Benefit
              </div>
            </v-col>
            <v-container>
              <v-row align="start" justify="center">
                <v-col cols="12" md="3" sm="12" data-aos="fade-up">
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="red--text text--darken-1 mb-n4"
                        >mdi-run</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">
                        Activities
                        <v-chip label x-small color="primary">
                          New
                        </v-chip>
                      </div>
                    </v-card-title>
                    <v-divider
                      width="20%"
                      class="red darken-1 mx-auto"
                    ></v-divider>
                    <v-card-text class="text-center grey--text text--darken-3">
                      Keep record of your daily activities which help you better
                      understand yourself
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="3" sm="12" data-aos="fade-up">
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--darken-1 mb-n4"
                        >mdi-format-list-checkbox</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">
                        Daily Progress
                        <v-chip dark label x-small color="pink lighten-1">
                          Soon
                        </v-chip>
                      </div>
                    </v-card-title>
                    <v-divider
                      width="20%"
                      class="blue darken-1 mx-auto"
                    ></v-divider>
                    <v-card-text class="text-center grey--text text--darken-3">
                      Track your everyday progress towards your goals,
                      objectives and mission
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="3" sm="12" data-aos="fade-up">
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon
                        x-large
                        class="blue-grey--text text--darken-1 mb-n4"
                        >mdi-chart-timeline-variant</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">
                        Life Roadmap
                        <v-chip dark label x-small color="pink lighten-1">
                          Soon
                        </v-chip>
                      </div>
                    </v-card-title>
                    <v-divider
                      width="20%"
                      class="blue-grey darken-1 mx-auto"
                    ></v-divider>
                    <v-card-text class="text-center grey--text text--darken-3">
                      Creating a roadmap will help you get a practical grasp on
                      what it is going to take
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="3" sm="12" data-aos="fade-up">
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="pink--text text--darken-1 mb-n4"
                        >mdi-cash</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">
                        Track Cashflow
                        <v-chip dark label x-small color="pink lighten-1">
                          Soon
                        </v-chip>
                      </div>
                    </v-card-title>
                    <v-divider
                      width="20%"
                      class="pink darken-1 mx-auto"
                    ></v-divider>
                    <v-card-text class="text-center grey--text text--darken-3">
                      Monitoring accurate finance statements can help you expand
                      your business
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="3" sm="12" data-aos="fade-up">
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="purple--text text--darken-1 mb-n4"
                        >mdi-cash</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">
                        Circles
                        <v-chip dark label x-small color="pink lighten-1">
                          Soon
                        </v-chip>
                      </div>
                    </v-card-title>
                    <v-divider
                      width="20%"
                      class="purple darken-1 mx-auto"
                    ></v-divider>
                    <v-card-text class="text-center grey--text text--darken-3">
                      Creating a rundown of your connections helps you improve
                      relationship and circle
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="3" sm="12" data-aos="fade-up">
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="yellow--text text--darken-1 mb-n4"
                        >mdi-lightbulb-on</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">
                        Ideation
                        <v-chip dark label x-small color="pink lighten-1">
                          Soon
                        </v-chip>
                      </div>
                    </v-card-title>
                    <v-divider
                      width="20%"
                      class="yellow darken-1 mx-auto"
                    ></v-divider>
                    <v-card-text class="text-center grey--text text--darken-3">
                      Write down your ideas daily, structure them in an
                      intuitive way, share and improve them with time
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="3" sm="12" data-aos="fade-up">
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="green--text text--darken-1 mb-n4"
                        >mdi-emoticon</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">
                        Daily Gratitude
                        <v-chip dark label x-small color="pink lighten-1">
                          Soon
                        </v-chip>
                      </div>
                    </v-card-title>
                    <v-divider
                      width="20%"
                      class="green darken-1 mx-auto"
                    ></v-divider>
                    <v-card-text class="text-center grey--text text--darken-3">
                      Writing daily gratitude boost happiness. Magic will unfurl
                      once you begin doing it
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="3" sm="12" data-aos="fade-up">
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="amber--text text--darken-1 mb-n4"
                        >mdi-weight-lifter</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">
                        Fitness
                        <v-chip dark label x-small color="pink lighten-1">
                          Soon
                        </v-chip>
                      </div>
                    </v-card-title>
                    <v-divider
                      width="20%"
                      class="amber darken-1 mx-auto"
                    ></v-divider>
                    <v-card-text class="text-center grey--text text--darken-3">
                      Keeping your own personal health record can help improve
                      the quality of care you recieve
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="3" sm="12" data-aos="fade-up">
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="brown--text text--darken-1 mb-n4"
                        >mdi-wardrobe</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">
                        Wardrobe
                        <v-chip dark label x-small color="pink lighten-1">
                          Soon
                        </v-chip>
                      </div>
                    </v-card-title>
                    <v-divider
                      width="20%"
                      class="brown darken-1 mx-auto"
                    ></v-divider>
                    <v-card-text class="text-center grey--text text--darken-3">
                      Digital wardrobe helps you stay organaized by managing all
                      of wearings at one place
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="3" sm="12" data-aos="fade-up">
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon
                        x-large
                        class="light-blue--text text--darken-1 mb-n4"
                        >mdi-clipboard-text</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">
                        Notes
                        <v-chip dark label x-small color="pink lighten-1">
                          Soon
                        </v-chip>
                      </div>
                    </v-card-title>
                    <v-divider
                      width="20%"
                      class="light-blue darken-1 mx-auto"
                    ></v-divider>
                    <v-card-text class="text-center grey--text text--darken-3">
                      Perguidex allows you to take notes. Access them from
                      anywhere and share them with your co workers
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="3" sm="12" data-aos="fade-up">
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="indigo--text text--darken-1 mb-n4"
                        >mdi-trophy</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">
                        Achievements
                        <v-chip dark label x-small color="pink lighten-1">
                          Soon
                        </v-chip>
                      </div>
                    </v-card-title>
                    <v-divider
                      width="20%"
                      class="indigo darken-1 mx-auto"
                    ></v-divider>
                    <v-card-text class="text-center grey--text text--darken-3">
                      Tracking records of your accomplishments helps you set
                      your personal and professional goals
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="3" sm="12" data-aos="fade-up">
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon
                        x-large
                        class="light-green--text text--darken-1 mb-n4"
                        >mdi-calendar</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">
                        Calendar
                        <v-chip dark label x-small color="pink lighten-1">
                          Soon
                        </v-chip>
                      </div>
                    </v-card-title>
                    <v-divider
                      width="20%"
                      class="light-green darken-1 mx-auto"
                    ></v-divider>
                    <v-card-text class="text-center grey--text text--darken-3">
                      Simple online calendar helps you stay organized with
                      powerful features and customization tools
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-row>
        </v-card-text>
        <v-card-text>
          <v-row align="center" justify="center" align-center>
            <v-col cols="12" sm="10" my-6 class="text-center">
              <div class="grey--text text--darken-4 display-2 text-center">
                Ready to be more productive?
              </div>
              <v-btn class="red mt-5 white--text font-weight-bold" text x-large>
                Get Started — It’s Free
              </v-btn>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="10" mb-6>
              <hr class="Gradient" />
            </v-col>
          </v-row>
          <v-row class="d-flex text-center" align="center" justify="center">
            <v-col cols="12" md="2" sm="6" xs="12" class="text-center">
              <img height="45px" src="Google.png" />
              <v-rating
                :value="5"
                color="#e3e6ed"
                background-color="gray lighten-4"
                dense
                readonly
              ></v-rating>
            </v-col>
            <v-col cols="12" md="2" sm="6" xs="12" class="text-center">
              <img height="45px" src="Facebook.png" />
              <v-rating
                :value="5"
                color="#e3e6ed"
                background-color="gray lighten-4"
                dense
                readonly
              ></v-rating>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </v-row>
</template>
<style>
.svg-background {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(180,640,431)'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%234FE'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
.Gradient {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(158, 158, 158, 0),
    rgba(158, 158, 158, 0.75),
    rgba(158, 158, 158, 0)
  );
}
</style>
