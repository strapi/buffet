/**
 *
 * InputWrapper
 *
 */

import styled from 'styled-components';

import sizes from '../../assets/styles/sizes';

const Input = styled.div`
  position: relative;
  padding-bottom: ${sizes.margin * 2.7}px;
  margin-bottom: ${sizes.margin * 1.8}px;
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
`;

export default Input;
