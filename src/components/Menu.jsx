import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faChartBar, faChartLine, faRss, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faReddit, faTelegramPlane, faTwitter } from '@fortawesome/free-brands-svg-icons'
import pancakeSvg from '../assets/pancake.svg'
import bscscan from '../assets/bscscan-logo.svg'
import { Link } from 'react-router-dom'

const StyledMenuContainer = styled.div`
  position: fixed;
  top: 60px;
  width: 200px;
  background-color: ${props => props.theme.background};
  left: 0;
  height: calc(100vh - 60px);
  min-height: 740px;
  padding: 24px;
  box-sizing: border-box;
  border-right: 1px solid ${props => props.theme.border};
  z-index: 100;

  @media (max-width: 899px) {
      padding: 42px;
    }

  a {
    text-decoration: none;
    color: ${props => props.theme.black};
    font-size: 10px;
  }

  @media (max-width: 899px) {
    width: 100%;
    left: ${(props) => props.menuOpen ? '0' : '-100vw'};
    transition-duration: 0.4s;
    background: #fafafa;
      min-height: unset;
    }
`

const StyledMenuBlock = styled.div`
  .top {
    margin-top: 0;
  }
`

const StyledMenuTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #888888;
  margin-top: 20px;
  height: 20px;
`
const StyledMenuItems = styled.div`
  height: 30px;
  line-height: 30px;
  letter-spacing: 0;
  font-weight: 500;
  @media (max-width: 899px) {
      margin-bottom: 8px;
    }
  span {
    font-size: 12px;
    padding-left: 8px;
    transition: 0.2s;
    @media (max-width: 899px) {
      font-size: 16px;
    }
  }
  svg {
    transition: 0.2s;
  }
  &:hover {
    svg, img {
      transform: scale(1.2);
      color: ${props => props.theme.black};
    }
    span {
      padding-left: 11px;
      color: ${props => props.theme.black};
    }
  }

img {
  width: 13px;
  height: 13px;
  position: relative;
  top: -2px;
  transition: 0.2s;
}
`
const StyledButtonsCont = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: auto;
  overflow: hidden;
  min-height: 100px;
  left: 0px;
  padding: 15px;
  padding-bottom: 146px;

  @media (max-width: 899px) {
    padding-bottom: 30px;
  }
`
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  float: left;
  margin-top: 15px;
  background: ${props => props.theme.background};
  border-radius: 5px;
  border: none;

  transition-duration: 0.2s;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    transition-duration: 0.2s;
  }
`

export function Menu({ menuOpen, onclick }) {
  return (
    <StyledMenuContainer menuOpen={menuOpen}>
      <StyledMenuBlock>
        <StyledMenuTitle className="top">Website navigation</StyledMenuTitle>
        <StyledMenuItems onClick={onclick}>
          <Link to="/">
            <FontAwesomeIcon icon={faTachometerAlt}/>
            <span>Dashboard</span>
          </Link>
        </StyledMenuItems>
        <StyledMenuItems onClick={onclick}>
          <Link to="/press-releases/">
            <FontAwesomeIcon icon={faRss}/>
            <span>Releases</span>
          </Link>
        </StyledMenuItems>
        <StyledMenuItems onClick={onclick}>
          <Link to="/contests/">
            <FontAwesomeIcon icon={faTrophy}/>
            <span>Contests</span>
          </Link>
        </StyledMenuItems>
      </StyledMenuBlock>
      <StyledMenuBlock>
        <StyledMenuTitle>Important links</StyledMenuTitle>
        <StyledMenuItems>
          <a href="#">
            <img src={pancakeSvg} alt="Pancakeswap" />
            <span>Buy on Pancakeswap</span>
          </a>
        </StyledMenuItems>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faChartLine}/>
            <span>Chart</span>
          </a>
        </StyledMenuItems>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faChartBar}/>
            <span>BSC Scan</span>
          </a>
        </StyledMenuItems>
      </StyledMenuBlock>
      <StyledMenuBlock>
        <StyledMenuTitle>Socials</StyledMenuTitle>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faTelegramPlane}/>
            <span>Telegram</span>
          </a>
        </StyledMenuItems>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter}/>
            <span>Twitter</span>
          </a>
        </StyledMenuItems>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faReddit}/>
            <span>Reddit</span>
          </a>
        </StyledMenuItems>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faDiscord}/>
            <span>Discord</span>
          </a>
        </StyledMenuItems>
      </StyledMenuBlock>
      <StyledButtonsCont>
        <a href="#">
          <StyledButton>
            <img src={bscscan} alt="bscscan-logo"/>
          </StyledButton>
        </a>
      </StyledButtonsCont>
    </StyledMenuContainer>
  )
}