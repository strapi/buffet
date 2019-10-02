/**
 *
 * CustomRow
 *
 */

import styled from 'styled-components';

import colors from '../../assets/styles/colors';

const CustomRow = styled.tr`
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: ${colors.greyHover};
  }
`;

export default CustomRow;
