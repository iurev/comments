import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Comment from '../Comment';

it('with all attrs', () => {
  const tree = new ShallowRenderer().render(
    <Comment
      title="test"
      text="test"
      image="https://example/image.png"
    />)
  expect(tree).toMatchSnapshot();
});

it('without image', () => {
  const tree = new ShallowRenderer().render(
    <Comment
      title="test"
      text="test"
    />)
  expect(tree).toMatchSnapshot();
});
