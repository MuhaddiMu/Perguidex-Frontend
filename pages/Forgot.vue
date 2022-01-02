<template>
  <v-container class="text-center">
    <img width="60px" src="icon.png" class="mb-5" />
    <v-card :loading="loading" tile width="480px" outlined class="mx-auto">
      <v-card-title
        primary-title
        class="justify-center grey--text text--darken-3 font-weight-bold text-h4"
        >Forgot Password?</v-card-title
      >
      <v-card-text>
        <v-alert v-if="isEmailSend" text type="success"
          >Email sent successfully. Please check your email and update your
          password</v-alert
        >
        <div class="mb-3 grey--text text--darken-3 font-weight-regular">
          You forgot your password? No problem, happens with the best of us. To
          reset your password, please enter the email address of your Perguidex
          account.
        </div>

        <v-form
          ref="Form"
          @submit.prevent="sendResetLink()"
          data-splitbee-event="Forgot Form"
        >
          <v-text-field
            :min="0"
            v-model="Email"
            :rules="emailValidation"
            outlined
            label="Email"
            prepend-inner-icon="mdi-email"
          ></v-text-field>
          <v-btn type="submit" tile text class="red mt-3" dark block
            >Reset My Password</v-btn
          >
        </v-form>
        <div
          class="font-weight-regular mt-2 text-left grey--text text--darken-3"
        >
          Already have an account? <nuxt-link to="login">Log in here</nuxt-link>
        </div>
        <div class="font-weight-regular text-left grey--text text--darken-3">
          Don’t have an account?
          <nuxt-link to="Signup">Sign up here</nuxt-link>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import forgotPassword from '@/graphql/auth/forgotPassword'
export default {
  layout: 'Auth',
  head() {
    return {
      title: 'Forgot Password?'
    }
  },
  data() {
    return {
      Email: null,
      loading: false,
      isEmailSend: false,
      emailValidation: [(v) => !!v || 'Email is required']
    }
  },
  methods: {
    async sendResetLink() {
      if (this.$refs.Form.validate()) {
        this.loading = true
        try {
          await this.$apollo
            .mutate({
              mutation: forgotPassword,
              variables: {
                email: this.Email
              }
            })
            .then(({ data }) => data && data.forgotPassword)
          this.loading = false
          this.isEmailSend = true
        } catch (error) {}
      }
    }
  }
}
</script>
