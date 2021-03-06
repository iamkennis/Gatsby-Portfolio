import React from "react"
import About from "../components/About"
import Banner from "../components/Banner"
import Project from "../components/Project"
import Layout from "../components/layout"
import Personal from "../components/Personal"
import SEO from "../components/seo"
import Blog from "../components/Blog"




const IndexPage = () => (
  <Layout>
    <SEO title="Amodu Kehinde | Frontend Software Developer" />
    <Banner />
    <Personal />
    <About />
    <Project />
    <Blog/>
  </Layout>
)

export default IndexPage
