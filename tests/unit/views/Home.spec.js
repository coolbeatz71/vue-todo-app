import { shallowMount } from '@vue/test-utils';
import Home from '../../../src/views/Home.vue';

describe('Home views', () => {
  it('should render', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
