import React from "react"
import About from "../components/about"
import Banner from "../components/banner"
import Project from "../components/project"
import Layout from "../components/layout"
import Personal from "../components/personal"
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
