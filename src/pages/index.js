import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles2 from '../components/hero-module.css'
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap'


import VideoPlayer from '../components/VideoPlayer'

import Hero from '../components/hero'
import Projects from '../components/projects'
import './index.css'

import logo from "../images/brexit.jpg" // Tell webpack this JS file uses this image


require('typeface-mukta')
require('typeface-bebas-neue')
require('typeface-rubik')


export const query = graphql `query PageList{
        allMdx(sort: { fields: [frontmatter___date], order: DESC }){
            edges{
                node{
                    fields {
                        route
                    }
                    frontmatter{
                        title
                        date
                           projectPoster
projectRelease
projectSynopsis
projectDirector
projectStatus
projectIMDB
                    }
                    timeToRead
                    excerpt
                }
            }
        }
    }`


export default ({ data }) => {
  const posts = data.allMdx.edges
  return (
    <Layout>
            <SEO title="Home" />
    <Hero/>
    <Projects/>
            <div>
                <header>
                    <h2>Testing</h2>
                </header>
                <div>
                    {posts.map(({node}, index)=> (
                    
                    
                    <div>
                       
                    
                    
                     <Container fluid style={{ }}>
  <Row>
    <Col lg={true}>
    
        <Link aria-label="Generic Project Template" to={node.fields.route} key={index}>

   <Carousel.Item className="project">
<Image src={logo} className="projectFill"  alt="NEVER"  />
                 <Carousel.Caption className="cappProject">
<h1>{node.frontmatter.title}</h1>
<p>{node.frontmatter.projectDirector}</p>
</Carousel.Caption>
</Carousel.Item>
</Link>
</Col></Row></Container>
                    </div>
                    
                    
                    
                    
                    ))}
                </div>
            </div>
        </Layout>
  )
}
