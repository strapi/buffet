/**
 *
 * List
 *
 */

import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const ListWrapper = styled.div`
  background: white;
  font-family: 'Lato';
  box-shadow: 0 2px 4px ${colors.lightGrey};
  i {
    display: inline-block;
    text-rendering: auto;
    font-family: 'FontAwesome';
    font-weight: 600;
    color: ${colors.blueTxt};
    font-style: initial;
    padding-left: 2.25rem;
  }
  .table-wrapper {
    width: 100%;
    overflow-x: scroll;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    min-width: 500px;
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
  tbody:before {
    content: '-';
    display: block;
    line-height: 0.1em;
    color: transparent;
  }
  tbody {
    tr {
      height: 5.4rem;
    }
    td {
      padding: 0.75em;
      vertical-align: top;
      line-height: 3.4rem;
      &.icon-cell {
        line-height: 3rem;
      }
    }
  }
  @media (min-width: ${sizes.tablet}) {
    .table-wrapper {
      width: 100%;
      overflow-x: inherit;
    }
  }
`;

export default ListWrapper;
