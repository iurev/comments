import React, { Component } from 'react';
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
  overflow: hidden;
`

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(1);
  transition: transform ease-in-out 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Text = styled.div`
  font-size: 12px;
  line-height: 12px;
  color: ${p => p.theme.mediumFontColor};

  &:first-child {
    margin-bottom: 2px;
  }
`

class Author extends Component {
  render() {
    const { name, avatar } = this.props.author
    return (
      <Root>
        <AvatarWrapper>
          <Avatar src={avatar} alt={name} />
        </AvatarWrapper>
        <TextWrapper>
          <Text>{name}</Text>
          <Text>von 12 Minutes</Text>
        </TextWrapper>
      </Root>
    );
  }
}

export default Author;
