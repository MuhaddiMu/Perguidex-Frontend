<template>
  <section>
    <v-layout class="red lighten-1" column justify-center align-center>
      <v-container mb-12 grid-list-xl>
        <v-layout mb-12 row justify-space-around>
          <v-flex align-self-center xs12 md6>
            <div class="white--text font-weight-medium display-3">
              It's All About Managing Yourself
            </div>
            <div class="white--text py-3">
              Life can feel ovefwhelming, but it doesn't have to. Perguidex lets
              you keep track of everything in one place, so you can get it all
              done and enjoy more peace of mind along the way.
            </div>
            <v-btn class="mt-5 red--text" x-large rounded>
              Get Started — It's Free
            </v-btn>
            <div class="mb-5 white--text caption pl-7">
              Wondering how it works? Watch a video
            </div>
          </v-flex>
          <v-flex xs12 md6>
            <img draggable="false" alt="Goals" width="100%" src="Goals.svg" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
    <v-layout column justify-center align-center>
      <v-container fluid grid-list-xl>
        <v-card
          class="Shadow RoundCorner mx-auto"
          max-width="100%"
          style="margin-top: -64px;"
        >
          <v-card-text>
            <v-layout column wrap align-center>
              <v-flex my-6 xs12 sm4>
                <div class="grey--text text--darken-4 display-1 text-center">
                  Your Best Benefit
                </div>
              </v-flex>
              <v-flex xs12>
                <v-container grid-list-xl>
                  <v-layout row wrap align-center>
                    <v-flex xs12 md3>
                      <v-card flat class="transparent">
                        <v-card-text class="text-center">
                          <v-icon x-large class="red--text text--darken-1 mb-n4"
                            >mdi-run</v-icon
                          >
                        </v-card-text>
                        <v-card-title
                          primary-title
                          class="layout justify-center"
                        >
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
                        <v-card-text class="text-center">
                          Keep record of your daily activities which help you
                          better understand yourself
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-card flat class="transparent">
                        <v-card-text class="text-center">
                          <v-icon
                            x-large
                            class="blue--text text--darken-1 mb-n4"
                            >mdi-format-list-checkbox</v-icon
                          >
                        </v-card-text>
                        <v-card-title
                          primary-title
                          class="layout justify-center"
                        >
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
                        <v-card-text class="text-center">
                          Track your everyday progress towards your goals,
                          objectives and mission
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-card flat class="transparent">
                        <v-card-text class="text-center">
                          <v-icon
                            x-large
                            class="blue-grey--text text--darken-1 mb-n4"
                            >mdi-chart-timeline-variant</v-icon
                          >
                        </v-card-text>
                        <v-card-title
                          primary-title
                          class="layout justify-center"
                        >
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
                        <v-card-text class="text-center">
                          Creating a roadmap will help you get a practical grasp
                          on what it is going to take
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-card flat class="transparent">
                        <v-card-text class="text-center">
                          <v-icon
                            x-large
                            class="pink--text text--darken-1 mb-n4"
                            >mdi-cash</v-icon
                          >
                        </v-card-text>
                        <v-card-title
                          primary-title
                          class="layout justify-center"
                        >
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
                        <v-card-text class="text-center">
                          Monitoring accurate finance statements can help you
                          expand your business
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-card flat class="transparent">
                        <v-card-text class="text-center">
                          <v-icon
                            x-large
                            class="purple--text text--darken-1 mb-n4"
                            >mdi-cash</v-icon
                          >
                        </v-card-text>
                        <v-card-title
                          primary-title
                          class="layout justify-center"
                        >
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
                        <v-card-text class="text-center">
                          Creating a rundown of your connections helps you
                          improve relationship and circle
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-card flat class="transparent">
                        <v-card-text class="text-center">
                          <v-icon
                            x-large
                            class="yellow--text text--darken-1 mb-n4"
                            >mdi-lightbulb-on</v-icon
                          >
                        </v-card-text>
                        <v-card-title
                          primary-title
                          class="layout justify-center"
                        >
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
                        <v-card-text class="text-center">
                          Write down your ideas daily, structure them in an
                          intuitive way, share and improve them with time
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-card flat class="transparent">
                        <v-card-text class="text-center">
                          <v-icon
                            x-large
                            class="green--text text--darken-1 mb-n4"
                            >mdi-emoticon</v-icon
                          >
                        </v-card-text>
                        <v-card-title
                          primary-title
                          class="layout justify-center"
                        >
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
                        <v-card-text class="text-center">
                          Writing daily gratitude boost happiness. Magic will
                          unfurl once you begin doing it
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-card flat class="transparent">
                        <v-card-text class="text-center">
                          <v-icon
                            x-large
                            class="amber--text text--darken-1 mb-n4"
                            >mdi-weight-lifter</v-icon
                          >
                        </v-card-text>
                        <v-card-title
                          primary-title
                          class="layout justify-center"
                        >
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
                        <v-card-text class="text-center">
                          Keeping your own personal health record can help
                          improve the quality of care you recieve
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-card flat class="transparent">
                        <v-card-text class="text-center">
                          <v-icon
                            x-large
                            class="brown--text text--darken-1 mb-n4"
                            >mdi-wardrobe</v-icon
                          >
                        </v-card-text>
                        <v-card-title
                          primary-title
                          class="layout justify-center"
                        >
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
                        <v-card-text class="text-center">
                          Digital wardrobe helps you stay organaized by managing
                          all of wearings at one place
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-card flat class="transparent">
                        <v-card-text class="text-center">
                          <v-icon
                            x-large
                            class="light-blue--text text--darken-1 mb-n4"
                            >mdi-clipboard-text</v-icon
                          >
                        </v-card-text>
                        <v-card-title
                          primary-title
                          class="layout justify-center"
                        >
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
                        <v-card-text class="text-center">
                          Perguidex allows you to take notes. Access them from
                          anywhere and share them with your co workers
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-card flat class="transparent">
                        <v-card-text class="text-center">
                          <v-icon
                            x-large
                            class="indigo--text text--darken-1 mb-n4"
                            >mdi-trophy</v-icon
                          >
                        </v-card-text>
                        <v-card-title
                          primary-title
                          class="layout justify-center"
                        >
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
                        <v-card-text class="text-center">
                          Tracking records of your accomplishments helps you set
                          your personal and professional goals
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-card flat class="transparent">
                        <v-card-text class="text-center">
                          <v-icon
                            x-large
                            class="light-green--text text--darken-1 mb-n4"
                            >mdi-calendar</v-icon
                          >
                        </v-card-text>
                        <v-card-title
                          primary-title
                          class="layout justify-center"
                        >
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
                        <v-card-text class="text-center">
                          Simple online calendar helps you stay organized with
                          powerful features and customization tools
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-container>
    </v-layout>
  </section>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: '%s | Track Productivity, Be The Best ',
      title: 'Perguidex'
    }
  }
}
</script>
<style>
.RoundCorner {
  border-radius: 10px !important;
}
.Shadow {
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}
</style>
