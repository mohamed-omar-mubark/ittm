<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <div class="row q-mb-lg">
        <search />
        <sort />
      </div>

      <p v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length">No search results.</p>

      <q-scroll-area
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        class="q-scroll-area-tasks"
      >
        <no-tasks
          v-if="!Object.keys(tasksTodo).length && !search && !settings.showTasksInOneList"
          @showAddTask="showAddTask = true"
        ></no-tasks>

        <tasks-todo
          v-if="Object.keys(tasksTodo).length"
          :tasksTodo="tasksTodo" />

        <tasks-completed
          v-if="Object.keys(tasksCompleted).length"
          :tasksCompleted="tasksCompleted"
          class="q-mb-xl" />
      </q-scroll-area>

      <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
        <q-btn
          @click="showAddTask = true"
          round
          class="all-pointer-events"
          color="primary"
          size="24px"
          icon="add"
        />
      </div>
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
// import mapGetters and mapState from vuex
import { mapGetters, mapState } from 'vuex';

export default {
  data() {
    return {
      showAddTask: false,
      thumbStyle: {
        right: '1px',
        borderRadius: '5px',
        backgroundColor: '#405189',
        width: '5px',
        opacity: 0.5
      },

      barStyle: {
        right: '1px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.2
      }
    };
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted']),
    ...mapGetters('settings', ['settings']),
    ...mapState('tasks', ['search']),
  },
  components: {
    'add-task': require('components/tasks/modals/AddTask.vue').default,
    'tasks-todo': require('components/tasks/TasksTodo.vue').default,
    'tasks-completed': require('components/tasks/TasksCompleted.vue').default,
    'no-tasks': require('components/tasks/NoTasks.vue').default,
    'search': require('components/tasks/tools/Search.vue').default,
    'sort': require('components/tasks/tools/Sort.vue').default,
  }
}
</script>

<style lang="scss" scoped>
.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
}
</style>
