import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Hero from '../components/hero'
import Projects from '../components/projects'



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    
    
    <Hero/>
    
    <Projects/>

    
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something quick.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
 <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something quick.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
     <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something quick.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

  </Layout>
)

export default IndexPage
