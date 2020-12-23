
import React from "react"
import styles2 from './hero-module.css'
import {Container,Row, Col,  Image, Carousel } from 'react-bootstrap'


//import logo from  "../../../../static/ramy-keyframe.jpg" // Tell webpack this JS file uses this image
import logo from  "../images/brexit.jpg" // Tell webpack this JS file uses this image
import logoTwo from "../images/live.jpg" // Tell webpack this JS file uses this image
import logoThree from "../images/boots.jpg" // Tell webpack this JS file uses this image
import logoFour from  "../images/bear.jpg" // Tell webpack this JS file uses this image

//import Footer from "./footer"

const Projects = () => (

  <div>
      
      <div className="projectsTitle">Latest Projects</div>
      
   
   
   <Container fluid style={{ backgroundColor: `#343434`, }}>
  <Row >
    <Col lg={true}>

  <a
    href="#"
    target="_blank"
    rel="noreferrer noopener"
    style={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 0,
      py: [0, 0],
      color: `white`,
      background: `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
        <Carousel.Item className="project">
<Image src={logo} className="projectFill"  alt="NEVER"  />
<Carousel.Caption className="cappProject">
<h1>Freiheit</h1>
<p>Juan Pablo Domenech</p>
</Carousel.Caption>
</Carousel.Item>


   


</a>

   </Col>
    <Col lg={true}>
   <a
    href="#"
    target="_blank"
    rel="noreferrer noopener"
    style={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 0,
      py: [0, 0],
      color: `white`,
      background: `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
        <Carousel.Item className="project">
<Image src={logoTwo} className="projectFill"  alt="NEVER"  />
<Carousel.Caption className="cappProject">
<h1>Bold efforts</h1>
<p>Juan Pablo Domenech</p>
</Carousel.Caption>
</Carousel.Item>
</a>
    </Col>
    
  </Row>
  <Row>
  <Col sm>
       <a
    href="#"
    target="_blank"
    rel="noreferrer noopener"
    style={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 0,
      py: [0, 0],
      color: `white`,
      background: `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
        <Carousel.Item className="project">
<Image src={logoThree} className="projectFill"  alt="NEVER"  />
<Carousel.Caption className="cappProject">
<h1>Boots the house down</h1>
<p>Juan Pablo Domenech</p>
</Carousel.Caption>
</Carousel.Item>
</a></Col>
   <Col sm>
       <a
    href="#"
    target="_blank"
    rel="noreferrer noopener"
    style={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 0,
      py: [0, 0],
      color: `white`,
      background: `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
        <Carousel.Item className="project">
<Image src={logoFour} className="projectFill"  alt="NEVER"  />
<Carousel.Caption className="cappProject">
<h1>Eagle Salmon Bear</h1>
<p>Juan Pablo Domenech</p>
</Carousel.Caption>
</Carousel.Item>
</a></Col>
  </Row>
</Container>
   
   
      
      
    </div>
    

)

export default Projects
