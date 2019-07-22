<template>
  <v-layout row>
    <v-snackbar v-model="snackbar" :right="x" :top="y" :timeout="timeout">{{text}}</v-snackbar>
    <v-flex grow>
      <v-text-field
        label="Add todo"
        placeholder="Enter you new todo description..."
        outline
        v-model="title"
        append-icon="add_circle_outline"
      ></v-text-field>
    </v-flex>
    <v-flex shrink>
      <v-btn color="primary" large @click="onSubmit($event)" class="btn-submit">submit</v-btn>
    </v-flex>
    <v-flex shrink>
      <FilterTodos />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex';
import FilterTodos from './FilterTodos.vue';

export default {
  components: {
    FilterTodos,
  },
  name: 'AddTodo',
  data() {
    return {
      title: '',
      snackbar: false,
      y: 'top',
      x: 'right',
      timeout: 2000,
      text: 'Oops!! The title is not allow to be empty',
    };
  },
  methods: {
    ...mapActions(['postTodo']),
    onSubmit(e) {
      if (!this.title) {
        this.snackbar = true;
      } else {
        e.preventDefault();
        this.snackbar = false;
        this.postTodo(this.title);
        this.title = '';
      }
    },
  },
};
</script>

<style>
.btn-submit {
  bottom: 6px;
  height: 58px;
  border-radius: 3px;
}
</style>
