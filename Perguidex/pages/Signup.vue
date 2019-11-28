<template>
  <div class="text-center">
    <img width="10%" src="Logo.png" class="mb-5" />
    <v-card tile max-width="400px" outlined class="mx-auto">
      <v-card-text>
        <v-btn tile block depressed
          ><img width="16px" class="mr-2" src="FacebookIco.png" /> Signup with
          Facebook Account</v-btn
        >
        <v-btn tile class="mt-2" block depressed
          ><img width="16px" class="mr-2" src="GoogleIco.png" /> Signup with
          Google Account</v-btn
        >
        <div class="Half-Seperator caption my-3">OR</div>
        <v-form ref="Form">
          <v-text-field
            outlined
            label="Full Name"
            :min="0"
            prepend-inner-icon="mdi-account"
          ></v-text-field>
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
          <div class="text-left mt-n5">
            By creating an account, you agree to the Perguidex
            <a href="#" target="_blank">Terms of Service</a> and
            <a href="#">Privacy Policy</a>.
          </div>
          <v-btn tile text class="red mt-3" dark block>Create My Account</v-btn>
        </v-form>
        <div class="mt-2 text-left">
          Already have an account? <nuxt-link to="Login">Login here</nuxt-link>
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
