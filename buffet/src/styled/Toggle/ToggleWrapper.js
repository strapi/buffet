/**
 *
 * ToggleWrapper
 *
 */

import styled from 'styled-components';

import colors from '../../assets/styles/colors';

const ToggleWrapper = styled.div`
  width: fit-content;
  height: 34px;
  border: 1px solid ${colors.lightGrey};
  border-radius: 3px;
  label {
    display: inline-block;
    width: fit-content;
    height: 100%;
    position: relative;
    text-align: center;
    color: ${colors.black};
  }
  span {
    display: inline-block;
    width: 53px;
    height: 100%;
    line-height: 32px;
    box-shadow: 2px 2px 1px rgba(104, 118, 142, 0.05) inset;
    letter-spacing: 0.1rem;
  }
`;

export default ToggleWrapper;
