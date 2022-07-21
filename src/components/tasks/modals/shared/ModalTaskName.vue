<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      :modelValue="name"
      @update:modelValue="event => $emit('update:name', event)"
      :rules="[val => !!val || 'Field is required']"
      autofocus
      ref="name"
      label="Task name"
      class="col"
      clearable
    ></q-input>
  </div>
</template>

<script>
export default {
  props: ['name'],
};
</script>

<style lang='scss' scoped>

</style>
