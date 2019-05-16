/**
 *
 * List
 *
 */

import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const List = styled.div`
  background: white;
  width: 100%;
  overflow-x: scroll;
  i {
    display: inline-block;
    text-rendering: auto;
    font-weight: 600;
    color: ${colors.blueTxt};
    font-style: initial;
    font-size: 13px;
    &.link-icon {
      padding-left: 2.25rem;
    }
  }
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
      font-weight: bold;
      text-transform: capitalize;
      td {
        background-color: ${colors.greyHeader};
      }
    }
  }
  tbody {
    tr {
      height: 5.4rem;
      &::before {
        content: '-';
        display: inline-block;
        line-height: 1.1em;
        color: transparent;
        background-color: transparent;
        position: absolute;
        left: ${sizes.margin * 2.8}px;
        width: calc(100% - ${sizes.margin * 6.4}px);
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
      &:first-of-type {
        padding-left: calc(3rem + 0.75em);
        padding-left: ${sizes.margin * 2.8}px;
      }
      &:last-of-type {
        padding-right: calc(3rem + 0.75em);
      }
    }
  }
  @media (min-width: ${sizes.tablet}) {
    width: 100%;
    overflow-x: inherit;
  }
`;

export default List;
