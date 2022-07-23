<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <div :class="{ 'q-mt-lg' : !settings.showTasksInOneList }">
      <list-header
        v-if="!settings.showTasksInOneList"
        bgColor="bg-green-5"
      >Completed</list-header>

      <q-list
        separator
        bordered>
          <task
            v-for="(task, key) in tasksCompleted"
            :key="key"
            :task="task"
            :id="key"></task>
      </q-list>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['tasksCompleted'],
  components: {
    'task': require('components/tasks/Task.vue').default,
    'list-header': require('components/shared/ListHeader.vue').default
  },
  computed: {
    ...mapGetters('settings', ['settings'])
  },
};
</script>

<style lang='scss' scoped>

</style>
