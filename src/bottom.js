import React, { Component } from 'react';
import styled from 'styled-components'
import { Heart } from 'styled-icons/boxicons-solid/Heart'
import { Comment } from 'styled-icons/fa-solid/Comment'

const Root = styled.div`
  display: flex;
  align-items: center;
`

const Text = styled.div`
  line-height: 12px;
  font-size: 12px;
  color: ${p => p.theme.lightFontColor};
`

const Time = styled(Text)`
  margin-right: 10px;
`

const Stat = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`

const StyledHeart = styled(Heart)`
  height: 20px;
  margin-right: 5px;
  path {
    fill: ${p => p.theme.lightFontColor};
  }
`

const StyledComment = styled(Comment)`
  height: 18px;
  margin-right: 5px;
  path {
    fill: ${p => p.theme.lightFontColor};
  }
`

const CommentButton = styled.button`
  appearance: none;
  line-height: 12px;
  font-size: 12px;
  color: ${p => p.theme.lightFontColor};
  border: 0;
  padding: 0;
  margin: 0;
`

class Bottom extends Component {
  render() {
    const { voteCount, answerCount, closed } = this.props;

    return (
      <Root>
        <Stat>
          <StyledHeart />
          <Text>{voteCount}</Text>
        </Stat>
        <Stat>
          <StyledComment />
          <Text>{answerCount}</Text>
        </Stat>
        <Time>vor 5 Minuten</Time>
        {!closed && <CommentButton>Kommentieren</CommentButton>}
      </Root>
    );
  }
}

export default Bottom;
