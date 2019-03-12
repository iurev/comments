import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { ShowMore } from '../ShowMore'


it('hidden', () => {
  const tree = new ShallowRenderer().render(<ShowMore hidden />)

  expect(tree).toMatchSnapshot()
})

it('loading', () => {
  const tree = new ShallowRenderer().render(<ShowMore loading />)

  expect(tree).toMatchSnapshot()
})

it('ok', () => {
  const tree = new ShallowRenderer().render(<ShowMore loading={false} />)

  expect(tree).toMatchSnapshot()
})
