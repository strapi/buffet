/**
 *
 * TimePickerWrapper
 *
 */

import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const TimePickerWrapper = styled.div`
  max-width: 95px;
  z-index: 99;
  position: relative;
  background-color: ${colors.white};
  span {
    z-index: 0;
    border-top-left-radius: ${sizes.radius};
    border-bottom-left-radius: ${sizes.radius};
  }
  input {
    position: relative;
    z-index: 1;
    &:focus + span {
      background-color: ${colors.blueIconBkgd};
      &:before {
        color: ${colors.blueIconTxt};
      }
    }
    &:focus {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  ul {
    position: absolute;
    background-color: transparent;
    border-top: 1px solid transaprent;
    top: calc(${sizes.input.height} - ${sizes.margin * 0.1}px);
    left: 0;
    z-index: 99;
    pointer-events: all;
    &.displayed {
      background-color: ${colors.white};
      border-top: 1px solid ${colors.blueBorder};
    }
  }
`;

export default TimePickerWrapper;
