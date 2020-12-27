import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import {Container, Row, Col} from "react-bootstrap"
import ProjectVideo from '../components/projectVideo'
import styles2 from '../components/hero-module.css'

//import Video from '../components/video'




require('typeface-mukta')
require('typeface-bebas-neue')
require('typeface-rubik')


const ProjectPage = () => (
  <Layout>
    <SEO title="Project Page SEO" />
    <ProjectVideo/>
<Container  style={{ border:`0px black solid`,
marginTop:`-64px`,
paddingTop: `2em`,
paddingBottom: `4em`,
fontSize:`0.9em`,
  
}}>

<Row>

<Col xs="auto">

<div className="projectTitle">

PENGUIN BLOOM
<hr />
</div>


</Col><Col xs="auto">
<div className="projectTitle" style={{ fontSize:`1.8em`, paddingTop:`7px`, opacity:`0.5`, }}>

2021

</div>

</Col>

</Row>
<Row>
<Col>
Lee Geun-ja teams up with a number of friends she made during her time in lock-up, including Woo So-yeong (Kim Bu-seon), a thief with a gunsmith for a husband; Oh Su-heui (Ra Mi-ran), who was saved from assault at the hands fellow inmates by Lee; and Preacher Jeon (Kim Byeong-ok), an eccentric man of the cloth who was struck by her gentle nature in jail. She gets even with her rivals and searches for the daughter she was forced to leave behind when she was convicted. Sympathy for Lady Vengeance is the third film in a series, preceded by Sympathy for Mr. Vengeance, and Old Boy.


<hr/>

<div className="projectTitle" style={{ fontSize:`1.6em`, paddingTop:`7px`, opacity:`0.5`, }}>

<h5>Director</h5>

</div>


<span>Juan Pablo Domenech</span>
<div className="projectTitle" style={{ fontSize:`1.8em`, paddingTop:`7px`, opacity:`0.5`, }}>

<h5>Status</h5>

</div>
<span>Currently in post-production</span>
<div className="projectTitle" style={{ fontSize:`1.8em`, paddingTop:`7px`, opacity:`0.5`, }}>

<h5>Links</h5>

</div>
<a href="http://www.imdb.com" className="projectLink">IMDB</a>




</Col>


</Row>


</Container>


  </Layout>
)

export default ProjectPage
