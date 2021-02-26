import React from "react"
import About from "../components/About/index"
import Banner from "../components/Banner"
import Project from "../components/Project"
import Layout from "../components/layout"
import Personal from "../components/Personal"
import SEO from "../components/seo"



const IndexPage = () => (
  <Layout>
    <SEO title="Amodu Kehinde | Portfolio" />
    <Banner />
    <Personal />
    <About />
    <Project />
  </Layout>
)

export default IndexPage
