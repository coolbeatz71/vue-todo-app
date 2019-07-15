<template>
  <div class="content">
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '../components/Todos.vue';
import AddTodo from '../components/AddTodo.vue';

export default {
  name: 'home',
  components: {
    Todos,
    AddTodo,
  },
};
</script>
<style>
.content {
  margin: auto;
}
</style>
