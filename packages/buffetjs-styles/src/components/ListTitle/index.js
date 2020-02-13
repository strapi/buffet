/**
 *
 * ListTitle
 *
 */

import styled from 'styled-components';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const ListTitle = styled.p`
  color: ${colors.blueTxt};
  font-family: 'Lato';
  font-size: 1.8rem;
  font-weight: ${sizes.fontWeight.bold};
  line-height: 2.2rem;
`;

export default ListTitle;
