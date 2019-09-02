import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./custom.css"
import Footer from "./footer.js"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div class="background-main">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
