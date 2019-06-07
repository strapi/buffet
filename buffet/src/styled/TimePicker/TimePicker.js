/**
 *
 * TimePicker
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const TimePicker = styled.input`
  width: 100%;
  height: ${sizes.input.height};
  padding: 0 ${sizes.input.padding};
  font-family: 'Lato';
  font-weight: ${sizes.input.fontWeight};
  font-size: ${sizes.input.fontSize};
  cursor: pointer;
  outline: 0;
  border: 1px solid ${colors.lightGrey};
  border-radius: ${sizes.radius};
  color: ${colors.blueTxt};
  background-color: transparent;
  padding-left: calc(${sizes.input.height} + ${sizes.input.padding});
  &::-webkit-input-placeholder {
    color: ${colors.greyPlaceholder};
  }
  &:focus {
    border-color: ${colors.blueBorder};
  }
`;

TimePicker.defaultProps = {
  type: 'text',
};

TimePicker.propTypes = {
  type: PropTypes.string,
};

export default TimePicker;
