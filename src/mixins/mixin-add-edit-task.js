export default {
  components: {
    'modal-header': require('components/tasks/modals/shared/ModalHeader.vue').default,
    'modal-task-name': require('components/tasks/modals/shared/ModalTaskName.vue').default,
    'modal-due-date': require('components/tasks/modals/shared/ModalDueDate.vue').default,
    'modal-due-time': require('components/tasks/modals/shared/ModalDueTime.vue').default
  },
  methods: {
    // Submit form
    submitForm() {
      if(!this.$refs.name.hasError) {
        this.submitTask();
      }
    },
  }
}
