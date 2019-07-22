import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import { state, getters } from '@/store/modules/todos';

import AddTodo from '@/components/AddTodo.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('AddTodo component', () => {
  let actions;
  let wrapper;
  let store;

  beforeEach(() => {
    actions = {
      postTodo: jest.fn(),
    };
    store = new Vuex.Store({
      modules: {
        todos: {
          state,
          actions,
          getters,
        },
      },
    });
    wrapper = mount(AddTodo, {
      store,
      localVue,
    });
  });

  it('should render', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('should submit todo', () => {
    wrapper.setData({ title: 'not empty' });
    wrapper.find('.btn-submit').trigger('click');
    expect(actions.postTodo).toHaveBeenCalled();
  });

  it('should display snackbar', () => {
    wrapper.find('.btn-submit').trigger('click');
  });
});
