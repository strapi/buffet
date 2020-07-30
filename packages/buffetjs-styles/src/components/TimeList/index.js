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
  font-weight: ${sizes.fontWeight.bold};
  font-size: ${sizes.input.fontSize};
  color: ${colors.greyIconColor};
  border: 1px solid transparent;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  transition: all 0.2s ease-out;
  visibility: hidden;
  ::-webkit-scrollbar {
    /* stylelint-disable */
    width: 0 !important;
    /* stylelint-enable */
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &.displayed {
    height: ${sizes.timepicker.list.height};
    transition: all 0.2s ease-out;
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
      &:checked + label,
      &:hover + label {
        background-color: ${colors.greyIconBkgd};
      }
    }
    label {
      display: block;
      position: relative;
      z-index: 0;
      width: 100%;
      height: 100%;
      padding: ${sizes.margin * 0.4}px 0 ${sizes.margin * 0.2}px
        calc(${sizes.input.height} + ${sizes.input.padding});
      font-size: 13px;
      line-height: 30px;
      margin-bottom: 0;
    }
  }
`;

export default TimeList;
