import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import Item from './Item'
import {
  feedbacksLimitedList,
} from '../selectors'

const Root = styled.section`
  display: flex;
  flex-direction: column;
`

const selector = createSelector(
  feedbacksLimitedList,
  list => ({ feedbacks: list })
)

class List extends Component {
  render() {
    return (
      <Root>
        {this.props.feedbacks.map((c, i) => <Item key={i} comment={c} />)}
      </Root>
    );
  }
}

export default connect(
  state => selector(state),
  null,
)(List);
