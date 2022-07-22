<template>
  <q-page class="q-pa-md">

    <div class="row q-mb-lg">
      <search />
      <sort />
    </div>

    <p v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length">No search results.</p>

    <no-tasks
      v-if="!Object.keys(tasksTodo).length && !search"
      @showAddTask="showAddTask = true"
    ></no-tasks>

    <tasks-todo
      v-if="Object.keys(tasksTodo).length"
      :tasksTodo="tasksTodo" />

    <tasks-completed
      v-if="Object.keys(tasksCompleted).length"
      :tasksCompleted="tasksCompleted" />

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
      />
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
    };
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted']),
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

</style>
