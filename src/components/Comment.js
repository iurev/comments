import React from 'react';
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
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

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  margin-right: 10px;
  width: 140px;
`

const Comment = ({ title, text, image }) => (
  <Root>
    {image && <Image src={image} />}
    <TextWrapper>
      <Title>{title}</Title>
      <Text dangerouslySetInnerHTML={{
        __html: text
      }}>
      </Text>
    </TextWrapper>
  </Root>
)

export default Comment;
