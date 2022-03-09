import React from "react"

import { Carousel, Image } from 'react-bootstrap'
import styles2 from './hero-module.css'

import 'bootstrap/dist/css/bootstrap.min.css';


import logo from "../images/meditate.jpg" // Tell webpack this JS file uses this image
import logoTwo from "../images/gratitude.png" // Tell webpack this JS file uses this image
import logoThree from "../images/psalm.jpg" // Tell webpack this JS file uses this image










const Hero = () => (


    <Carousel fade={true} data-interval={false} indicators={false} className="preview"
    
    style={{
        height:
          '100vh' /* Fallback for browsers that do not support Custom Properties */,
        height: 'calc(var(--vh, 1vh) * 100)',
      }}
    
    >


        <Carousel.Item className="getFull">
            <a href="#">

                <Image src={logo} className="newFill" alt="LAW OF DESIRE" />



                <Carousel.Caption className="capp">
                    <div className="backFiller">

                        <h1>THE MINDFUL CHRISTIAN</h1>
                        <p>Embracing life with acceptance and curiosity.</p>
                    </div>
                </Carousel.Caption>
            </a>

        </Carousel.Item>



        <Carousel.Item className="getFull" >
            <Image src={logoTwo} className="newFill" alt="PENGUIN BLOOM" />

            <Carousel.Caption className="capp">
                <div className="backFiller">

                    <h1>GRATITUDE</h1>

                    <p className={styles2.fake}>Graceful comment on timely sociopolitical themes.</p>
                </div>
            </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item className="getFull">
            <Image src={logoThree} className="newFill" alt="NEVER ENDING STORY" />

            <Carousel.Caption className="capp">
                <div className="backFiller">
                    <h1 >PREACH THE PSALMS</h1>
                    <p>A spiritual journey about the power of imagination.</p>
                </div>
            </Carousel.Caption>

        </Carousel.Item>
    </Carousel>


)

export default Hero
