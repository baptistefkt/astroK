import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Hero } from './Hero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faRecycle, faFire, faMoneyBill, faUser, faCheck, faHourglass } from '@fortawesome/free-solid-svg-icons'
import { StyledButton } from '../style/commonStyled'
import locker from '../assets/locker.png'
import coin from '../assets/coin.png'
import community from '../assets/community.png'
import liquidityPool from '../assets/liquiditypool.png'
import ship from '../assets/space-ship.png'
import rocket from '../assets/rocket.png'

const StyledDashboard = styled.div`
  background: rgb(222,168,218);
  background: linear-gradient(135deg, rgba(161,209,224,0.2) 20%, rgba(222,168,218,0.2) 80%);
`

const StyledGrid = styled.div`
  padding: 20px 20px 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (max-width: 899px) {
    display: flex;
    flex-direction: column;
  }

  > div, article {
    background: ${props => props.theme.background};
    border-radius: 16px;
    z-index: 80;
    box-shadow: 0 31px 35px rgb(0 0 0 / 10%);
  }
`

const StyledArticle = styled.article`
  min-height: 200px;
  max-height: 591px;
  border-radius: 16px;
  padding: 24px;

  @media (max-width: 899px) {
    max-height: unset;
  }

  h4 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
    color: ${props => props.theme.black};
    line-height: 1.2;

    small {
      color: ${props => props.theme.black};
      font-size: 12px;
      font-weight: 400;
      padding-left: 10px;
      letter-spacing: 1px;
    }
  }

  p {
    color: ${props => props.theme.black};
    font-size: 14px;
    margin-top: 30px;
  }

  .flex, .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
  }

  .flex {
    margin-bottom: 13px;
  }

  .iconContainer {
    width: 22px;
    height: 22px;
    border-radius: 5px;
    background: rgba(161,209,224, 0.2);
    border: 2px solid rgb(161,209,224);
    text-align: center;
    float: left;
    font-size: 12px;
    line-height: 18px;
    margin-right: 10px;
    color: ${props => props.theme.black};
  }

  .left {
    color: ${props => props.theme.black};
    font-weight: 600;
  }
  .right {
    color: ${props => props.theme.black};
    font-size: 12px;
  }

  .bolder {
    font-weight: 700;
    color: ${props => props.theme.black};
    display: block;
  }
`

const StyledBigArticle = styled(StyledArticle)`
  grid-column: 1/3;
  grid-row: 2/4;
  max-height: unset;

  .flexContent {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
   
    @media (max-width: 899px) {
      display: flex;
      flex-direction: column;
    }
  }

  .items {
    padding: 20px;
    text-align: center;
    border-radius: 16px;
    /* margin: 0 15px; */
    border: 1px solid ${props => props.theme.border};

    @media (max-width: 899px) {
      min-height: unset;
      margin: 0;
      margin-bottom: 15px;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
    color: ${props => props.theme.black};
    line-height: 1.2;
  }

  img {
    width: 120px;
    height: 120px;
  }
`

const StyledRoadMap = styled(StyledArticle)`
  grid-column: 3/4;
  grid-row: 2/4;

  .row {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 16px;
  }

  .icon {
    font-size: 9px;
    line-height: 14px;
    width: 17px;
    height: 17px;
    border-radius: 5px;
    text-align: center;
    color: ${props => props.theme.black};
    margin-right: 8px;
  }

  .complete {
    background: rgba(71, 171, 93, 0.4);
    border: 2px solid rgb(71, 171, 93);
  }

  .pending {
    background: rgba(238, 141, 43, 0.4);
    border: 2px solid rgb(238, 141, 43);
  }

  .notComplete {
    background: rgba(161,209,224, 0.2);
    border: 2px solid rgb(161,209,224);
  }

  .text {
    color: ${props => props.theme.black};
    font-size: 12px;
    font-weight: 600;
    
    span {
      margin-left: 4px;
      color: rgb(71, 171, 93);
      font-size: 80%;
    }

    .orange {
      color: rgb(238, 141, 43);
    }
  }
`

const fly = keyframes`
	98.001%, 0% {
    display: block;
		transform: translateX(-200%) translateY(100vh) rotateZ(0deg)
	}

	15% {
		transform: translateX(100vw) translateY(-100%) rotateZ(180deg)
	}

	15.001%, 18% {
		transform: translateX(100vw) translateY(-30%) rotateZ(0deg)
	}

	40% {
		transform: translateX(-200%) translateY(3vh) rotateZ(-180deg)
	}

	40.001%, 43% {
		transform: translateX(-200%) translateY(-100%) rotateZ(-180deg)
	}

	65% {
		transform: translateX(100vw) translateY(50vh) rotateZ(0deg)
	}

	65.001%, 68% {
		transform: translateX(20vw) translateY(-200%) rotateZ(180deg)
	}

	95% {
		transform: translateX(10vw) translateY(100vh) rotateZ(0deg)
	}
`

const StyledRocket = styled.img`
  width: 150px;
  height: auto;
  transform: translateX(-120%) translateY(-120%) rotateZ(0);
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 60;
  animation: ${fly} 50s linear infinite;
  @media (max-width: 899px) {
    width: 100px;
  }

`
const StyledShip = styled.img`
  width: 120px;
  height: auto;
  transform: translateX(-120%) translateY(-120%) rotateZ(0);
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 60;
  animation: ${fly} 80s linear infinite;
  animation-direction: reverse;
`

