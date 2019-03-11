import React from 'react';
import styled from 'styled-components'

const Root = styled.div`
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

const Comment = ({ title, text }) => (
  <Root>
    <Title>{title}</Title>
    <Text dangerouslySetInnerHTML={{
      __html: text
    }}>
    </Text>
  </Root>
)

export default Comment;
