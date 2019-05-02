/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Navigation from "./navigation"
import "./layout.css"


function withImageData(WrappedComponent) {
  return props => (
 
    <StaticQuery
      query={graphql`
        query {          
          iconSlack: file(relativePath: { eq: "slack@2x.png" }) {
            childImageSharp {
              fluid(maxWidth: 58) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          
          iconGitHub: file(relativePath: { eq: "github@2x.png" }) {
            childImageSharp {
              fluid(maxWidth: 58) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <WrappedComponent {...props} imageData={data} />}
    />
  );
}

const IconSlack =  withImageData(props => (
  <Img fluid={props.imageData.iconSlack.childImageSharp.fluid} />
));

const IconGitHub =  withImageData(props => (
  <Img fluid={props.imageData.iconGitHub.childImageSharp.fluid} />
));


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navigation siteTitle={data.site.siteMetadata.title} />
        {children}
        <footer
          style={{
            height: 160,
            padding: '36px 0',
            backgroundColor: '#ffffff'
          }}
        >
          <div class="container-fluid">
            <div class="row">
              <div class="col-12" style={{ textAlign: 'center' }}>
              <Link
                to='https://slack.strapi.io/'
                style={{
                  display: 'inline-block',
                  width: 28,
                  height: 28,
                  marginRight: 36
                }}
              >
                <IconSlack /> 
              </Link>
              <Link
                to='https://github.com/strapi/buffet'
                style={{
                  display: 'inline-block',
                  width: 28,
                  height: 28
                }}
              >
                <IconGitHub /> 
              </Link>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p 
                  style={{
                    marginTop: 36,
                    color: '#3B3B3B',
                    textAlign: 'center',
                    fontSize: 14,
                    fontFamily: 'Lato'
                }}>
                Made with love by <Link to="https://www.strapi.io" style={{ textDecoration: 'none', color: '#0B269C' }}>Strapi</Link></p>
              </div>
            </div>
          </div>
         
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
