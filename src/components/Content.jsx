import React from 'react'
import styled from 'styled-components'

import logo from '../assets/astro-logo.png'
import { Routes } from './Routes'


const StyledContentContainer = styled.div`
  margin-left: 200px;

  @media (max-width: 899px) {
    width: 100%;
    margin-left: 0;
  }
`

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.background};
  height: 100px; 
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.black};
  font-size: 25px;
  z-index: 99;


  img {
    width: 30px;
    filter: grayscale(100%);
    opacity: 0.5;
  }

  span {
    margin-left: 8px;
    font-weight: 600;
    font-size: 18px;
    opacity: 0.4;
  }
`

export function Content() {
  return (
    <StyledContentContainer>
      <Routes />
      <StyledFooter>
        <img src={logo} alt="lunar-eclipse-logo"/>
        <span>Astrokitties</span>
      </StyledFooter>
    </StyledContentContainer>
  )
}
