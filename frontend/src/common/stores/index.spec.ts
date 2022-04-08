import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('stores test', () => {
  const initialState = {};
  const store = mockStore(initialState);
  it('it should correctly define initial state', () => {
    const expectedInitial = {};
    expect(store.getState()).toEqual(expectedInitial);
  });
});
