import React from 'react'
import styled from 'styled-components'
import { UserCircle } from 'styled-icons/boxicons-solid/UserCircle'


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

const DefaultAvatar = styled(UserCircle)`
  width: 100%;
  height: 100%;
  transform: scale(1);
  transition: transform ease-in-out 0.2s;

  &:hover {
    transform: scale(1.2);
  }

  path {
    fill: ${(p) => p.theme.lightFontColor};
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Text = styled.div`
  font-size: 12px;
  line-height: 12px;
  color: ${(p) => p.theme.mediumFontColor};

  &:first-child {
    margin-bottom: 2px;
  }
`

const Author = ({ name, avatar, time }) => (
  <Root>
    <AvatarWrapper>
      {
        avatar
        ? <Avatar src={avatar} alt={name} />
        : <DefaultAvatar />
      }
    </AvatarWrapper>
    <TextWrapper>
      <Text>{name}</Text>
      <Text>vor {time}</Text>
    </TextWrapper>
  </Root>
)

export default Author
