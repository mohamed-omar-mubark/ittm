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

    <q-form @submit.prevent="addTask">
      <q-card-section>
        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskData.name"
            :rules="[val => !!val || 'Field is required']"
            ref="name"
            label="Task name"
            class="col"
          ></q-input>
        </div>

        <div class="row q-mb-sm">
          <q-input
            outlined
            label="Due date"
            v-model="taskData.dueDate">
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

        <div class="row q-mb-sm">
          <q-input
            outlined
            label="Due time"
            v-model="taskData.dueTime">
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
          flat
          label="Save"
          color="primary"
          type="submit" />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
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
    // Add new task
    addTask() {
      // this.$refs.name.validate();
      if(!this.$refs.name.hasError) {
        this.submitTask();
      }
    },
    // Submit task
    submitTask() {
      console.log('submitTask');
    }
  }
};
</script>

<style lang='scss' scoped>

</style>
