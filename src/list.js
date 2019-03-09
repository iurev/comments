import React, { Component } from 'react';
import styled from 'styled-components'
import Item from './item'
import comments from './data.json'

const Root = styled.section`
`

class List extends Component {
  render() {
    return (
      <Root>
        {[comments].map((c, i) => <Item key={i} comment={c} />)}
      </Root>
    );
  }
}

export default List;
