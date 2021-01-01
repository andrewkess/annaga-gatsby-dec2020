import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"

//import Navigation from "./navigation.js"


import { Container, Col, Row, Image } from 'react-bootstrap'
import styles from './menu-button.module.css'
import MenuContainer from './menu-container.js'
import './hamburger.css'
import logo from  "../images/annaga-logo.png" // Tell webpack this JS file uses this image



const Header = ({ siteTitle }) => (
  <Headroom disableInlineStyles >









  <header>
  
  <div className={styles.navigationBar}>

<div>
<Link to="/">
<Image src={logo} className={styles.logoLink}  alt="Annaga"  />
</Link></div>




<div >
    <MenuContainer />
</div></div>


  </header>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
