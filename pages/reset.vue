<template>
  <v-container class="text-center">
    <img width="60px" src="icon.png" class="mb-5" />
    <v-card :loading="loading" tile width="480px" outlined class="mx-auto">
      <v-card-text>
        <div class="mb-3 grey--text text--darken-3 font-weight-regular">
          To reset your password, please enter the new password
        </div>

        <v-form ref="Form" @submit.prevent="updatePassword()">
          <v-text-field
            :min="0"
            v-model="Email"
            :rules="emailValidation"
            outlined
            label="Email"
            prepend-inner-icon="mdi-email"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="TogglePassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordValidation"
            :type="TogglePassword ? 'text' : 'password'"
            :disabled="loading"
            :min="8"
            @click:append="TogglePassword = !TogglePassword"
            counter
            outlined
            label="New Password"
            prepend-inner-icon="mdi-lock"
          ></v-text-field>

          <v-btn type="submit" tile text class="red mt-3" dark block
            >Update Password</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import resetPassword from '@/graphql/auth/resetPassword'
export default {
  layout: 'Auth',
  data() {
    return {
      Email: null,
      token: null,
      loading: false,
      emailValidation: [(v) => !!v || 'Email is required'],
      TogglePassword: false,
      passwordValidation: [(v) => (v && v.length >= 8) || 'Min 8 characters'],
      password: null
    }
  },
  mounted() {
    this.Email = this.$route.query.email
    this.token = this.$route.query.token
  },
  head() {
    return {
      title: 'Reset Password'
    }
  },
  methods: {
    async updatePassword() {
      if (this.$refs.Form.validate()) {
        this.loading = true
        try {
          await this.$apollo
            .mutate({
              mutation: resetPassword,
              variables: {
                email: this.Email,
                token: this.token,
                password: this.password
              }
            })
            .then(({ data }) => data && data.resetPassword)
          this.$router.push('/login')
        } catch (error) {}
      }
    }
  }
}
</script>
