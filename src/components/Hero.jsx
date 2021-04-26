import React from 'react'
import styled, { keyframes } from 'styled-components'
import { StyledNotVisibleXS } from '../style/commonStyled'
import moon from '../assets/moon.svg'


const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledHero = styled.header`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme.black};
  position: relative;
  margin-top: 60px;

  h1 {
    font-size: 70px;
    font-weight: 800;
    letter-spacing: -1px;
    line-height: 40px;
    z-index: 80;
    @media (max-width: 1024px) {
      line-height: 65px;
      font-size: 50px;
    }
    span {
      display: block;
      font-size: 25px;
      font-weight: 400;
      letter-spacing: normal;
      margin-top: 16px;
    }
  }
`

const StyledMoonCont = styled.span`
  position: absolute;
  width: 100%;
  height: auto;
  text-align: left;
  z-index: 50;

  img {
    animation: ${spin} 200s linear infinite;
    width: 50vw;
    height: auto;
    margin: 50px;

    @media (max-width: 899px) {
      margin: 10px;
      width: 80vw;
    }
  }
`



export function Hero() {
  // const isMobile = window.screen.width < 900;
  return (
    <>
      <StyledHero>
        <StyledMoonCont>
          <img src={moon} alt="" />
        </StyledMoonCont>
        <h1>
          {/* <img src={logo} alt="astrokitties-logo" /> */}
          Welcome to Astrokitties
          <StyledNotVisibleXS>
            <span>Truly a safe token, let's moon.</span>
          </StyledNotVisibleXS>
        </h1>
      </StyledHero>
      
    </>
  )
}