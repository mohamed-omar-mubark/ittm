<template>
  <router-view />
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted() {
    this.getSettings()
    this.handleAuthStateChanged()
  },
  methods: {
    ...mapActions('settings', ['getSettings']),
    ...mapActions('auth', ['handleAuthStateChanged'])
  }
}
</script>

<style lang="scss">
.text-strikethrough {
  text-decoration: line-through;
}
</style>
