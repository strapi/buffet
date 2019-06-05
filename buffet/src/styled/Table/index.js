/**
 *
 * Table
 *
 */

import styled from 'styled-components';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const Table = styled.div`
  background: white;
  width: 100%;
  position: relative;
  overflow-x: scroll;
  border-radius: 3px;
  background-color: ${colors.greyHover};
  box-shadow: 0 2px 4px #e3e9f3;
  table,
  .deleteRow {
    min-width: 500px;
  }
  table {
    width: 100%;
    min-width: 500px;
    font-family: 'Lato';
    overflow: hidden;
    border-collapse: collapse;
    &.rowsSelected {
      tbody {
        &::before {
          content: '-';
          height: ${sizes.table.deleteRow.height};
          display: block;
        }
      }
    }
  }
  .deleteRow {
    // width: 100%;
    height: ${sizes.table.deleteRow.height};
    // position: absolute;
    left: 0;
    top: ${sizes.table.header.height};
    padding: 0 25px;
    font-size: 1.3rem;
    line-height: ${sizes.table.deleteRow.height};
    background-color: ${colors.greyHover};
    button {
      border: 0;
      padding: 0;
      margin: 0;
      background: transparent;
      color: ${colors.darkOrange};
      outline: 0;
      i {
        margin-left: ${sizes.margin}px;
      }
      p,
      i {
        display: inline;
      }
    }
  }
  tr {
    padding-left: 2.5em;
    padding-right: 2.5em;
    text-align: left;
    td {
      padding: 0 25px;
      font-size: 1.3rem;
      &.checkCell {
        width: 50px;
      }
    }
  }
  thead {
    tr {
      line-height: 0.1rem;
      font-weight: bold;
      text-transform: capitalize;
      td {
        height: ${sizes.table.header.height};
        background-color: ${colors.greyHeader};
        p {
          position: relative;
          padding-right: ${sizes.margin * 1.4}px;
          width: fit-content;
        }
        i {
          position: absolute;
          top: -${sizes.margin * 0.2}px;
          right: 0;
        }
      }
    }
  }
  tbody {
    background-color: white;
    td {
      height: 59px;
      p {
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  @media (min-width: ${sizes.tablet}) {
    width: 100%;
    overflow-x: auto;
  }
`;

export default Table;
