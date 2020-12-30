import React from "react"
import Layout from '../components/layout'
import { graphql } from "gatsby";
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
//import ProjectVideo from '../components/projectVideo'
import styles2 from '../components/hero-module.css'

require('typeface-mukta')
require('typeface-bebas-neue')
require('typeface-rubik')


export default ({ data }) => {
    return (
        <Layout> <SEO title="Project Page SEO" />    

                 <div style={{ marginTop: `-64px`, border: `0 solid red`, }}><MDXRenderer>{data.mdx.code.body}</MDXRenderer></div>


<Container  style={{ border:`0 black solid`,
marginTop:`0`,
paddingTop: `1em`,
paddingBottom: `4em`,
fontSize:`0.9em`,
  
}}>

<Row>

<Col xs="auto">

<div className="projectTitle">

{data.mdx.frontmatter.title}
<hr />
</div>


</Col><Col xs="auto">
<div className="projectTitle" style={{ fontSize:`1.8em`, paddingTop:`7px`, opacity:`0.5`, }}>

{data.mdx.frontmatter.projectRelease}


</div>

</Col>

</Row>
<Row>
<Col>
{data.mdx.frontmatter.projectSynopsis}




<hr/>

<div className="projectTitle" style={{ fontSize:`1.6em`, paddingTop:`7px`, opacity:`0.5`, }}>

<h5>Director</h5>

</div>


<span>{data.mdx.frontmatter.projectDirector}</span>
<div className="projectTitle" style={{ fontSize:`1.8em`, paddingTop:`7px`, opacity:`0.5`, }}>

<h5>Status</h5>

</div>
<span>{data.mdx.frontmatter.projectStatus}</span>
<div className="projectTitle" style={{ fontSize:`1.8em`, paddingTop:`7px`, opacity:`0.5`, }}>

<h5>Links</h5>

</div>
<a href={data.mdx.frontmatter.projectIMDB} className="projectLink">IMDB</a>




</Col>


</Row>


</Container>
        </Layout>
    )
}

export const pageQuery = graphql `query ($postRoute: String!) {
        mdx(fields: {route: {eq: $postRoute}}){
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
                fields{
                    route
                }
                rawBody
                internal{
                    content
                }
                code{
                    body
                    scope
                }
        }
    }`
