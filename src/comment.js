import React, { Component } from 'react';
import styled from 'styled-components'
import Html from 'dangerously-set-inner-html'

const Root = styled.div`
`

const Title = styled.div`
  color: ${p => p.theme.darkFontColor};
  font-size: 24px;
  margin-bottom: 5px;
`

const Text = styled.div`
  color: ${p => p.theme.mediumFontColor};
  font-size: 14px;
`

class Item extends Component {
  render() {
    return (
      <Root>
        <Title>{this.props.title}</Title>
        <Text>
          <Html html={this.props.text} />
        </Text>
      </Root>
    );
  }
}

export default Item;
