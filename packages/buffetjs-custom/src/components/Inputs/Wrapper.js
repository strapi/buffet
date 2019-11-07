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
  label {
    display: block;
    margin-bottom: 1rem;
  }
  > p {
    padding-top: 11px;
    width 100%;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: -8px;
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
