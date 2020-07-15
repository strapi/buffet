/**
 *
 * InputWrapper
 *
 */

import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const InputWrapper = styled.div`
  position: relative;
  background-color: ${colors.white};
  border-radius: ${sizes.borderRadius};
  button[type='button'] {
    width: ${sizes.input.height};
    height: ${sizes.input.height};
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    cursor: pointer;
    outline: 0;
    border: 0;
    background: transparent;
    &:hover {
      span::before {
        color: ${colors.black};
      }
    }
    &.shown {
      span::before {
        color: ${colors.black};
      }
      & + input[type='text'] {
        padding-right: calc(${sizes.input.height} + ${sizes.input.padding});
      }
    }
  }
  span {
    border-top-left-radius: ${sizes.borderRadius};
    border-bottom-left-radius: ${sizes.borderRadius};
  }
  input {
    position: relative;
    z-index: 1;
  }
`;

export default InputWrapper;
