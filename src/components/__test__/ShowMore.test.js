import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import ShowMore from '../ShowMore';
import store from '../../store'

// TODO: figure out how to initialize a store with other values in tests
it('hidden', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <ShowMore />
    </Provider>
  )
  .toJSON()
  expect(tree).toMatchSnapshot();
});
