import React from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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

const IconSlack = withImageData(props => (
  <Img fluid={props.imageData.iconSlack.childImageSharp.fluid} alt="Slack icon" />
));

const IconGitHub = withImageData(props => (
  <Img fluid={props.imageData.iconGitHub.childImageSharp.fluid} alt="GitHub icon" />
));

const Footer = () => (

  <footer
    style={{
      height: 160,
      padding: '36px 0',
      backgroundColor: '#ffffff'
    }}
  >
    <div className="container-fluid">
      <div className="row">
        <div className="col-12" style={{ textAlign: 'center' }}>
        <a
          href='https://slack.strapi.io/'
          style={{
            display: 'inline-block',
            width: 28,
            height: 28,
            marginRight: 36
          }}
        >
          <IconSlack /> 
        </a>
        <a
          href='https://github.com/strapi/buffet'
          style={{
            display: 'inline-block',
            width: 28,
            height: 28
          }}
        >
          <IconGitHub /> 
        </a>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
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
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer