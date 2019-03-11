import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Bottom from '../Bottom';


it('with all attrs', () => {
  const tree = new ShallowRenderer().render(
    <Bottom
      voteCount={1}
      answerCount={1}
      time="5 mins"
    />)
  expect(tree).toMatchSnapshot();
});

it('closed', () => {
  const tree = new ShallowRenderer().render(
    <Bottom
      voteCount={1}
      answerCount={1}
      time="5 mins"
      closed
    />)
  expect(tree).toMatchSnapshot();
});
