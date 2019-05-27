/**
 *
 * Table
 *
 */

import styled from 'styled-components';

import colors from '../../assets/styles/colors';

const Table = styled.div`
  background: white;
  width: 100%;
  overflow-x: scroll;
  table {
    border-collapse: collapse;
    width: 100%;
    min-width: 500px;
    font-family: 'Lato';
  }
  tr {
    padding-left: 2.5em;
    padding-right: 2.5em;
    text-align: left;
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
`;

export default Table;
