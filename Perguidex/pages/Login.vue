<template>
  <div class="text-center">
    <img width="10%" src="Logo.png" class="mb-5" />
    <v-card tile max-width="400px" outlined class="mx-auto">
      <v-card-text>
        <v-btn tile block depressed
          ><img width="16px" class="mr-2" src="FacebookIco.png" /> Login with
          Facebook Account</v-btn
        >
        <v-btn tile class="mt-2" block depressed
          ><img width="16px" class="mr-2" src="GoogleIco.png" /> Login with
          Google Account</v-btn
        >
        <div class="Half-Seperator caption my-3">OR</div>
        <v-form ref="Form">
          <v-text-field
            outlined
            label="Email"
            :min="0"
            prepend-inner-icon="mdi-email"
          ></v-text-field>
          <v-text-field
            outlined
            :append-icon="TogglePassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="TogglePassword ? 'text' : 'password'"
            label="Password"
            :min="0"
            prepend-inner-icon="mdi-lock"
            @click:append="TogglePassword = !TogglePassword"
          ></v-text-field>
          <v-btn tile text class="red mt-n4" dark block>Log Me In</v-btn>
        </v-form>
        <div class="text-left mt-3 grey--text text--darken-3">
          <nuxt-link to="Forgot">Forgot Password?</nuxt-link>
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
  layout: 'Auth',
  data() {
    return {
      TogglePassword: false
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
