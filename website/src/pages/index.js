import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from "../components/button"
import Header from "../components/header"
import H3 from "../components/h3"
import Paragraph from "../components/Paragraph"

import IconOpenSource from "../images/icon_opensource.svg"
import IconConsistent from "../images/icon_consistent.svg"
import IconCommunity from "../images/icon_community.svg"

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
      <div class="row">
        <div class="col-12" style={{ paddingTop: 40, textAlign: 'center' }}>
          <Button url='/' type='main'>See all components</Button>
        </div>
      </div>
      <div class="row">
        <div class="col-8 offset-lg-2">
          <H3 style={{ marginTop: 124 }}>Our philosophy</H3>
        </div>
        <div class="col-8 offset-lg-2">
          <div class="row align-items-center" style={{ marginTop: 72 }}>
            <div class="col-4" style={{ paddingLeft: 'calc(36px + 15px)' }}>
              <img style={{ width: 160, height: 160 }} src={IconOpenSource} />
            </div>
            <div class="col-8" style={{ paddingLeft: 'calc(36px + 15px)' }}>
              <h3
                style={{
                  color: '#0B269C',
                  fontFamily: 'Lato',
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 2
                }}
              >Buffet is open source</h3>
              <Paragraph style={{ marginTop: 8 }}>We strongly believe in the principles of open-source and shared contributions. Everyone eating at the buffet is welcomed to contribute as well. </Paragraph>
            </div>
          </div>
          <div class="row align-items-center" style={{ marginTop: 84 }}>
            <div class="col-7">
              <h3
                style={{
                  color: '#0B269C',
                  fontFamily: 'Lato',
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 2
                }}
              >Buffet is consistent</h3>
              <Paragraph style={{ marginTop: 8 }}>Based on styled-components, every Buffet component harmonises with the others to ensure the user experience stays consistent throughout the whole journey. </Paragraph>
              
            </div>
            <div class="col-5" style={{ paddingRight: 'calc(36px + 15px)', textAlign: 'right' }}>
              <img style={{ width: 160, height: 160 }} src={IconConsistent} />
            </div>
          </div>
          <div class="row align-items-center" style={{ marginTop: 84 }}>
            <div class="col-4" style={{ paddingLeft: 'calc(36px + 15px)' }}>
              <img style={{ width: 160, height: 160 }} src={IconCommunity} />
            </div>
            <div class="col-8" style={{ paddingLeft: 'calc(36px + 15px)' }}>
              <h3
                style={{
                  color: '#0B269C',
                  fontFamily: 'Lato',
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 2
                }}
              >Buffet is for the community</h3>
              <Paragraph style={{ marginTop: 8 }}>Created with the community in mind, Buffet is made by developers for developers. It is fully supported by its creators (and by open-source contributors). </Paragraph>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 offset-lg-3">
          <h2
            style={{
              marginTop: 120,
              textAlign: 'center',
              fontSize: 24,
              fontFamily: 'Lato',
              fontWeight: 900,
              color: '#3b3b3b',
            }}
          >
            Get updates about Buffet.JS
          </h2>
          <form
            style={{
              position: 'relative',
              width: '100%',
              height: 50,
              marginTop: 52,
              borderRadius: 25,
              overflow: 'hidden'
            }}
          >
            <input 
              autocomplete="off"
              type="email"
              name="email"
              placeholder="Enter your email" 
              style={{
                width: '100%',
                height: 50,
                padding: '0 36px',
                backgroundColor: '#ffffff',
                border: 'none',
                fontSize: 14,
                fontFamily: 'Lato',
                color: '#3B3B3B',
                outline: 'none'
              }}
            />
            <Button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const email = e.currentTarget.previousSibling.value;
                
                console.log('Do something...', email);
              }} 
              type='secondary'
              style={{
                position: 'absolute',
                top: 0, right: 0,
                cursor: 'pointer'
              }}
            >Subscribe</Button>
          </form> 
        </div>
      </div>  
    </main>
  </Layout>
)

export default IndexPage
