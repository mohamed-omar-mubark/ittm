<template>
  <router-view />
</template>

<script>
// import mapActions from 'vuex'
import { mapActions } from 'vuex'

export default {
  mounted() {
    this.getSettings()
  },
  methods: {
    ...mapActions('settings', ['getSettings'])
  }
}
</script>

<style lang="scss">
.text-strikethrough {
  text-decoration: line-through;
}
</style>
