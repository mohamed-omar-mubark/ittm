<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn
        v-close-popup
        flat
        round
        dense
        icon="close" />
    </q-card-section>

    <q-form @submit.prevent="submitForm">
      <q-card-section>
        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskData.name"
            :rules="[val => !!val || 'Field is required']"
            autofocus
            ref="name"
            label="Task name"
            class="col"
            clearable
          ></q-input>
        </div>

        <div class="row q-mb-sm">
          <q-input
            outlined
            label="Due date"
            v-model="taskData.dueDate"
            clearable>
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="taskData.dueDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div
          v-if="taskData.dueDate"
          class="row q-mb-sm">
          <q-input
            outlined
            label="Due time"
            v-model="taskData.dueTime"
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
  }
};
</script>

<style lang='scss' scoped>

</style>
