<template>
  <v-container>
    <v-toolbar>
      <v-toolbar-title>Todo List</v-toolbar-title>
    </v-toolbar>
    <v-container fluid>
      <v-card
        class="todo"
        @dblclick="onUpdateTodo(todo)"
        v-for="todo in allTodos"
        :key="todo.id"
        :ripple="{ class: 'ripple' }"
        v-bind:class="{'is-completed': todo.completed}"
      >
        <v-layout row>
          <v-flex grow>
            <v-card-title>
              <v-btn fab color="success" outline small v-if="todo.completed">
                <v-icon>playlist_add_check</v-icon>
              </v-btn>
              <v-btn v-else fab small outline disabled>
                <v-icon>playlist_play</v-icon>
              </v-btn>
              {{todo.title}}
            </v-card-title>
          </v-flex>
          <v-flex shrink>
            <v-btn color="info" class="btn-update" fab @click="onUpdateTodo(todo)" outline large>
              <v-icon>check</v-icon>
            </v-btn>
          </v-flex>
          <v-flex shrink>
            <v-btn class="btn-delete" color="error" fab @click="onDelTodo(todo.id)" outline large>
              <v-icon>delete_sweep</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Todos',
  methods: {
    ...mapActions(['getTodos', 'deleteTodo', 'updateTodo']),
    onDelTodo(id) {
      this.deleteTodo(id);
    },
    onUpdateTodo(todo) {
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };

      this.updateTodo(updatedTodo);
    },
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.getTodos();
  },
};
</script>

<style>
.todo {
  margin-bottom: 1em;
  padding: 0.4em;
  font-size: 15pt;
  text-transform: capitalize;
  cursor: pointer;
}

.ripple,
.is-completed {
  background: rgba(250, 50, 133, 0.15) !important;
  color: #fff;
}
</style>
