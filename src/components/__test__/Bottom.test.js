import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Bottom from '../Bottom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bottom />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('with all attrs', () => {
  const tree = renderer
    .create(<Bottom
      voteCount={1}
      answerCount={1}
      time="5 mins"
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('closed', () => {
  const tree = renderer
    .create(<Bottom
      voteCount={1}
      answerCount={1}
      time="5 mins"
      closed
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
