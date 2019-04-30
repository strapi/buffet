import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <main 
      class="container"
      style={{
        padding: '142px 0 100px',
        margin: `0 auto`,
        maxWidth: 1270,
      }} 
    >
      <div class="row">
        <div class="col-4 offset-lg-4">
          <p
            style={{
              margin: '0 -36px',
              color: '#3B3B3B',
              fontFamily: 'Lato',
              fontSize: 16,
              lineHeight: '24px',
              textAlign: 'center'
            }}
          >Buffet is Strapi's open-source component system to create digital applications. Based on style-components, it is made available for the community...</p>
        </div>
      </div>
      <div class="row">
        <div class="col-10 offset-lg-2">
          <h3>A Consistent Styled Component Library</h3>
        </div>
      </div>
    </main>
  </Layout>
)

export default IndexPage
