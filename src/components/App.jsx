import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { theme } from '../style/commonStyled'
import { Header } from './Header'
import { Menu } from './Menu'
import { Content } from './Content'
import '../style/App.css';
import { Loader } from './Loader'

const StyledAppContainer = styled.div`
  background: rgb(161,209,224);
  background: linear-gradient(135deg, rgba(161,209,224,0.3) 20%, rgba(222,168,218,0.3) 80%);
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;

  small {
    color: rgb(161,209,224);
  }
`

const StyledLoaderContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    overflow-x: hidden;
  }
`

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer);
  }, [setLoading])

  return (
    <ThemeProvider theme={theme}>
      <StyledAppContainer>
        <Router>
          <GlobalStyle />
          {loading ? (
            <StyledLoaderContainer>
              <Loader />
            </StyledLoaderContainer>
          ) : (
            <>
              <Header onclick={() => setMenuOpen(!menuOpen)}/>
              <Menu menuOpen={menuOpen} onclick={() => setMenuOpen(false)}/>
              <Content />
            </>
          )}
        </Router>
      </StyledAppContainer>
    </ThemeProvider>
  );
}

export default App;
