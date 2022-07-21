<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      :modelValue="dueTime"
      @update:modelValue="event => $emit('update:dueTime', event)"
      label="Due time"
      class="col"
      clearable>
      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-time
              :modelValue="dueTime"
              @update:modelValue="event => $emit('update:dueTime', event)"
            >
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ['dueTime'],
};
</script>

<style lang='scss' scoped>

</style>
