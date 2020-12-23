
import React from "react"
import styles2 from './hero-module.css'
import {  Image, Carousel } from 'react-bootstrap'


//import logo from  "../../../../static/ramy-keyframe.jpg" // Tell webpack this JS file uses this image
import logo from  "../images/brexit.jpg" // Tell webpack this JS file uses this image
import logoTwo from "../images/live.jpg" // Tell webpack this JS file uses this image
import logoThree from "../images/boots.jpg" // Tell webpack this JS file uses this image
import logoFour from  "../images/bear.jpg" // Tell webpack this JS file uses this image

//import Footer from "./footer"

const Projects = () => (
  <div>
  
  
      
      <div className="projectsTitle">Projects</div>
      
   
      
        <div
          style={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
          
        >
        
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
        <Carousel.Item className="projectFill">
<Image src={logo} className="projectFill"  alt="NEVER"  />
<Carousel.Caption className="cappProject">
<h1>Freiheit</h1>
<p>Juan Pablo Domenech</p>
</Carousel.Caption>
</Carousel.Item>


   


</a>

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
        <Carousel.Item className="projectFill">
<Image src={logoTwo} className="projectFill"  alt="NEVER"  />
<Carousel.Caption className="cappProject">
<h1>Bold efforts</h1>
<p>Juan Pablo Domenech</p>
</Carousel.Caption>
</Carousel.Item>
</a>

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
        <Carousel.Item className="projectFill">
<Image src={logoThree} className="projectFill"  alt="NEVER"  />
<Carousel.Caption className="cappProject">
<h1>Boots the house down</h1>
<p>Juan Pablo Domenech</p>
</Carousel.Caption>
</Carousel.Item>
</a>

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
        <Carousel.Item className="projectFill">
<Image src={logoFour} className="projectFill"  alt="NEVER"  />
<Carousel.Caption className="cappProject">
<h1>Eagle Salmon Bear</h1>
<p>Juan Pablo Domenech</p>
</Carousel.Caption>
</Carousel.Item>
</a>
   
        
        </div>
    
    

  </div>
)

export default Projects
