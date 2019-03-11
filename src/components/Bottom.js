import React from 'react';
import styled from 'styled-components'
import { Heart } from 'styled-icons/boxicons-solid/Heart'
import { Comment } from 'styled-icons/fa-solid/Comment'
import Ink from 'react-ink'

const Root = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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
  position: relative;
  appearance: none;
  line-height: 20px;
  font-size: 12px;
  color: ${p => p.theme.lightFontColor};
  border: 0;
  padding: 0 5px;
  margin: 0;
  user-select: none;
  cursor: pointer;
  transition: color ease-out 0.3s;
  outline: none;

  &:hover, &:active {
    color: ${p => p.theme.mediumFontColor};
  }
`

const Bottom = ({ voteCount, answerCount, closed, time }) => (
  <Root>
    <Stat>
      <StyledHeart />
      <Text>{voteCount}</Text>
    </Stat>
    <Stat>
      <StyledComment />
      <Text>{answerCount}</Text>
    </Stat>
    <Time>vor {time}</Time>
    {!closed && <CommentButton><Ink />Kommentieren</CommentButton>}
  </Root>
);

export default Bottom;
