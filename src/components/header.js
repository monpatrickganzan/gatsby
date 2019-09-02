import { Link } from "gatsby"
import React from "react"
import logo from "../images/fligno_logo.png"
import Menu from "./menu"

const Header = () => (
  <header class="header-main-custom">
    <div class="header-custom">
      <Link to="/">
        <img src={logo} alt="Fligno Documentation" />
      </Link>
      <Menu/>
    </div>  
  </header>
)

export default Header
