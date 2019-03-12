import React from 'react'
import styled from 'styled-components'
import Item from '../Item'


const Root = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`

const ListView = ({ feedbacks }) => (
  <Root>
    {feedbacks.map(({ author, bottom, comment }, i) => (<Item
      key={i}
      author={author}
      bottom={bottom}
      comment={comment}
    />))}
  </Root>
)

export default ListView
