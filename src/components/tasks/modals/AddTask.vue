<template>
  <q-card>
    <modal-header>Add Task</modal-header>

    <q-form @submit.prevent="submitForm">
      <q-card-section>
        <modal-task-name
          :name="taskData.name"
          @update:name="taskData.name = $event"
          ref="name"
        ></modal-task-name>

        <modal-due-date
          :dueDate="taskData.dueDate"
          @update:dueDate="taskData.dueDate = $event"
        ></modal-due-date>

        <modal-due-time
          v-if="taskData.dueDate"
          :dueTime="taskData.dueTime"
          @update:dueTime="taskData.dueTime = $event"
        ></modal-due-time>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          label="Save"
          color="primary"
          type="submit" />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
// import mixins
import mixinAddEditTask from 'src/mixins/mixin-add-edit-task'

export default {
  data() {
    return {
      taskData: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false
      }
    };
  },
  mixins: [mixinAddEditTask],
  methods: {
    // add task
    ...mapActions('tasks', ['addTask']),

    // Submit task
    submitTask() {
      this.addTask(this.taskData)
      this.$emit('close')
    }
  }
};
</script>

<style lang='scss' scoped>

</style>
