/**
 *
 * Toggle
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const Toggle = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin: 0;
  opacity: 0;
  & + span {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    color: ${colors.greyToggle};
    background: white;
    font-weight: ${sizes.fontWeight.bold};
    & + span {
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      color: ${colors.greyToggle};
      background: white;
      font-weight: ${sizes.fontWeight.bold};
    }
  }
  &:not(:checked):not(:indeterminate) + span {
    background-color: ${colors.darkOrange};
    color: ${colors.white};
    font-weight: ${sizes.fontWeight.black};
  }
  &:checked + span {
    & + span {
      background-color: ${colors.blue};
      color: ${colors.white};
      font-weight: ${sizes.fontWeight.black};
    }
  }
  &:disabled {
    &:not(:checked):not(:indeterminate) + span {
      background-color: ${colors.greyIconBkgd};
      color: ${colors.brightGrey};
      box-shadow: inset -1px 1px 3px rgba(0, 0, 0, 0.1);
    }

    &:checked + span {
      & + span {
        background-color: ${colors.greyIconBkgd};
        color: ${colors.brightGrey};
        box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

Toggle.defaultProps = {
  disabled: false,
  type: 'checkbox',
};

Toggle.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default Toggle;
