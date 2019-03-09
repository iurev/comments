import React, { Component } from 'react';
import styled from 'styled-components'

const Root = styled.div`
`

class User extends Component {
  render() {
    return (
      <Root>
        {this.props.user.name}
      </Root>
    );
  }
}

export default User;
