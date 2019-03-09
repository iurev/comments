import React, { Component } from 'react';
import styled from 'styled-components'
import Item from './item'
import comment from './data.json'

const Root = styled.section`
  display: flex;
  flex-direction: column;
`

class List extends Component {
  render() {
    return (
      <Root>
        {[comment, comment].map((c, i) => <Item key={i} comment={c} />)}
      </Root>
    );
  }
}

export default List;
