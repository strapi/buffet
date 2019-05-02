/**
 *
 * TimeList
 *
 */

import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const TimeList = styled.ul`
  width: 100%;
  height: 0;
  font-family: 'Lato';
  font-weight: 600;
  font-size: 13px;
  color: ${colors.greyIconColor};
  border: 1px solid transparent;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  transition: all 0.3s 300ms linear;
  visibility: hidden;
  &.displayed {
    height: ${sizes.timepicker.list.height};
    transition: all 0.3s 0s linear;
    visibility: visible;
    border-color: ${colors.lightGrey};
  }
  li {
    position: relative;
    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      opacity: 0;
      z-index: 1;
      cursor: pointer;
      background-color: red;
      &:checked + label,
      &:hover + label {
        background-color: ${colors.greyIconBkgd};
      }
    }
    label {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 0;
      padding: ${sizes.margin * 0.3}px 0 ${sizes.margin * 0.3}px
        calc(${sizes.input.height} + ${sizes.input.padding});
      font-size: 13px;
      line-height: 24px;
      margin-bottom: 0;
    }
  }
`;

export default TimeList;
