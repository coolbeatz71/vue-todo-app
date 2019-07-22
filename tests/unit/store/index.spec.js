import store from '../../../src/store/index';

describe('Store', () => {
  it('return the store', async () => {
    expect(store.state).toBeDefined();
  });
});
