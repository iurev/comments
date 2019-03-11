import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Stars from '../Stars';

it('3', () => {
  const tree = new ShallowRenderer().render(
    <Stars count={3} />
  )
  expect(tree).toMatchSnapshot();
});
