/**
 *
 * Card
 *
 */

import styled from 'styled-components';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';

const Card = styled.div`
  background: white;
  font-family: 'Lato';
  box-shadow: 0 2px 4px ${colors.lightGrey};
  position: relative;
  .table-wrapper {
    width: 100%;
    overflow-x: scroll;
  }
  @media (min-width: ${sizes.tablet}) {
    .table-wrapper {
      width: 100%;
      overflow-x: inherit;
    }
  }
  border-radius: ${p => p.radius};
`;

export default Card;
