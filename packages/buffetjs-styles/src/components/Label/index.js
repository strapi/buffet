/**
 *
 * Label
 *
 */

import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const Label = styled.label`
  width: 100%;
  font-weight: ${sizes.fontWeight.semiBold};
  font-size: ${sizes.input.fontSize};
  color: ${colors.blueTxt};
`;

export default Label;
