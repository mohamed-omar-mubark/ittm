<template>
  <q-select
    v-model="sortBy"
    :options="options"
    emit-value
    map-options
    class="col q-ml-sm"
    filled
    label="Sort by"
    stack-label />
</template>

<script>
export default {
  data() {
    return {
      sortBy: null,

      options: [
        {
          label: 'Name',
          value: 'name',
        },
        {
          label: 'Date',
          value: 'dueDate',
        },
      ],
    }
  }
};
</script>

<style lang='scss' scoped>
.q-select {
  flex: 0 0 112px;
}
</style>
