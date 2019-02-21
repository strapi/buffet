/**
 *
 * CheckboxWrapper
 *
 */

import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const StyledCheckboxWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: auto;
  padding-left: calc(${sizes.checkbox.width} + 10px);

  input + label {
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: calc(-${sizes.checkbox.width} / 2);
      width: ${sizes.checkbox.width};
      height: ${sizes.checkbox.height};
      border: 1px solid rgba(16, 22, 34, 0.15);
      background-color: #fdfdfd;
      border-radius: 3px;
      box-sizing: border-box;
    }
    &:after {
      display: none;
      content: '\f00c';
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: calc(-${sizes.checkbox.width} / 2);
      width: ${sizes.checkbox.width};
      height: ${sizes.checkbox.height};
      text-align: center;
      font-size: 10px;
      font-family: 'FontAwesome';
      font-weight: 600;
      color: ${colors.darkBlue};
      line-height: ${sizes.checkbox.height};
    }
  }
  input:checked + label {
    &:after {
      display: block;
    }
  }
`;

export default StyledCheckboxWrapper;
