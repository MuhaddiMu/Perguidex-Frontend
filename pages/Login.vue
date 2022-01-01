<template>
  <v-container class="text-center">
    <img width="60px" src="icon.png" class="mb-5" />
    <v-card
      :disabled="loading"
      :loading="loading"
      tile
      max-width="480px"
      outlined
      class="mx-auto"
    >
      <v-card-text
        ><v-alert v-if="LoginError" text type="error">{{
          LoginError
        }}</v-alert></v-card-text
      >
      <v-card-text>
        <div class="g-signin2" data-onsuccess="onSignIn()"></div>

        <!-- <v-btn disabled tile block depressed class="font-weight-regular"
          ><img
            width="16px"
            class="mr-2"
            src="~/assets/images/FacebookIco.png"
          />
          Log In with Facebook Account</v-btn
        >
        <v-btn disabled tile class="mt-2 font-weight-regular" block depressed
          ><img width="16px" class="mr-2" src="~/assets/images/GoogleIco.png" />
          Log In with Google Account</v-btn
        >
        <div class="Half-Seperator caption my-3">OR</div> -->
        <v-form ref="Form" v-model="formValid" @submit.prevent="clickLogIn()">
          <v-text-field
            v-model="userData.email"
            :min="0"
            :disabled="loading"
            :rules="emailValidation"
            outlined
            label="Email"
            prepend-inner-icon="mdi-email"
          ></v-text-field>
          <v-text-field
            v-model="userData.password"
            :append-icon="TogglePassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordValidation"
            :type="TogglePassword ? 'text' : 'password'"
            :disabled="loading"
            :min="8"
            @click:append="TogglePassword = !TogglePassword"
            counter
            outlined
            label="Password"
            prepend-inner-icon="mdi-lock"
          ></v-text-field>
          <div
            class="
              font-weight-regular
              text-left
              mt-n3
              grey--text
              text--darken-3
            "
          >
            <nuxt-link to="forgot">Forgot Password?</nuxt-link>
          </div>
          <v-btn type="submit" tile text class="red my-3" dark block
            >Log Me In</v-btn
          >
        </v-form>
        <div class="font-weight-regular text-left grey--text text--darken-3">
          Don’t have an account?
          <nuxt-link to="signup">Sign up here</nuxt-link>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import login from '@/graphql/auth/loginUser.gql'
import User from '@/graphql/user/getUserData.gql'

export default {
  layout: 'Auth',

  data() {
    return {
      loading: false,
      formValid: true,
      TogglePassword: false,
      gapi: null,
      /* prettier-ignore */
      /* eslint-disable no-useless-escape */
      emailValidation: [
        (v) =>
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || 'Email must be valid'
      ],
      passwordValidation: [(v) => (v && v.length >= 8) || 'Min 8 characters'],
      userData: [
        {
          email: null,
          password: null
        }
      ],
      LoginError: null
    }
  },
  mounted() {
    this.gapi = window.gapi
    console.log(this.gapi)
    this.GoogleAuthInit()
  },
  head() {
    return {
      title: 'Log In',
      script: [
        {
          hid: 'loginGoogleAuthScript',
          src: 'https://apis.google.com/js/platform.js?onload=init',
          async: true,
          defer: true
        }
      ],
      meta: [
        {
          hid: 'loginGoogleAuthMeta',
          content:
            '883487214577-fnvik82i1ea2p6lai3h2qg62p6eusd04.apps.googleusercontent.com',
          name: 'google-signin-client_id'
        }
      ]
    }
  },
  methods: {
    // Login functionality
    async clickLogIn() {
      if (this.$refs.Form.validate()) {
        this.loading = true

        try {
          const res = await this.$apollo
            .mutate({
              mutation: login,
              variables: {
                email: this.userData.email,
                password: this.userData.password
              }
            })
            .then(({ data }) => data && data.login)
          this.loading = false
          await this.$apolloHelpers.onLogin(res.token)
          this.$router.push('app/tasks')

          // Get User Data
          await this.$apollo
            .query({
              query: User,
              prefetch: false,
              fetchPolicy: 'cache-first'
            })
            .then(({ data }) => data && data.User)
        } catch (error) {
          this.loading = false
          error.message = error.message.replace('GraphQL error: ', '')

          this.LoginError = error
        }
      }
    },
    GoogleAuthInit() {
      this.gapi.load('auth2', function() {
        /* Ready. Make a call to gapi.auth2.init or some other API */
        console.log('OADED')
      })
    }
  }
}
</script>

<style>
.Half-Seperator {
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(0, 0, 0, 0.3);
}
.Half-Seperator::before,
.Half-Seperator::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.Half-Seperator::before {
  margin-right: 0.25em;
}
.Half-Seperator::after {
  margin-left: 0.25em;
}
</style>
