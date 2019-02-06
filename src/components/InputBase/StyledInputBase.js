import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const StyledInputWrapper = styled.div`
  position: relative;
  span {
    z-index: 0;
  }
  input {
    position: relative;
    z-index: 1;
    & + button {
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
    }
    &.shown + button {
      span::before {
        color: ${colors.black};
      }
    }
  }
`;

export default StyledInputWrapper;
