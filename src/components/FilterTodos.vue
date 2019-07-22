<template>
  <v-select
    class="select-filter"
    @change="onFilterTodos"
    label="Select Filter"
    :items="items"
    outline
  ></v-select>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FilterTodos',
  data: () => ({
    items: ['100', '50', '20', '10', '5'],
  }),
  methods: {
    ...mapActions(['filterTodos']),
    onFilterTodos(limit) {
      this.filterTodos(limit);
    },
  },
};
</script>

<style>
</style>
