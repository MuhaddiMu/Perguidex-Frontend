<template>
  <v-container class="text-center">
    <img width="60px" src="icon.png" class="mb-5" />
    <v-card
      :disabled="loading"
      :loading="loading"
      tile
      width="480px"
      outlined
      class="mx-auto"
    >
      <v-card-text>
        <v-btn tile block depressed class="font-weight-regular"
          ><img
            width="16px"
            class="mr-2"
            src="~/assets/images/FacebookIco.png"
          />
          Sign up with Facebook Account</v-btn
        >
        <v-btn tile class="mt-2 font-weight-regular" block depressed
          ><img width="16px" class="mr-2" src="~/assets/images/GoogleIco.png" />
          Sign up with Google Account</v-btn
        >
        <div class="Half-Seperator caption my-3">OR</div>
        <v-form ref="Form" v-model="formValid">
          <v-text-field
            v-model="userData.fullname"
            :min="0"
            :disabled="loading"
            :rules="nameValidation"
            outlined
            label="Full Name"
            prepend-inner-icon="mdi-account"
          ></v-text-field>
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
            By creating an account, you agree to the Perguidex
            <a href="#" target="_blank">Terms of Service</a> and
            <a href="#" target="_blank">Privacy Policy</a>.
          </div>
          <v-btn @click="clickSignUp()" tile text class="red mt-3" dark block
            >Create My Account</v-btn
          >
        </v-form>
        <div
          class="font-weight-regular mt-2 text-left grey--text text--darken-3"
        >
          Already have an account? <nuxt-link to="Login">Log in here</nuxt-link>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import register from '../graphql/auth/registerUser.gql'
export default {
  layout: 'Auth',
  data() {
    return {
      loading: false,
      formValid: true,
      TogglePassword: false,
      /* prettier-ignore */
      /* eslint-disable no-useless-escape */
      emailValidation: [
        (v) =>
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || 'Email must be valid'
      ],
      passwordValidation: [(v) => (v && v.length >= 8) || 'Min 8 characters'],
      nameValidation: [(v) => !!v || 'Name is required'],
      userData: [
        {
          fullname: null,
          email: null,
          password: null
        }
      ]
    }
  },
  head() {
    return {
      title: 'Sign Up'
    }
  },
  methods: {
    // Signup functionality
    async clickSignUp() {
      if (this.$refs.Form.validate()) {
        this.loading = true

        try {
          const res = await this.$apollo
            .mutate({
              mutation: register,
              variables: {
                name: this.userData.fullname,
                email: this.userData.email,
                password: this.userData.password
              }
            })
            .then(({ data }) => data && data.register)
          this.loading = false
          console.log(res)
          await this.$apolloHelpers.onLogin(res.tokens.access_token)
        } catch (error) {
          console.error(error)
          this.loading = false
        }
      }
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
