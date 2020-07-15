/**
 *
 * CheckboxWrapper
 *
 */

import styled from 'styled-components';
import sizes from '../../assets/styles/sizes';

const CheckboxWrapper = styled.div`
  input,
  label {
    display: inline-block;
    vertical-align: top;
  }
  input {
    margin-top: 4px;
    width: 14px;
    height: 12px;
  }
  input + label {
    display: inline-block;
    width: fit-content;
    max-width: calc(100% - ${sizes.checkbox.width});
    margin-left: ${sizes.margin}px;
    margin-bottom: 0;
    line-height: 18px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`;

CheckboxWrapper.defaultProps = {
  disabled: false,
};

export default CheckboxWrapper;
