import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/hero'
import Projects from '../components/projects'

require('typeface-mukta')
require('typeface-bebas-neue')
require('typeface-rubik')


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <Projects/>


  </Layout>
)

export default IndexPage
