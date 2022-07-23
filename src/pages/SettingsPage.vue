<template>
  <q-page padding>
    <q-list bordered padding>
      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Shoe 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle v-model="show12HourTimeFormat" color="blue" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      show12HourTimeFormat: false,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
