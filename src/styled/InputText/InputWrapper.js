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
  span {
    z-index: 0;
  }
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
    position: absolute;
    top: 0;
    left: 0;
  }
  input {
    position: relative;
    z-index: 1;
  }
`;

export default InputWrapper;
