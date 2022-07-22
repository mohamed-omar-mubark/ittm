<template>
  <q-select
    v-model="model"
    :options="options"
    class="col q-ml-sm"
    filled
    label="Sort by"
    stack-label />
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      model: ref(null),

      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
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
