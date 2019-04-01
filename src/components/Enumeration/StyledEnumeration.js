/**
 *
 * StyledEnumeration
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';

const StyledEnumeration = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  margin: 0;
  opacity: 0;
  &:checked + span {
    background-image: ${colors.blueGradient};
    color: ${colors.white};
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1);
  }
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
