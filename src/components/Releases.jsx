import React from 'react'
import styled from 'styled-components'
import { Article } from './Article'
import contractImg from '../assets/contract-token-initiated.jpg'
import crypto from '../assets/crypto.jpg'


const StyledReleasePage = styled.div`
  margin-top: 60px;
  padding: 20px;
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  padding-bottom: 100px;
  padding-top: 20px;

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`

export function Releases() {
  return (
    <StyledReleasePage>
      <h1>Press releases</h1>
      <StyledGrid>
        <Article 
          title="Astrokitties Token Contract Initiated"
          description="Today we initiated the development of the unique Astrokitties Token Contract. A carefully planned out process of an experienced team of Crypto-developers."
          link="/eclipse-token-contract-initiated/"
          imgSrc={contractImg}
        />
        <Article 
          title="Lorem Ipsum"
          description="Today we initiated the development of the unique Astrokitties Token Contract. A carefully planned out process of an experienced team of Crypto-developers."
          link="/lorem-ipsum/"
          imgSrc={crypto}
        />
      </StyledGrid> 
    </StyledReleasePage>
  )
}
