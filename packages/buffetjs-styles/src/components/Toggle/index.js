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
  cursor: pointer;
  margin: 0;
  opacity: 0;
  & + span {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    background-color: ${colors.darkOrange};
    color: ${colors.white};
    font-weight: ${sizes.fontWeight.bold};
    & + span {
      color: ${colors.greyToggle};
      background: white;
      font-weight: ${sizes.fontWeight.bold};
    }
  }
  &:not(:checked) + span {
    font-weight: ${sizes.fontWeight.black};
  }
  &:checked + span {
    color: ${colors.greyToggle};
    background: white;
    & + span {
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      background-color: ${colors.blue};
      color: ${colors.white};
      font-weight: ${sizes.fontWeight.black};
    }
  }
`;

Toggle.defaultProps = {
  type: 'checkbox',
};

Toggle.propTypes = {
  type: PropTypes.string,
};

export default Toggle;
