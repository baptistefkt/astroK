import React from 'react'
import styled, { keyframes } from 'styled-components'
import ship from '../assets/space-ship.png'
import shadow from '../assets/test.svg'

const float = keyframes`
  50% {
    transform: translate(0, 20px);
  }
`

const shrink = keyframes`
  0% {
    transform: scale(1.5);

  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
  }
`

const StyledImg = styled.img`
  width: 300px;
  animation: ${float} 3s ease-out infinite;
`

const StyledShadow = styled.div`
  animation: ${shrink} 3s ease-out infinite;
  width: 80px;
  height: 12px;
  border-radius: 50%;
  background-color: #82acb9;
  opacity: 0.5;
  position: relative;
  left: 135px;
  top: -10px;
`

export function Loader() {
  return (
    <div>
      <StyledImg src={ship} />
      <StyledShadow />
    </div>
  )
}


