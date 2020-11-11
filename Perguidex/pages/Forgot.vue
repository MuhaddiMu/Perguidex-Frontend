<template>
  <v-container class="text-center">
    <img width="60px" src="icon.png" class="mb-5" />
    <v-card tile width="480px" outlined class="mx-auto">
      <v-card-text>
        <div class="mb-3 grey--text text--darken-3 font-weight-medium">
          To reset your password, please enter the email address of your
          Perguidex account.
        </div>
        <v-form ref="Form">
          <v-text-field
            :min="0"
            outlined
            label="Email"
            prepend-inner-icon="mdi-email"
          ></v-text-field>
          <v-btn tile text class="red mt-n4" dark block
            >Reset My Password</v-btn
          >
        </v-form>
        <div
          class="font-weight-medium mt-2 text-left grey--text text--darken-3"
        >
          Already have an account? <nuxt-link to="Login">Log in here</nuxt-link>
        </div>
        <div class="font-weight-medium text-left grey--text text--darken-3">
          Don’t have an account?
          <nuxt-link to="Signup">Sign up here</nuxt-link>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  layout: 'Auth',
  head() {
    return {
      title: 'Forgot Password?'
    }
  }
}
</script>
