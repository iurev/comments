import React from 'react';
import renderer from 'react-test-renderer';

import Comment from '../Comment';

it('with all attrs', () => {
  const tree = renderer
    .create(<Comment
      title="test"
      text="test"
      image="https://example/image.png"
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('without image', () => {
  const tree = renderer
    .create(<Comment
      title="test"
      text="test"
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
