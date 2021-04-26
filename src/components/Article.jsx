import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledArticleContainer = styled.div`
  border-radius: 16px;
  padding: 20px;
  min-height: 370px;
  height: 100%;
  background: ${props => props.theme.background};
  box-shadow: 0 31px 35px rgb(0 0 0 / 10%);

  img {
    width: 100%;
    border: 2px solid gray;
    border-radius: 6px;
    margin-bottom: 20px;
  }

  h4 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
    color: ${props => props.theme.black};
    line-height: 1.2;
  }

  p {
    color: ${props => props.theme.black};
    font-size: 14px;
    margin-top: 30px;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.black};
    font-size: 12px;
    font-weight: 600;
    transition-duration: 0.2s;

    &:hover {
      text-decoration: none;
      transition-duration: 0.2s;
      color: ${props => props.theme.black};
    }
  }
`

export function Article({ imgSrc, title, description, link }) {
  return (
    <StyledArticleContainer>
      <img src={imgSrc} alt="article header"/>
      <h4>{title}</h4>
      <p>{description}</p>
      <Link to={link}>Read more &gt;&gt;</Link>
    </StyledArticleContainer>
  )
}
