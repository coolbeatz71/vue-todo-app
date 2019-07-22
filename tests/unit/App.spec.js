import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import todos from '@/store/modules/todos';

import App from '@/App.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('App component', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        todos,
      },
    });
    wrapper = mount(App, {
      store,
      localVue,
    });
  });
  it('should have a mounted hook', () => {
    expect(typeof App.mounted).toBe('function');
  });

  it('should have a data hook', () => {
    expect(typeof App.data).toBe('function');
  });

  it('should return false', () => {
    const wrapper = App.data();
    expect(wrapper.isLoading).toBeFalsy();
  });

  it('should render', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
