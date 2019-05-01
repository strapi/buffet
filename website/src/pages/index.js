import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from "../components/button"
import Header from "../components/header"
import H3 from "../components/h3"
import Paragraph from "../components/Paragraph"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <main 
      class="container"
      style={{
        padding: '142px 0 100px',
        margin: `0 auto`,
        maxWidth: 1240,
      }} 
    >
      <div class="row">
        <div class="col-4 offset-lg-4">
          <Paragraph style={{ textAlign: 'center', margin: '0 -36px', }}>Buffet is Strapi's open-source component system to create digital applications. Based on style-components, it is made available for the community...</Paragraph>
        </div>
      </div>
      <div class="row">
        <div class="col-8 offset-lg-2">
          <H3 style={{ marginTop: 124 }}>A Consistent Styled Component Library</H3>
        </div>
        <div class="col-4 offset-lg-2">
          <Paragraph style={{ marginTop: 20 }}>Buffet is Strapi's open-source component system to create digital applications. Based on style-components, it is made available for the community...</Paragraph>
        </div>
      </div>
      <div class="row">
        <div class="col-8 offset-lg-2">
          <div style={{
            height: 566,
            marginTop: 16,
            borderRadius: 2,
            boxShadow: '0 2px 4px 0 #e3e9f3',
            backgroundColor: '#ffffff'
          }}></div>
        </div>
      </div>
      <div class="row ">
        <div class="col-12" style={{ paddingTop: 40, textAlign: 'center' }}>
          <Button url='/' type='main'>See all components</Button>
        </div>
      </div>
    </main>
  </Layout>
)

export default IndexPage
