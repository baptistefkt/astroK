import React from 'react'
import styled from 'styled-components'


const StyledPageContainer = styled.div`
  padding-top: 40px;
`
const StyledArticleContainer = styled.article`
  border-radius: 16px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 31px 35px rgb(0 0 0 / 10%);
  min-height: 370px;
  height: 100%;
  margin: 60px 20px 200px;
  
  h1 {
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
    color: ${props => props.theme.black};
  }

  span {
    display: block;
    margin: 0;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.theme.black};
    line-height: 1.2;
  }

  p {
    color: ${props => props.theme.black};
    font-size: 14px;
    margin-top: 30px;
    white-space: pre-line
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${props => props.theme.black};
    font-size: 12px;
    font-weight: 600;
    transition-duration: 0.2s;

    &:hover {
      transition-duration: 0.2s;
      color: ${props => props.theme.black};
    }
  }
`

export function ArticlePage({ title, date, paragraph }) {
  return (
    <StyledPageContainer>
      <StyledArticleContainer>
        <header>
          <h1>{title}</h1>
        </header>
        <span>{date}</span>
        {paragraph.map((p => <p key={p}>{p}</p>))}
      </StyledArticleContainer>
    </StyledPageContainer>
  )
}