export function Dashboard() {
  return (
    <div style={{backgroundColor: 'white'}}>
      <StyledDashboard>
      <Hero />
      <StyledGrid>
        <StyledArticle>
          <h4>
            About Astrokitties
            <small>Brief description</small>
          </h4>
          <p>We are tired of all the scams that happen among tokens. So we decided to take matters into our own hands. That's why we created Astrokitties, with the intention of being 100% safe from rug pulls. How? Because we, the devs have no rugs to pull. This token is for you, let's moon.</p>
        </StyledArticle>
        <StyledArticle>
          <h4>
            Tokenomics
            <small>Update daily</small>
          </h4>
          <div className="content">
            <div className="flex">
              <div className="left">
                <div className="iconContainer">
                  <FontAwesomeIcon icon={faCoins} />
                </div>
                <div>Max Supply</div>
              </div>
              <div className="right">1,000,000,000,000,000</div>
            </div>
            <div className="flex">
              <div className="left">
                <div className="iconContainer">
                  <FontAwesomeIcon icon={faRecycle} />
                </div>
                <div>Circulating</div>
              </div>
              <div className="right">720,093,318,120,919</div>
            </div>
            <div className="flex">
              <div className="left">
                <div className="iconContainer">
                  <FontAwesomeIcon icon={faFire} />
                </div>
                <div>Burned</div>
              </div>
              <div className="right">279,906,681,879,081</div>
            </div>
            <div className="flex">
              <div className="left">
                <div className="iconContainer">
                  <FontAwesomeIcon icon={faMoneyBill} />
                </div>
                <div>Marketcap</div>
              </div>
              <div className="right">$7,132,960</div>
            </div>
            <div className="flex">
              <div className="left">
                <div className="iconContainer">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div>Holders</div>
              </div>
              <div className="right">4,343</div>
            </div>
          </div>
        </StyledArticle>
        <StyledArticle>
          <h4>
            Audit by solidity.finance
            <small>100% Passed</small>
          </h4>
          <p>
            <i>
              "Astrokitties is a new competitor in the meme-coin space that has gained a large community following in a short timeframe.
              <br/><br/>
              No security issues were identified in our analysis."
            </i>
            <span className="bolder">- solidity.finance</span>
          </p>
          <a href="#">
            <StyledButton>
              Read full analysis
            </StyledButton>
          </a>
        </StyledArticle>
        <StyledBigArticle>
          <h4>
            Points of interest
            <small>Reasons why to own Astrokitties</small>
          </h4>
          <div className="flexContent">
            <div className="items one">
              <img src={locker} alt=""/>
              <h3>Completely Secured</h3>
              <p>Audited smart contract, no big devs holdings (all burnt from start), Liquidity Pool locked for 5 years!</p>
            </div>
            <div className="items two">
              <img src={coin} alt=""/>
              <h3>Rewarding for Holders</h3>
              <p>Keep holding your Astrokitties tokens, and you will earn more. For each transaction, a 3% fee is sent back to our beloved holders.</p>
            </div>
            <div className="items three">
              <img src={community} alt=""/>
              <h3>Inventive Construction</h3>
              <p>With a combination of burning, automatic LP filling and rewarding of holders, Astrokitties is set to rise!</p>
            </div>
            <div className="items three">
              <img src={liquidityPool} alt=""/>
              <h3>Inventive Construction</h3>
              <p>With a combination of burning, automatic LP filling and rewarding of holders, Astrokitties is set to rise!</p>
            </div>
          </div>
        </StyledBigArticle>
        <StyledRoadMap>
          <h4>
            Roadmap
            <small>Trace our work</small>
          </h4>
          <div className="row">
            <div className="icon complete">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="text">Presale live on DXSales <span>Completed</span></div>
          </div>
          <div className="row">
            <div className="icon complete">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="text">Presale sold out <span>Completed</span></div>
          </div>
          <div className="row">
            <div className="icon complete">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="text">Listing on PANCAKESWAP <span>Completed</span></div>
          </div>
          <div className="row">
            <div className="icon complete">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="text">Marketing on Poocoin <span>Live now</span></div>
          </div>
          <div className="row">
            <div className="icon complete">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="text">Reach 1000 holders <span>Completed</span></div>
          </div>
          <div className="row">
            <div className="icon complete">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="text">Audit Astrokitties Smart Contract <span>Completed</span></div>
          </div>
          <div className="row">
            <div className="icon complete">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="text">Reach 3000 holders <span>Completed</span></div>
          </div>
          <div className="row">
            <div className="icon pending">
              <FontAwesomeIcon icon={faHourglass} />
            </div>
            <div className="text">Launch holder contest ($1000) <span className="orange">Contest live</span></div>
          </div>
          <div className="row">
            <div className="icon pending">
              <FontAwesomeIcon icon={faHourglass} />
            </div>
            <div className="text">Litepaper released <span className="orange">In progress</span></div>
          </div>
          <div className="row">
            <div className="icon notComplete" />
            <div className="text">Whitebit listing</div>
          </div>
          <div className="row">
            <div className="icon notComplete" />
            <div className="text">Reach 5000 holders</div>
          </div>
          <div className="row">
            <div className="icon notComplete" />
            <div className="text">Launch second holder contest ($2000)</div>
          </div>
          <div className="row">
            <div className="icon notComplete" />
            <div className="text">Whitepaper released</div>
          </div>
          <div className="row">
            <div className="icon notComplete" />
            <div className="text">CoinmarketCap & Coingecko Listing</div>
          </div>
          <div className="row">
            <div className="icon notComplete" />
            <div className="text">Listing on Exchange</div>
          </div>
        </StyledRoadMap>
        <StyledRocket src={rocket} />
        <StyledShip src={ship} />
      </StyledGrid>
      </StyledDashboard>
    </div>
  )
}

