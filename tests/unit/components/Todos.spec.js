import Vuex from 'vuex';
import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import todos from '@/store/modules/todos';
import Todos from '@/components/Todos.vue';


describe('Todos component', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    Vue.use(Vuetify);
    Vue.use(Vuex);
    store = new Vuex.Store({
      modules: {
        todos,
      },
    });
    wrapper = shallowMount(Todos, {
      store,
    });
  });

  it('should render', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
