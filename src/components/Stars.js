import React from 'react';
import styled from 'styled-components'
import { Star } from 'styled-icons/boxicons-solid/Star'

const Root = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledStar = styled(Star)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  path {
    fill: ${p => p.theme.green}
  }
`

const Stars = ({ count }) => (
  <Root>
    {Array(count).fill().map((_, i) => <StyledStar key={i} />)}
  </Root>
)

export default Stars;
