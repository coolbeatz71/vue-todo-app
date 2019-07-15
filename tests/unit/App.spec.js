import App from '../../src/App.vue';

describe('App component', () => {
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
});
