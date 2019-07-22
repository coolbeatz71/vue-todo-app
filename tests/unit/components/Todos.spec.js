import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import todos from '@/store/modules/todos';
import Todos from '@/components/Todos.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Todos component', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        todos,
      },
    });
    wrapper = mount(Todos, {
      store,
      localVue,
    });
  });

  it('should render', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('should deleteTodo', () => {
    wrapper.find('.btn-delete').trigger('click');
  });

  it('should updateTodo', () => {
    wrapper.find('.btn-update').trigger('click');
  });
});
