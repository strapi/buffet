/**
 *
 * List
 *
 */

import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const List = styled.div`
  background: white;
  width: 100%;
  overflow-x: scroll;
  i {
    display: inline-block;
    text-rendering: auto;
    font-family: 'FontAwesome';
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
  // tbody:before {
  //   content: '-';
  //   display: block;
  //   line-height: 1.1em;
  //   color: transparent;
  // }
  tbody {
    tr {
      height: 5.4rem;
    }
    td {
      padding: 0.75em;
      vertical-align: middle;
      font-size: 1.3rem;
      line-height: 1.8rem;
      &:first-of-type {
        padding-left: calc(3rem + 0.75em);
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
