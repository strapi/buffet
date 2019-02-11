/**
 *
 * Textarea
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const StyledTextarea = styled.textarea`

  width: 100%;
  height: calc(${sizes.input.height} * 4);
  padding: ${sizes.input.padding} ${sizes.input.padding};
  font-family: 'LatoSemiBold';
  font-size: 13px;
  cursor: pointer;
  outline: 0;
  border: 1px solid ${colors.greyBorder}
  border-radius: ${sizes.radius};
  color: ${colors.blueTxt}
  background-color: transparent;
  &::-webkit-input-placeholder {
    color: ${colors.greyPlaceholder};
  }
  &:focus {
    border-color: ${colors.blueBorder}
  }
  
`;

StyledTextarea.defaultProps = {
  placeholder: null,
};

StyledTextarea.propTypes = {
  placeholder: PropTypes.string,
};

export default StyledTextarea;
