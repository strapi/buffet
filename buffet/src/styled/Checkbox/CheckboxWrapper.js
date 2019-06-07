/**
 *
 * CheckboxWrapper
 *
 */

import styled from 'styled-components';
import sizes from '../../assets/styles/sizes';

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 18px;
  line-height: 18px;
  input label {
    cursor: pointer;
    margin-bottom: 0 !important;
  }
  input + label {
    margin-left: ${sizes.margin}px;
    margin-bottom: 0;
  }
`;

export default CheckboxWrapper;
