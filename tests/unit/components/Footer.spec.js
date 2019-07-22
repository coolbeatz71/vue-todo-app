import { shallowMount } from '@vue/test-utils';
import Footer from '../../../src/components/Footer.vue';

describe('Footer component', () => {
  it('should render', () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
