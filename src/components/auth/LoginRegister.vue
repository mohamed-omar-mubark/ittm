<template>
  <q-form @submit.prevent="register">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        Register to access your todos anywhere!
      </q-banner>
    </div>

    <div class="row q-mb-md">
      <q-input
        v-model="formData.email"
        :rules="[ val => isValidEmail(val) || 'Please use a valid email address.' ]"
        ref="email"
        lazy-rules
        type="email"
        outlined
        class="col"
        label="Email"
        stack-label />
    </div>

    <div class="row q-mb-md">
      <q-input
        v-model="formData.password"
        :rules="[ val => val.length >= 6 || 'Please use minimum 6 characters.']"
        ref="password"
        lazy-rules
        type="password"
        outlined
        class="col"
        label="Password"
        stack-label />
    </div>

    <div class="row">
      <q-space />
      <q-btn
        color="primary"
        label="Register"
        type="submit" />
    </div>
  </q-form>
</template>

<script>
export default {
  props: ['tab'],
  data() {
    return {
      formData: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    isValidEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    register() {
      this.$refs.email.validate();
      this.$refs.password.validate();
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if(this.tab == 'login') {
          console.log('login');
        } else {
          console.log('register');
        }
      }
    }
  }
};
</script>

<style lang='scss' scoped>

</style>
