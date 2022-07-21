<template>
  <q-card>
    <modal-header>Add Task</modal-header>

    <q-form @submit.prevent="submitForm">
      <q-card-section>
        <modal-task-name
          :name="taskData.name"
          @update:name="taskData.name = $event"
        ></modal-task-name>

        <modal-due-date
          :dueDate="taskData.dueDate"
          @update:dueDate="taskData.dueDate = $event"
        ></modal-due-date>

        <div
          v-if="taskData.dueDate"
          class="row q-mb-sm">
          <q-input
            outlined
            label="Due time"
            v-model="taskData.dueTime"
            class="col"
            clearable>
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskData.dueTime">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          label="Save"
          color="primary"
          type="submit" />
      </q-card-actions>

      <pre>{{ taskData }}</pre>
    </q-form>
  </q-card>
</template>

<script>
// import mapActions
import { mapActions } from 'vuex'

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
  methods: {
    // add task
    ...mapActions('tasks', ['addTask']),
    // Submit form
    submitForm() {
      if(!this.$refs.name.hasError) {
        this.submitTask();
      }
    },
    // Submit task
    submitTask() {
      this.addTask(this.taskData)
      this.$emit('close')
    }
  },
  components: {
    'modal-header': require('../modals/shared/ModalHeader.vue').default,
    'modal-task-name': require('../modals/shared/ModalTaskName.vue').default,
    'modal-due-date': require('../modals/shared/ModalDueDate.vue').default,
  },
};
</script>

<style lang='scss' scoped>

</style>
