/**
 *
 * Enumeration
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const Enumeration = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin: 0;
  opacity: 0;
  &:checked + span {
    background-image: ${colors.blueGradient};
    color: ${colors.white};
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1);
    font-weight: ${sizes.fontWeight.bold};
  }
`;

Enumeration.defaultProps = {
  disabled: false,
  type: 'radio',
};

Enumeration.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default Enumeration;
