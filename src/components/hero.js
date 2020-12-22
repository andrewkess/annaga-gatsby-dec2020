import React from "react"

import { Carousel, Image } from 'react-bootstrap'
import styles2 from './hero-module.css'

import 'bootstrap/dist/css/bootstrap.min.css';


import logo from  "../images/ramy-keyframe.jpg" // Tell webpack this JS file uses this image
import logoTwo from "../images/king-keyframe.jpeg" // Tell webpack this JS file uses this image
import logoThree from "../images/minari-keyframe.jpeg" // Tell webpack this JS file uses this image

require('typeface-mukta')
require('typeface-bebas-neue')
require('typeface-rubik')








const Hero = () => (


<Carousel fade={true}  data-interval={false} indicators={false} className="preview">


<Carousel.Item className="getFull">
<a href="#">    

<Image src={logo} className="newFill" alt="LAW OF DESIRE" />



<Carousel.Caption className="capp">
<div className="backFiller">

 <h1>LAW OF DESIRE</h1>
 <p>Fun that's as explosively bright and provocative as ever.</p>
</div>
</Carousel.Caption>
</a>

</Carousel.Item>



<Carousel.Item className="getFull" >
<Image src={logoTwo} className="newFill"  alt="PENGUIN BLOOM"  />

<Carousel.Caption className="capp">
<div className="backFiller">

<h1>PENGUIN BLOOM</h1>

<p className={styles2.fake}>Graceful comment on timely sociopolitical themes.</p>
</div>
</Carousel.Caption>
</Carousel.Item>


<Carousel.Item className="getFull">
<Image src={logoThree} className="newFill"  alt="NEVER ENDING STORY"  />

<Carousel.Caption className="capp">
    <div className="backFiller">
<h1 >NEVER ENDING STORY</h1>
<p>A magical journey about the power of imagination.</p>
</div>
</Carousel.Caption>

</Carousel.Item>
</Carousel>


)

export default Hero
