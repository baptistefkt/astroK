import styled from 'styled-components'

export const theme = {
  background: '#ffffff',
  bgGrey: '#f8fafd',
  primary: '#33b58f90',
  border: '#eaebee',
  black: '#444444',
  blackLight: '#44444480',
}

export const StyledNotVisibleXS = styled.div`
  @media (max-width: 899px) {
    display: none;
  }
`

export const StyledVisibleXS = styled.div`
  @media (min-width: 900px) {
    display: none;
  }
`

export const StyledButton = styled.button`
    height: 40px;
    min-width: 100px;
    border-radius: 12px;
    background: rgb(222,168,218);
    background: linear-gradient(90deg, rgba(222,168,218,1) 20%, rgba(161,209,224,1) 80%);
    color: ${props => props.theme.background};
    border: none;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
    padding-left: 16px;
    padding-right: 20px;
    transition-duration: 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
`
