<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div>
      <list-header
        v-if="!settings.showTasksInOneList"
        bgColor="bg-orange-5"
      >Todo</list-header>

      <q-list
        separator
        bordered>
          <task
            v-for="(task, key) in tasksTodo"
            :key="key"
            :task="task"
            :id="key"></task>
      </q-list>
    </div>
  </transition>
</template>

<script>
// import mapGetters
import { mapGetters } from 'vuex'

export default {
  props: ['tasksTodo'],
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
