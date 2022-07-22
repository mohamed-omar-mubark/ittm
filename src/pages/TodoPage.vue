<template>
  <q-page class="q-pa-md">

    <no-tasks
      v-if="!Object.keys(tasksTodo).length"
      @showAddTask="showAddTask = true"
    ></no-tasks>

    <tasks-todo
      v-else
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
// import mapGetters
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      showAddTask: false,
    };
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted']),
  },
  components: {
    'add-task': require('components/tasks/modals/AddTask.vue').default,
    'tasks-todo': require('components/tasks/TasksTodo.vue').default,
    'tasks-completed': require('components/tasks/TasksCompleted.vue').default,
    'no-tasks': require('components/tasks/NoTasks.vue').default,
  }
}
</script>

<style lang="scss" scoped>

</style>
