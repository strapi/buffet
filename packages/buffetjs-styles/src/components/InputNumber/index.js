/**
 *
 * InputNumber
 *
 */

import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
import img from '../../assets/icons/icon_select.svg';

// TODO

const InputNumber = styled.div`
  /* stylelint-disable */
  .rc-input-number {
    margin: 0;
    padding: 0;
    line-height: 26px;
    font-size: 12px;
    height: 26px;
    display: inline-block;
    vertical-align: middle;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all 0.3s;
  }
  .rc-input-number-focused {
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
  .rc-input-number-handler {
    text-align: center;
    line-height: 12px;
    height: 12px;
    overflow: hidden;
    display: block;
    -ms-touch-action: none;
    touch-action: none;
  }
  .rc-input-number-handler-up-inner,
  .rc-input-number-handler-down-inner {
    color: #666666;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-select: none;
  }
  .rc-input-number:hover {
    border-color: #1890ff;
  }
  .rc-input-number:hover .rc-input-number-handler-up,
  .rc-input-number:hover .rc-input-number-handler-wrap {
    border-color: #1890ff;
  }
  .rc-input-number-disabled:hover {
    border-color: #d9d9d9;
  }
  .rc-input-number-disabled:hover .rc-input-number-handler-up,
  .rc-input-number-disabled:hover .rc-input-number-handler-wrap {
    border-color: #d9d9d9;
  }
  .rc-input-number-input-wrap {
    overflow: hidden;
    height: 100%;
  }
  .rc-input-number-input {
    width: 100%;
    text-align: center;
    outline: 0;
    -moz-appearance: textfield;
    line-height: 26px;
    height: 100%;
    transition: all 0.3s ease;
    color: #666666;
    border: 0;
    border-radius: 4px;
    padding: 0;
    transition: all 0.3s;
  }
  .rc-input-number-handler-wrap {
    float: right;
    border-left: 1px solid #d9d9d9;
    width: 20px;
    height: 100%;
    transition: all 0.3s;
  }
  .rc-input-number-handler-up {
    border-bottom: 1px solid #d9d9d9;
    padding-top: 1px;
    transition: all 0.3s;
  }
  .rc-input-number-handler-up-inner:after {
    content: '+';
  }
  .rc-input-number-handler-down {
    transition: all 0.3s;
  }
  .rc-input-number-handler-down-inner:after {
    content: '-';
  }
  .rc-input-number-handler-down-disabled,
  .rc-input-number-handler-up-disabled {
    opacity: 0.72;
  }
  .rc-input-number-handler-down-disabled:hover,
  .rc-input-number-handler-up-disabled:hover {
    color: #999;
    border-color: #d9d9d9;
  }
  .rc-input-number-disabled .rc-input-number-input {
    opacity: 0.72;
    cursor: not-allowed;
    background-color: #f3f3f3;
  }
  .rc-input-number-disabled .rc-input-number-handler {
    opacity: 0.72;
  }
  .rc-input-number-disabled .rc-input-number-handler:hover {
    color: #999;
    border-color: #d9d9d9;
  }

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
      border-radius: ${sizes.borderRadius};
      text-align: left;
      font-weight: ${sizes.fontWeight.regular};
      font-size: 1.3rem;
      color: ${colors.blueTxt};

      &::-webkit-input-placeholder {
        color: ${colors.greyPlaceholder};
      }
      &:focus {
        border-color: ${colors.blueBorder};
      }
      &:disabled {
        cursor: not-allowed;
        background-color: ${colors.greyIconBkgd};
        color: ${colors.brightGrey};
        opacity: 1;
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
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default InputNumber;
