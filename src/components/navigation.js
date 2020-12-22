import React from 'react'
//import styles from './navigation.module.css'




import { Container, Col, Row, Image } from 'react-bootstrap'
import {Link} from 'gatsby'
import styles from './menu-button.module.css'
import MenuContainer from './menu-container.js'

import './hamburger.css'

import logo from  "../images/annaga-logo.png" // Tell webpack this JS file uses this image


export default () => (



<Container className={styles.navigationBar} fluid >
<Row>
 

    <Col className={styles.navbarMenu}>
<Link to="/">
<div><Image src={logo} className={styles.logoLink}  alt="Annaga"  /></div>

</Link>
</Col>
    
<Col className={styles.navMenuContainer}>
    <MenuContainer />
</Col>
</Row>
</Container>


)
