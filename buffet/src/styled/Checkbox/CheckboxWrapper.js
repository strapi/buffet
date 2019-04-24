/**
 *
 * CheckboxWrapper
 *
 */

import styled from 'styled-components';
import sizes from '../../assets/styles/sizes';

const CheckboxWrapper = styled.div`
  width: fit-content;
  input,
  label {
    display: inline-block;
    width: fit-content;
    cursor: pointer;
    vertical-align: middle;
  }
  input + label {
    margin-left: ${sizes.margin}px;
  }
`;

export default CheckboxWrapper;
