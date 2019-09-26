/**
 *
 * Wrapper
 *
 */

import styled, { css } from 'styled-components';
import { colors, sizes } from '@buffetjs/styles';

const Wrapper = styled.div`
  position: relative;
  padding-bottom: ${sizes.margin * 2.7}px;
  margin-bottom: ${sizes.margin * 1.7}px;
  label {
    display: block;
    margin-bottom: 1.1rem;
  }
  p {
    position: absolute;
    bottom: 0;
    left: 0;
    width 100%;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  ${({ error }) =>
    !!error &&
    css`
      input {
        border-color: ${colors.darkOrange};
      }
    `}
`;

export default Wrapper;
