<template>
  <q-card>
    <modal-header>Edit Task</modal-header>

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
// import mapActions
import { mapActions } from 'vuex'

export default {
  components: {
    'modal-header': require('components/tasks/modals/shared/ModalHeader.vue').default,
    'modal-task-name': require('components/tasks/modals/shared/ModalTaskName.vue').default,
    'modal-due-date': require('components/tasks/modals/shared/ModalDueDate.vue').default,
    'modal-due-time': require('components/tasks/modals/shared/ModalDueTime.vue').default
  },
  props: ['task', 'id'],
  data() {
    return {
      taskData: {}
    };
  },
  created() {
    this.taskData = Object.assign({}, this.task);
  },
  methods: {
    // add task
    ...mapActions('tasks', ['updateTask']),
    // Submit form
    submitForm() {
      if(!this.$refs.name.hasError) {
        this.submitTask();
      }
    },
    // Submit task
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskData
      })
      this.$emit('close')
    }
  }
};
</script>

<style lang='scss' scoped>

</style>
