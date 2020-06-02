/**
 *
 * List
 *
 */

import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const List = styled.div`
  width: 100%;
  position: relative;
  overflow-x: scroll;
  border-radius: ${sizes.borderRadius};
  background: white;
  table {
    border-collapse: collapse;
    width: 100%;
    min-width: 500px;
    font-family: 'Lato';
  }
  thead {
    tr {
      height: 3rem;
      line-height: 0.1rem;
      font-weight: ${sizes.fontWeight.bold};
      text-transform: capitalize;
      td {
        background-color: ${colors.greyHeader};
      }
    }
  }
  tbody {
    color: ${colors.blueTxt};
    tr {
      height: 5.4rem;
      &::before {
        content: '-';
        display: inline-block;
        line-height: 1.1em;
        color: transparent;
        background-color: transparent;
        position: absolute;
        left: 3rem;
        width: calc(100% - 6rem);
        height: 1px;
        margin-top: -${sizes.margin * 0.1}px;
      }
      &:not(:first-of-type)::before {
        background-color: rgba(14, 22, 34, 0.04);
      }
    }
    td {
      padding: 0.75em;
      vertical-align: middle;
      font-size: 1.3rem;
      line-height: 1.8rem;
      &:first-of-type:not(:last-of-type) {
        padding-left: 3rem;
      }
      &:last-of-type:not(:first-of-type) {
        padding-right: 3rem;
      }
    }
  }
  @media (min-width: ${sizes.tablet}) {
    width: 100%;
    overflow-x: auto;
  }
`;

export default List;
