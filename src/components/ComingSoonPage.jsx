import React from 'react'
import styled from 'styled-components'
import { CirclesToRhombusesSpinner } from 'react-epic-spinners'

const StyledPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  text-align: center;
  opacity: 0.3;

  h1 {
    font-size: 60px;
    font-weight: 700;
    color: ${props => props.theme.black};
  }
`

export function ComingSoonPage() {
  return (
    <StyledPageContainer>
      <div>
        <h1>COMING SOON</h1>
        <CirclesToRhombusesSpinner color="#444444" size={20} style={{ width: '100%' }} />
      </div>
    </StyledPageContainer>
  )
}

