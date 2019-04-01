/**
 *
 * StyledEnumerationWrapper
 *
 */

import styled from 'styled-components';

import colors from '../../assets/styles/colors';

const StyledEnumerationWrapper = styled.div`
  border: 1px solid ${colors.lightGrey};
  width: fit-content;
  height: 34px;
  label {
    position: relative;
    color: ${colors.black};
    height: 100%;
    display: inline-block;
    width: fit-content;
    span {
      display: inline-block;
      padding: 0 1.5rem;
      line-height: 32px;
      margin: auto;
      font-size: 12px;
      text-transform: uppercase;
    }
    &:not(:last-of-type) {
      span {
        border-right: 1px solid ${colors.lightGrey};
      }
    }
  }
`;

export default StyledEnumerationWrapper;
