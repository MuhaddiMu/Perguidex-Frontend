<template>
  <div class="text-center">
    <img width="10%" src="Logo.png" class="mb-5" />
    <v-card tile width="400px" outlined class="mx-auto">
      <v-card-text>
        <div class="mb-3 grey--text text--darken-3">
          To reset your password, please enter the email address of your
          Perguidex account.
        </div>
        <v-form ref="Form">
          <v-text-field
            outlined
            label="Email"
            :min="0"
            prepend-inner-icon="mdi-email"
          ></v-text-field>
          <v-btn tile text class="red mt-n4" dark block
            >Reset My Password</v-btn
          >
        </v-form>
        <div class="mt-2 text-left grey--text text--darken-3">
          Already have an account? <nuxt-link to="Login">Login here</nuxt-link>
        </div>
        <div class="text-left grey--text text--darken-3">
          Don't have an account?
          <nuxt-link to="Signup">Signup here</nuxt-link>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  layout: 'Auth'
}
</script>
