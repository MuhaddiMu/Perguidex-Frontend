<template>
  <v-container class="text-center">
    <img width="60px" src="icon.png" class="mb-5" />
    <v-card tile width="480px" outlined class="mx-auto">
      <v-card-text>
        <v-btn tile block depressed
          ><img
            width="16px"
            class="mr-2"
            src="~/assets/images/FacebookIco.png"
          />
          Sign up with Facebook Account</v-btn
        >
        <v-btn tile class="mt-2" block depressed
          ><img width="16px" class="mr-2" src="~/assets/images/GoogleIco.png" />
          Sign up with Google Account</v-btn
        >
        <div class="Half-Seperator caption my-3">OR</div>
        <v-form ref="Form">
          <v-text-field
            :min="0"
            outlined
            label="Full Name"
            prepend-inner-icon="mdi-account"
          ></v-text-field>
          <v-text-field
            :min="0"
            outlined
            label="Email"
            prepend-inner-icon="mdi-email"
          ></v-text-field>
          <v-text-field
            :append-icon="TogglePassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="TogglePassword ? 'text' : 'password'"
            :min="0"
            @click:append="TogglePassword = !TogglePassword"
            outlined
            label="Password"
            prepend-inner-icon="mdi-lock"
          ></v-text-field>
          <div
            class="font-weight-medium text-left mt-n3 grey--text text--darken-3"
          >
            By creating an account, you agree to the Perguidex
            <a href="#" target="_blank">Terms of Service</a> and
            <a href="#" target="_blank">Privacy Policy</a>.
          </div>
          <v-btn tile text class="red mt-3" dark block>Create My Account</v-btn>
        </v-form>
        <div
          class="font-weight-medium mt-2 text-left grey--text text--darken-3"
        >
          Already have an account? <nuxt-link to="Login">Log in here</nuxt-link>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  layout: 'Auth',
  data() {
    return {
      TogglePassword: false
    }
  },
  head() {
    return {
      title: 'Sign Up'
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
