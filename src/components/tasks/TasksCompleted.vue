<template>
  <list-header
    bgColor="bg-green-5"
    class="q-mt-lg"
  >Completed</list-header>

  <q-list
    v-if="Object.keys(tasksCompleted).length"
    separator
    bordered>
      <task
        v-for="(task, key) in tasksCompleted"
        :key="key"
        :task="task"
        :id="key"></task>
  </q-list>
</template>

<script>
export default {
  props: ['tasksCompleted'],
  components: {
    'task': require('components/tasks/Task.vue').default,
    'list-header': require('components/shared/ListHeader.vue').default
  }
};
</script>

<style lang='scss' scoped>

</style>
