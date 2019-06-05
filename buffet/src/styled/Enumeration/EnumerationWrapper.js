/**
 *
 * EnumerationWrapper
 *
 */

import styled from 'styled-components';

import colors from '../../assets/styles/colors';

const EnumerationWrapper = styled.div`
  display: flex;
  width: fit-content;
  height: 34px;
  border: 1px solid ${colors.lightGrey};
  border-radius: 3px;
  background-color: white;
  overflow: hidden;
  label {
    position: relative;
    display: inline-block;
    height: 100%;
    width: fit-content;
    color: ${colors.black};
    span {
      display: inline-block;
      padding: 0 1.5rem;
      line-height: 32px;
      margin: auto;
      font-size: 12px;
      letter-spacing: 0.65;
      text-transform: uppercase;
    }
    &:not(:last-of-type) {
      span {
        border-right: 1px solid ${colors.lightGrey};
      }
    }
  }
`;

export default EnumerationWrapper;
