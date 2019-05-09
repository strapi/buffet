import React from 'react'
import PropTypes from 'prop-types'

const H4 = ({ children, style }) => (
  <h4
    style={{
      position: 'relative',
      color: '#3b3b3b',
      fontFamily: 'Lato',
      fontSize: 20,
      fontWeight: 400,
      marginBottom: 15,
      ...style
    }}
  >
    {children}
  </h4>
)

H4.propTypes = {
  siteTitle: PropTypes.string,
}

H4.defaultProps = {
  siteTitle: ``,
}

export default H4