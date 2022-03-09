import React from "react"

import { Carousel, Image } from 'react-bootstrap'
//import styles2 from './hero-module.css'

import 'bootstrap/dist/css/bootstrap.min.css';


import logoTwo from "../images/king-keyframe.jpeg" // Tell webpack this JS file uses this image


const ProjectVideo = () => (

    <Carousel fade={true} data-interval={false} indicators={false} controls={false} className="previewProject">
        <Carousel.Item className="getFullProject" >
            <Image src={logoTwo} className="newFillProject" alt="PENGUIN BLOOM" />
        </Carousel.Item>
    </Carousel>

)

export default ProjectVideo
