import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { List } from '../List';

it('empty feedbacks', () => {
  const tree = new ShallowRenderer().render(<List
    feedbacks={[]}
  />)
  expect(tree).toMatchSnapshot();
});

it('1 feedback', () => {
  const tree = new ShallowRenderer().render(<List
    feedbacks={[{}]}
  />)
  expect(tree).toMatchSnapshot();
});
