import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import Ink from 'react-ink'
import { ifProp } from 'styled-tools'
import actions from '../actions'

const Root = styled.button`
  position: relative;
  border: 2px solid ${p => p.theme.green};
  width: 70px;
  height: 70px;
  border-radius: 35px;
  color: ${p => p.theme.green};
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  font-weight: 700;
  font-size: 9px;
  cursor: pointer;
  outline: none;
  transition: background ease-out 0.3s;
  user-select: none;

  &:hover {
    background: ${p => p.theme.lightGreen};
  }

  ${ifProp('loading', css`
    border: 2px solid ${p => p.theme.mediumFontColor};
    color: ${p => p.theme.mediumFontColor};
    cursor: default;
    pointer-events: none;
    &:hover {
      background: transparent;
    }
  `)}
`

class ShowMore extends Component {
  render() {
    const { loading, showMore } = this.props
    return (
      <Root
        onClick={showMore}
        disabled={loading}
        loading={loading}
      >
        <Ink />
        {loading ? 'Loading' : 'Load more'}
      </Root>
    );
  }
}

export default connect(
  null,
  actions,
)(ShowMore);
