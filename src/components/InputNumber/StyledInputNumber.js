import { createGlobalStyle } from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
import img from '../../assets/icons/icon_select.svg';

const StyledInputNumber = createGlobalStyle`
  
  // Custom style
  .rc-input-number.inputNumber {
    width: 100%;
    height: ${sizes.input.height};
    background-color: ${colors.white};
    border: 0;
    box-shadow: none;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      border: 1px solid ${colors.lightGrey};
      padding: 0 ${sizes.input.padding};
      cursor: pointer;
      outline: 0;
      padding-right: calc(${sizes.input.height} + ${sizes.input.padding});
      border-radius: ${sizes.radius};
      text-align: left;
      font-family: 'Lato';
      font-weight: 600;
      font-size: 13px;
      color: ${colors.blueTxt};

      &::-webkit-input-placeholder {
        color: ${colors.greyPlaceholder};
      }
      &:focus {
        border-color: ${colors.blueBorder};
      }
    }
    .rc-input-number-handler-wrap {
      width: 24px;
      position: absolute;
      right: 0;
      top: 0;
      background-image: url(${img});
      background-repeat: no-repeat;
      background-position: right;
      border: none;
      cursor: pointer;
      span {
        height: 50%;
        border: 0;
        span {
          color: transparent;
        }
      }
    }
  }
`;

export default StyledInputNumber;
