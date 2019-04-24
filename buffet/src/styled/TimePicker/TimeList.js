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
  overflow-y: scroll;
  transition: all 0.3s ease-in-out;
  font-family: 'Lato';
  font-weight: 600;
  font-size: 13px;
  color: ${colors.greyIconColor};
  border: 1px solid transparent;
  list-style: none;
  padding: 0;
  margin: 0;
  &.displayed {
    height: ${sizes.timepicker.list.height};
    border-color: ${colors.lightGrey};
  }
  li {
    position: relative;
    :hover {
      background-color: ${colors.greyIconBkgd};
    }
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
      &:checked + div {
        background-color: ${colors.greyIconBkgd};
      }
    }
    div {
      position: relative;
      z-index: 0;
      padding: ${sizes.margin * 0.3}px 0 ${sizes.margin * 0.3}px
        calc(${sizes.input.height} + ${sizes.input.padding});
      font-size: 13px;
      line-height: 24px;
      :hover {
        background-color: ${colors.greyIconBkgd};
      }
    }
  }
`;

export default TimeList;
