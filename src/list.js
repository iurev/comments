import React, { Component } from 'react';
import styled from 'styled-components'
import Item from './item'

const Root = styled.section`
`

const comments = [
  {
    title: 'title',
    user: {
      name: 'Name Name',
    },
    stats: 5,
  },
  {
    title: 'title',
    user: {
      name: 'Name Name',
    },
    stats: 5,
  },
  {
    title: 'title',
    user: {
      name: 'Name Name',
    },
    stats: 5,
  },
]

class List extends Component {
  render() {
    return (
      <Root>
        {comments.map((c, i) => <Item key={i} comment={c} />)}
      </Root>
    );
  }
}

export default List;
