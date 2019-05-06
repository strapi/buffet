import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from "../components/button"
import Header from "../components/header"
import H3 from "../components/h3"
import Paragraph from "../components/Paragraph"

import { Textarea, Button as Btn, GlobalStyle } from "../../../buffet/dist"

import IconOpenSource from "../images/icon_opensource.svg"
import IconConsistent from "../images/icon_consistent.svg"
import IconCommunity from "../images/icon_community.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <GlobalStyle />
    <Header />
    <main
      className="container"
      style={{
        padding: "142px 0 100px",
        margin: `0 auto`,
        maxWidth: 1240,
      }}
    >
      <div className="row home_description">
        <div className="col-lg-4 offset-lg-4 col-xs-12">
          <Paragraph style={{ textAlign: "center", margin: "0 -36px" }}>
            Buffet is Strapi's open-source component system to create digital
            applications. Based on style-components, it is made available for
            the community...
          </Paragraph>
        </div>
      </div>
      <div className="row home_consistent">
        <div className="col-lg-8 offset-lg-2 col-xs-12">
          <H3 style={{ marginTop: 124 }}>
            A Consistent Styled Component Library
          </H3>
        </div>
        <div className="col-lg-4 offset-lg-2 col-xs-12  ">
          <Paragraph style={{ marginTop: 20 }}>
            Buffet is Strapi's open-source component system to create digital
            applications. Based on style-components, it is made available for
            the community...
          </Paragraph>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 offset-lg-2 col-xs-12">
          <div
            className="home_playground"
            style={{
              height: 566,
              marginTop: 16,
              borderRadius: 2,
              boxShadow: "0 2px 4px 0 #e3e9f3",
              backgroundColor: "#ffffff",
            }}
          >
            <div className="row">
              <div class="col-lg-8">
                <Textarea
                  name="textarea"
                  value=""
                  placeholder="qklsjdqkljdskljkl"
                />
              </div>
              <div className="col-lg-4">
                <Btn
                  onClick={e => {
                    window.confirm("Please confirm")
                  }}
                >
                  Click on me
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row home_main_cta">
        <div
          className="col-lg-12 col-xs-12"
          style={{ paddingTop: 40, textAlign: "center" }}
        >
          <Button url="/" type="main">
            See all components
          </Button>
        </div>
      </div>
      <div className="row home_philosophy">
        <div className="col-lg-8 offset-lg-2 col-xs-12">
          <H3 style={{ marginTop: 124 }}>Our philosophy</H3>
        </div>
        <div className="col-lg-8 offset-lg-2 col-xs-12">
          <div className="row align-items-center" style={{ marginTop: 72 }}>
            <div
              className="col-lg-4 col-xs-12"
              style={{ paddingLeft: "calc(36px + 15px)" }}
            >
              <img
                style={{ width: 160, height: 160 }}
                src={IconOpenSource}
                alt="Open source icon"
              />
            </div>
            <div
              className="col-lg-8 col-xs-12"
              style={{ paddingLeft: "calc(36px + 15px)" }}
            >
              <h3
                className="home_philosophy_section_title"
                style={{
                  color: "#0B269C",
                  fontFamily: "Lato",
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                }}
              >
                Buffet is open source
              </h3>
              <Paragraph style={{ marginTop: 8 }}>
                We strongly believe in the principles of open-source and shared
                contributions. Everyone eating at the buffet is welcomed to
                contribute as well.{" "}
              </Paragraph>
            </div>
          </div>
          <div className="row align-items-center" style={{ marginTop: 84 }}>
            <div className="col-lg-7 col-xs-12 order-2 order-lg-1">
              <h3
                className="home_philosophy_section_title"
                style={{
                  color: "#0B269C",
                  fontFamily: "Lato",
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                }}
              >
                Buffet is consistent
              </h3>
              <Paragraph style={{ marginTop: 8 }}>
                Based on styled-components, every Buffet component harmonises
                with the others to ensure the user experience stays consistent
                throughout the whole journey.{" "}
              </Paragraph>
            </div>
            <div
              className="col-lg-5 col-xs-12 order-1 order-lg-2"
              style={{ paddingRight: "calc(36px + 15px)", textAlign: "right" }}
            >
              <img
                style={{ width: 160, height: 160 }}
                src={IconConsistent}
                alt="Consistent icon"
              />
            </div>
          </div>
          <div className="row align-items-center" style={{ marginTop: 84 }}>
            <div
              className="col-lg-4 col-xs-12"
              style={{ paddingLeft: "calc(36px + 15px)" }}
            >
              <img
                style={{ width: 160, height: 160 }}
                src={IconCommunity}
                alt="Community icon"
              />
            </div>
            <div
              className="col-lg-8 col-xs-12"
              style={{ paddingLeft: "calc(36px + 15px)" }}
            >
              <h3
                className="home_philosophy_section_title"
                style={{
                  color: "#0B269C",
                  fontFamily: "Lato",
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                }}
              >
                Buffet is for the community
              </h3>
              <Paragraph style={{ marginTop: 8 }}>
                Created with the community in mind, Buffet is made by developers
                for developers. It is fully supported by its creators (and by
                open-source contributors).{" "}
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-lg-3 d-none d-lg-block">
          <h2
            style={{
              marginTop: 120,
              textAlign: "center",
              fontSize: 24,
              fontFamily: "Lato",
              fontWeight: 900,
              color: "#3b3b3b",
            }}
          >
            Get updates about Buffet.JS
          </h2>
          <form
            style={{
              position: "relative",
              width: "100%",
              height: 50,
              marginTop: 52,
              borderRadius: 25,
              overflow: "hidden",
            }}
          >
            <input
              autoComplete="off"
              type="email"
              name="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                height: 50,
                padding: "0 36px",
                backgroundColor: "#ffffff",
                border: "none",
                fontSize: 14,
                fontFamily: "Lato",
                color: "#3B3B3B",
                outline: "none",
              }}
            />
            <Button
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()

                const email = e.currentTarget.previousSibling.value

                console.log("Do something...", email)
              }}
              type="secondary"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                cursor: "pointer",
              }}
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </main>
  </Layout>
)

export default IndexPage
