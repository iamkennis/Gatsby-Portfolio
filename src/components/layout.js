import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/globalStyles"
import { theme as styledTheme } from "../styles/theme"

import Header from "./Header/index"
import Footer from "./Footer/index"
import { Container } from "./container"

const Layout = ({ children }) => {
  
  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyle />
      <Header/>
      <Container>
        <main>{children}</main>
        </Container>
       <Footer/>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
