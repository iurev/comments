import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Author from '../Author'


it('with all attrs', () => {
  const tree = renderer
    .create(<Author
      avatar="https://example.com/image.png"
      name="John Doe"
      time="5 mins"
    />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('without attrs', () => {
  const tree = renderer
    .create(<Author />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('without avatar', () => {
  const tree = renderer
    .create(<Author
      name="John Doe"
      time="5 mins"
    />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
