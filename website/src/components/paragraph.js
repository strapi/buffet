import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({ children, style }) => (
  <p
    style={{
      color: '#3B3B3B',
      fontFamily: 'Lato',
      fontSize: 16,
      lineHeight: '24px',
      textAlign: 'left',
      ...style
    }}
  >
    {children}
  </p>
)

Paragraph.ParagraphpropTypes = {
  siteTitle: PropTypes.string,
}

Paragraph.defaultProps = {
  siteTitle: ``,
}

export default Paragraph;