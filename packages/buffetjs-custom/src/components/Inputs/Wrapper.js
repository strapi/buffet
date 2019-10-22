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
  margin-bottom: ${sizes.margin * 1.8}px;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  p {
    position: absolute;
    bottom: 0px;
    left: 0;
    width 100%;
    margin: 0;
    line-height: 1.6rem;
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
