/**
 *
 * InputText
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const InputText = styled.input`
  width: 100%;
  height: ${sizes.input.height};
  padding: 0 ${sizes.input.padding};
  font-weight: ${sizes.fontWeight.regular};
  font-size: ${sizes.input.fontSize};
  cursor: text;
  outline: 0;
  border: 1px solid ${colors.lightGrey};
  border-radius: ${sizes.borderRadius};
  color: ${colors.blueTxt};
  background-color: transparent;

  &::-webkit-input-placeholder {
    color: ${colors.greyPlaceholder};
  }

  &:focus {
    border-color: ${colors.blueBorder};
  }

  &:disabled {
    background-color: ${colors.greyIconBkgd};
    cursor: not-allowed;
    color: ${colors.brightGrey};
  }

  ${(props) =>
    (props.type === 'search' || props.type === 'email' || props.icon) &&
    `
      padding-left: calc(${sizes.input.height} + ${sizes.input.padding});
    `}

  ${(props) =>
    props.type === 'password' &&
    `
      padding-right: calc(${sizes.input.height} + ${sizes.input.padding});
    `}
`;

InputText.defaultProps = {
  type: 'text',
};

InputText.propTypes = {
  type: PropTypes.string,
};

export default InputText;
