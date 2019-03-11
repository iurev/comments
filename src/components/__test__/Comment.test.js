import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Comment from '../Comment';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Comment />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('with all attrs', () => {
  const tree = renderer
    .create(<Comment
      title="test"
      text="test"
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
