/**
 *
 * StyledEnumeration
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledEnumeration = styled.input`
  background: red;
`;

StyledEnumeration.defaultProps = {
  name: null,
  type: 'radio',
};

StyledEnumeration.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default StyledEnumeration;
