import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import { state, getters } from '@/store/modules/todos';

import FilterTodos from '@/components/FilterTodos.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('FilterTodos component', () => {
  let actions;
  let wrapper;
  let store;

  beforeEach(() => {
    actions = {
      filterTodos: jest.fn(),
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
    wrapper = mount(FilterTodos, {
      store,
      localVue,
    });
  });

  it('should render', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('should select filter', () => {
    wrapper.find('.select-filter').trigger('change');
    expect(actions.filterTodos).toHaveBeenCalled();
  });
});
