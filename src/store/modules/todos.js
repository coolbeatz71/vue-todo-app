import axios from 'axios';
import Vue from 'vue';
import URL from '../../environment';

export const state = {
  loading: false,
  todos: [
  ],
};

export const getters = {
  allTodos: state => state.todos,
  getLoading: state => state.loading,
};

export const actions = {
  getTodos: async ({ commit }) => {
    const res = await axios.get(URL);
    const { data } = res;
    commit('setTodos', data);
  },

  postTodo: async ({ commit }, title) => {
    commit('LOADING', true);
    const res = await axios.post(URL, {
      title,
      completed: false,
    });
    const { data } = res;
    commit('LOADING', false);
    commit('addTodo', data);
  },

  deleteTodo: async ({ commit }, id) => {
    commit('LOADING', true);
    await axios.delete(`${URL}/${id}`);
    commit('LOADING', false);
    commit('deleteTodo', id);
  },

  filterTodos: async ({ commit }, limit) => {
    commit('LOADING', true);
    const res = await axios.get(`${URL}?_limit=${limit}`);
    const { data } = res;
    commit('LOADING', false);
    commit('setTodos', data);
  },

  updateTodo: async ({ commit }, previousTodo) => {
    commit('LOADING', true);
    const res = await axios.put(`${URL}/${previousTodo.id}`, previousTodo);
    const { data } = res;
    commit('LOADING', false);
    commit('updateTodo', data);
  },
};

// comparable to reducers in redux
export const mutations = {
  LOADING: (state, loading) => {
    Vue.set(state, 'loading', loading);
  },
  setTodos: (state, todos) => {
    state.todos = todos;
  },

  addTodo: (state, todo) => {
    state.todos.unshift(todo);
  },

  deleteTodo: (state, id) => {
    const { todos } = state;
    state.todos = todos.filter(item => item.id !== id);
  },

  updateTodo: (state, newTodo) => {
    const index = state.todos.findIndex(todo => todo.id === newTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, newTodo);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
