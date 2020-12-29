import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

import VideoPlayer from '../components/VideoPlayer'

import Hero from '../components/hero'
import Projects from '../components/projects'
import './index.css'

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
                        <Link to={node.fields.route} style={{textDecoration:'none', color:  'inherit'}} key={index}>
                            <div className="post-item">
                                <h3 className="post-title">{node.frontmatter.title}</h3>
                                <p className="post-excerpt">{node.excerpt}</p>
                                <p className="post-date">{node.frontmatter.date}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
  )
}
