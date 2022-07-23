<template>
  <q-form>
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
        type="email"
        outlined
        class="col"
        label="Email"
        stack-label />
    </div>

    <div class="row q-mb-md">
      <q-input
        v-model="formData.password"
        type="password"
        outlined
        class="col"
        label="Password"
        stack-label />
    </div>

    <div class="row">
      <q-space />
      <q-btn color="primary" label="Register" />
    </div>
  </q-form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
      }
    }
  }
};
</script>

<style lang='scss' scoped>

</style>
