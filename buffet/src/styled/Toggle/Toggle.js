/**
 *
 * Toggle
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../assets/styles/colors';

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
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    background-image: ${colors.orangeGradient};
    box-shadow: inset -1px 1px 3px ${colors.lightGreyAlpha};
    color: ${colors.white};
  }
  &:not(:checked) + span {
    font-weight: 800;
  }
  &:checked + span {
    color: ${colors.black};
    background: transparent;
    & + span {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      background-image: ${colors.blueGradient};
      color: ${colors.white};
      box-shadow: inset 1px 1px 3px ${colors.lightGreyAlpha};
      font-weight: 800;
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
