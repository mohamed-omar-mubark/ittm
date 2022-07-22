<template>
  <list-header
    bgColor="bg-orange-5"
  >Todo</list-header>

  <q-list
    v-if="Object.keys(tasksTodo).length"
    separator
    bordered>
      <task
        v-for="(task, key) in tasksTodo"
        :key="key"
        :task="task"
        :id="key"></task>
  </q-list>
</template>

<script>
export default {
  props: ['tasksTodo'],
  components: {
    'task': require('components/tasks/Task.vue').default,
    'list-header': require('components/shared/ListHeader.vue').default
  }
};
</script>

<style lang='scss' scoped>

</style>
