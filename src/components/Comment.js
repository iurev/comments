import React from 'react';
import styled from 'styled-components'
import Stars from './Stars'

const Root = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10px;
`

const Title = styled.div`
  color: ${p => p.theme.darkFontColor};
  font-size: 24px;
  margin-right: 10px;
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

const TitleAndStarsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 5px;
`

const Comment = ({ title, text, image, rating }) => (
  <Root>
    {image && <Image src={image} />}
    <TextWrapper>
      <TitleAndStarsWrapper>
        <Title>{title}</Title>
        <Stars count={rating} />
      </TitleAndStarsWrapper>
      <Text dangerouslySetInnerHTML={{
        __html: text
      }}>
      </Text>
    </TextWrapper>
  </Root>
)

export default Comment;
