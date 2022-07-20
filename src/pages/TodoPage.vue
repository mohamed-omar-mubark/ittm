<template>
  <q-page class="q-pa-md">
    <q-list bordered>
      <q-item
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        clickable
        v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ task.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon
                name="event"
                size="18px"
                class="q-mr-xs" />
            </div>
            <div class="column">
              <q-item-label
                class="row justify-end"
                caption>
                {{ task.dueDate }}
              </q-item-label>
              <q-item-label
                class="row justify-end"
                caption>
                <small>{{ task.dueTime }}</small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      tasks: [
        {
          id: 1,
          name: 'Go to shop',
          completed: false,
          dueDate: '2022-08-01',
          dueTime: '02:30'
        },
        {
          id: 2,
          name: 'Get bananas',
          completed: false,
          dueDate: '2022-08-02',
          dueTime: '03:00'
        },
        {
          id: 3,
          name: 'Get apple',
          completed: false,
          dueDate: '2022-08-03',
          dueTime: '05:45'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
