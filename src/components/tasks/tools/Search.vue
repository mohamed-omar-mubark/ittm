<template>
  <q-input
    v-model="searchField"
    @keyup.esc="searchField = ''"
    outlined
    class="col"
    label="Search"
    ref="searchInput"
    @focus="$refs.searchInput.select()">

    <template v-slot:append>
      <q-icon v-if="searchField !== ''" name="close" @click="searchField = ''" class="cursor-pointer" />
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('tasks', ['search']),
    searchField: {
      get(){
        return this.search
      },
      set(value){
        this.setSearch(value)
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['setSearch'])
  }
};
</script>

<style lang='scss' scoped>

</style>
