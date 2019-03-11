import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Item from '../Item';

it('renders', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer
    .render(<Item
      data={{
        author: {},
        comment: {},
        bottom: {},
      }}
    />)
  expect(tree).toMatchSnapshot();
});
