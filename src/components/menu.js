import React, { Component } from "react";
import "./menu.css";
import { Link } from 'gatsby'
import { Container, Col, Row } from 'react-bootstrap'
//import styles from './menu-button.module.css'

//import { IconContext } from "react-icons";
import { FaVimeoV } from 'react-icons/fa'

import { TiSocialInstagram } from 'react-icons/ti'

import { VscTwitter } from 'react-icons/vsc'




class Menu extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (

      <Container className="settingRight"><Row id="flyoutMenu"

        className={visibility}><Col className="menu-left-column">
          <div className="mainCont">


            <div className="alignRi">
              <button className="hamburger hamburger--slider is-active" type="button" onMouseDown={this.props.handleMouseDown} >
                <span className="hamburger-box ">
                  <span className="hamburger-inner"></span>
                </span>
              </button></div>

            <div className="linksCont">
              <div className="menuContainer">
                <h2><a href="#">About</a></h2>
              </div>

              <div className="menuContainer">
                <h2><Link to="/instructors/">Projects</Link></h2>
              </div>

              <div className="menuContainer">
                <h2><Link to="/instructors/">Jobs</Link></h2>
              </div>

              <div className="menuContainer">
                <h2><Link to="/instructors/">Contact</Link></h2>
              </div>
            </div>

            <Container fluid className="spreadApart2">
              <Row>
                <Col className="socialIconsMenu"><a className="footerOverMenu" href="http://www.instagram.com"><TiSocialInstagram className="socIcon" /></a></Col>
                <Col className="socialIconsMenu"><a className="footerOverMenu" href="http://www.twitter.com"><VscTwitter className="socIcon" /></a></Col>
                <Col className="socialIconsMenu"><a className="footerOverMenu" href="http://www.vimeo.com"><FaVimeoV className="socIcon" /></a></Col>
              </Row>
            </Container>




          </div>

        </Col>


      </Row>



      </Container>


    );
  }
}

export default Menu;
