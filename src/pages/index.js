import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
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
