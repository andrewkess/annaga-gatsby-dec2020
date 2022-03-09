import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import styles2 from "../components/hero-module.css"
import { Container, Row, Col, Image, Carousel } from "react-bootstrap"
import Fade from "react-reveal/Fade"

//import VideoPlayer from "../components/VideoPlayer"

import Hero from "../components/hero"
//import Projects from '../components/projects'
import "./index.css"

require("typeface-mukta")
require("typeface-bebas-neue")
require("typeface-rubik")

export const query = graphql`
  query PageList {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            route
          }
          frontmatter {
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
  }
`

export default ({ data }) => {
  const posts = data.allMdx.edges
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />

      <div
        style={{
          //
          maxWidth: `960px`,
          margin: `auto`,
          //marginLeft:`15%`,
          // marginRight:`15%`,
        }}
      >
        <Fade bottom>
          <div className="projectsTitle">Latest Projects</div>
        </Fade>

        <div>
          {posts.map(({ node }, index) => (
            <div>
              <Fade bottom>
                {" "}
                <Container fluid className="projectContainer">
                  <Row>
                    <Col lg={true}>
                      <Link
                        aria-label="Generic Project Template"
                        to={node.fields.route}
                        key={index}
                      >
                        <Carousel.Item className="project">
                          <Image
                            src={node.frontmatter.projectPoster}
                            className="projectFill"
                            alt="NEVER"
                          />
                          <Carousel.Caption className="cappProject">
                            <h1>{node.frontmatter.title}</h1>
                            <p>{node.frontmatter.projectDirector}</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
