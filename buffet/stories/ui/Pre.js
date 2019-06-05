import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Highlight from 'react-highlight';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  pre {
    margin: -16px !important;
  }
  code {
    padding: 11px;
    padding-top: 0;
    border-radius: 3px !important;
    background-color: rgb(40, 44, 52);
    font-size: 11px;
  }
`;

const Pre = ({ children, language }) => (
  <Wrapper>
    <Highlight language={language}>{children}</Highlight>
  </Wrapper>
);

Pre.defaultProps = {
  language: 'javascript',
};

Pre.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
};

export default Pre;
